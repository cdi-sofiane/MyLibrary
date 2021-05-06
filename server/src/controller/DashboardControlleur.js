import { } from "../config/env.js";
import { scrapperModel } from '../model/scrapperModel.js'
import { LibBooks } from '../model/LibBooks.js'
import fs from 'fs'
import puppeteer from 'puppeteer'
// const { __dirname } = process.env;


class dashboardController {
    constructor() {

    }
    async findNovels(req, res) {
        try {
            const page = req.body.page
            let listObjNovels = await (new LibBooks()).findAll();
            let result = { listnovels: listObjNovels, page, logged: req.session.logged }
           
            res.json(result)
        } catch (error) {
            console.log(error)

        }

    }
    // async 

    findAllNovels(req, res) {
        let scrapper = new scrapperModel()
        scrapper.setdomain = "https://boxnovel.net/301257/"
        scrapper.setnovel = "turns-out-im-a-great-cultivator/"
        scrapper.setchapter = "chapter-"
        scrapper.setbalise = ".text-content"
        scrapper.setfolder = `./src/uploads/${scrapper.getnovel}/`
        let url = scrapper.url()
        let message = []
        let files = []
        try {

            puppeteer.launch().then(async browser => {
                const page = await browser.newPage();
                let limit = 0;
                for (let index = 492; index < 5000; index++) {
                    let filePath = scrapper.getfolder + index + '.html';
                    try {
                        await page.goto(`${url + index}`);


                        let title = await page.$eval('title', async (e) => {
                            return e.innerText;
                        })
                        await page.waitForSelector(scrapper.getbalise, { timeout: 1000 })
                        message = { 'message': "test" }

                        let body = await page.$eval(scrapper.getbalise, async (e) => {

                            return e.innerHTML
                        })

                        console.log(title)
                        if ((body.length < 5000)) {
                            message = { 'message': "aucun chapitre trouver" }
                            limit += 1;
                            if (limit > 10) {

                                return message
                            }
                        } else {

                            fs.appendFile(filePath, body, (err) => {
                                if (err) throw err;
                            });
                            files.push(filePath)
                            message = { 'message': "chapitre trouver" }
                        }

                        console.log(message);
                    } catch (error) {
                        console.log(error)
                        return message
                    }

                }
                await browser.close();
                return message
            })
        } catch (error) {
        }


    };
    findOne(req, res) {
        res.send(JSON.stringify(req.session));
    };
}

export default new dashboardController;
