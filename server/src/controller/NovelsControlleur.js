import { } from "../config/env.js";
import { LibBooks } from '../model/LibBooks.js'
class NovelsControlleur {
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
    async findNovelChapters(req, res) {
        console.log(req.body);
        try {
            const page = req.body.page
            let listObjNovels = await (new LibBooks()).findAll();
            let result = { listnovels: listObjNovels, page, logged: req.session.logged }

            res.json(result)
        } catch (error) {
            console.log(error)

        }

    }
}

export default new NovelsControlleur