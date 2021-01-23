import { types } from "util";
import { Model } from "./Model.js";
export class scrapperModel extends Model {
    constructor() {
        super()

    }
    set setdomain(domain) { this.domain = domain }
    get getdomain() { return this.domain }

    set setnovel(novel) { this.novel = novel }
    get getnovel() { return this.novel }

    set setchapter(chapter) { this.chapter = chapter }
    get getchapter() { return this.chapter }

    set setbalise(balise) { this.balise = balise }
    get getbalise() { return this.balise }

    set setfolders(folders) { this.folder = folders }
    get getfolder() { return this.folders }

    scrapp() {

    }
    static url() {
        return this.domain + this.novel + this.chapter
    }

}