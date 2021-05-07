import { Model } from './Model.js'

export class LibChapters extends Model {

    constructor() {
        super()
    }

    get getCode() {
        return this.code;
    }

    set setCode(code) {
        this.code = code;
    }

    get getTitle() {
        return this.title;
    }

    set setTitle(title) {
        this.title = title;
    }

    get getChapter() {
        return this.chapter;
    }

    set setChapter(chapter) {
        this.chapter = chapter;
    }

    get getLibBooks_id() {
        return this.libBooks_id;
    }

    set setLibBooks_id(libBooks_id) {
        this.libBooks_id = libBooks_id;
    }

}