import { LibChapters } from './entity/LibChapter.js'


class ChapterRepository extends LibChapters {

    constructor() {
        super()
        this.table = Object.getPrototypeOf(this.constructor).name.toLowerCase()
        // Object.getPrototypeOf()
        console.log();
    }

    async findChapterByNovel(id) {
        let query = `SELECT * from ${this.table} where libBooks_id = "${id}"  `;
        let result = await this.doQuery(query);
        return result
    }
}

export default new ChapterRepository