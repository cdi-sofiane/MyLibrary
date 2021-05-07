import { } from "../config/env.js";
import { LibBooks } from '../model/entity/LibBooks.js'
import ChapterRepository from '../model/ChapterRepository.js'
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
    async findChapters(req, res) {
        let { id } = req.params
        let result = []
        try {
            result = await ChapterRepository.findChapterByNovel(id)

            res.json({ 'listchapter': result })
        } catch (error) {
            console.log(error)

        }

    }
}

export default new NovelsControlleur