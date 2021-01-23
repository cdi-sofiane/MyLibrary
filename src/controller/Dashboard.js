
import { scrapperModel } from '../model/scrapperModel.js'
import fs from 'fs'
import puppeteer from 'puppeteer'


class dashboardController {
    constructor() {

    }
    findAll(req, res) {

        // novel/emperors-domination/emperor-chapter-3385
        let scrapper = new scrapperModel()
        scrapper.setdomain = "https://www.wuxiaworld.com/novel/"
        // scrapper.let novel = "emperors-domination/"
        scrapper.setnovel = "emperors-domination/"
        // scrapper.let chapter = "emperor-chapter-"
        scrapper.setchapter = "emperor-chapter-"
        // scrapper.let balise = "div#chapter-content"
        scrapper.setbalise = "div#chapter-content"
        // scrapper.let folder = "./src/uploads/emperordomination/"
        scrapper.setfolders = "./src/uploads/emperor-domination/"
        // scrapper.let domain = "https://www.wuxiaworld.com/novel/"
        let url = scrapper.url()
        let message
        console.log(scrapper);
        try {

            puppeteer.launch().then(async browser => {
                const page = await browser.newPage();
                for (let index = 3383; index < 5000; index++) {
                    try {
                        await page.goto(`${url + index}`);
                        let title = await page.$eval('title', async (e) => {
                            return e.innerText;
                        })
                        // console.log(title)
                        let body = await page.$eval(scrapper.getbalise, async (e) => {
                            return e.innerHTML
                        })
                        // console.log(body)
                        let filePath = scrapper.getfolder + index + '.html';
                        if ((body.length < 1000) || (scrapper.getbalise == undefined)) {
                            console.log(body.length + '\n' + scrapper.getbalise);
                            message = { 'message': "aucun chapitre trouver" }
                            res.json(message)
                            // return message

                        } else {
                            if (filePath)
                                fs.appendFile(filePath, body, (err) => {
                                    if (err) throw err;
                                });
                            message = { 'message': "success" }

                        }
                    } catch (error) {
                        console.log(error)
                        return message
                    }
                }
                await browser.close();
                return message
            })

        } catch (error) {
            console.log(error);
            return message
        }
        res.send(message)
    };
    findOne(req, res) {
        // console.log(req);
        res.send(req.params.id);
    };
}

export default new dashboardController;
