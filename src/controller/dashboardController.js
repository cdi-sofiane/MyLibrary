
import axios from 'axios'
import fs from 'fs'
import puppeteer from 'puppeteer'


class dashboardController {
    constructor() {

    }
    findAll(req, res) {
        let domain = "https://www.wuxiaworld.com/novel/"
        let novel = "emperors-domination/"
        let chapter = "emperor-chapter-"
        let number = ""
        let url = domain + novel + chapter
        try {


            // var file = await axios.get("https://boxnovel.com/novel/my-disciples-are-all-villains-boxnovel/chapter-362");
            // var file = await axios.get("https://www.wuxiaworld.com/novel/emperors-domination/emperor-chapter-1");

            puppeteer.launch().then(async browser => {
                const page = await browser.newPage();
                for (let index = 1; index < 5000; index++) {

                    await page.goto(`${url + index}`);
                    let title = await page.$eval('title', async (e) => {
                        return e.innerText
                    })
                    console.log(title);
                    let body = await page.$eval('div#chapter-content', (e) => {
                        return e.innerHTML
                    })

                    if (body.length < 400) {
                        var message = { 'message': "aucun chapitre trouver" }
                        res.json(message)
                    } else {

                        // var filePath = "./src/uploads/emperordomination/" + title.replace(/[^0-9]/g, '') + '.html';
                        var filePath = "./src/uploads/emperordomination/" + index + '.html';
                        fs.appendFile(filePath, body, (err) => {
                            if (err) throw err;

                            // res.send(body)
                        });
                        // await page.waitForTimeout(4000)
                    }
                    // index++;
                }
                await browser.close();
            })
        } catch (error) {
            console.log(error);
        }

    };
    findOne(req, res) {
        // console.log(req);
        res.send(req.params.id);
    };
}

export default new dashboardController;
