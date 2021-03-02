import { } from "../config/env.js";
import { scrapperModel } from '../model/scrapperModel.js'
import { LibBooks } from '../model/LibBooks.js'
import fs from 'fs'
import puppeteer from 'puppeteer'
import path from 'path'
const __dirname = path.resolve();
// const { __dirname } = process.env;


class dashboardController {
    constructor() {

    }
    async findNovels(req, res) {
        let listObjNovels = await (new LibBooks()).findAll();
        // console.log(listObjNovels);
        // res.set('Content-Type', 'application/json');
        // res.send(JSON.stringify(listObjNovels))
        // const listnovels = [
        //     { "id": 1, "name": "Leanne Graham" },
        //     { "id": 2, "name": "Ervin Howell" },
        //     { "id": 3, "name": "Clementine Bauch" },
        //     { "id": 4, "name": "Patricia Lebsack" }
        // ]
        res.json({listnovels :listObjNovels})

    }

    findAllNovels(req, res) {
        // console.log(req);
        // novel/emperors-domination/emperor-chapter-3385
        // https://boxnovel.net/301257/turns-out-im-a-great-cultivator/chapter-
        let scrapper = new scrapperModel()
        scrapper.setdomain = "https://boxnovel.net/301257/"
        // scrapper.let novel = "emperors-domination/"
        scrapper.setnovel = "turns-out-im-a-great-cultivator/"
        // scrapper.let chapter = "emperor-chapter-"
        scrapper.setchapter = "chapter-"
        // scrapper.let balise = "div#chapter-content"
        // scrapper.setbalise = "div#chapter-content"
        scrapper.setbalise = ".text-content"
        // scrapper.let folder = "./src/uploads/emperordomination/"
        scrapper.setfolder = `./src/uploads/${scrapper.getnovel}/`
        // scrapper.let domain = "https://www.wuxiaworld.com/novel/"
        let url = scrapper.url()
        // console.log(scrapper.getfolder);
        let message = []
        let files = []
        try {

            puppeteer.launch().then(async browser => {
                const page = await browser.newPage();
                let limit = 0;
                for (let index = 492; index < 5000; index++) {
                    let filePath = scrapper.getfolder + index + '.html';
                    // console.log(filePath);
                    try {
                        await page.goto(`${url + index}`);


                        let title = await page.$eval('title', async (e) => {
                            return e.innerText;
                        })
                        // try {
                        await page.waitForSelector(scrapper.getbalise, { timeout: 1000 })
                        // } catch (error) {
                        message = { 'message': "test" }
                        //     res.send(`${index + files}<br>`)
                        //     break
                        // }
                        // console.log(message);

                        let body = await page.$eval(scrapper.getbalise, async (e) => {

                            return e.innerHTML
                        })

                        console.log(title)
                        if ((body.length < 5000)) {
                            // console.log(body.length + '\n' + scrapper.getbalise);
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
                // res.send(files)
                return message
            })
        } catch (error) {
            // console.log(message);
            // return message
        }


    };
    findOne(req, res) {
        // console.log(req);
        res.send(JSON.stringify(req.session));
    };
}

export default new dashboardController;
