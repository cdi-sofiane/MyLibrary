import { Model } from './Model.js'

export class LibBooks extends Model {

    // id: Number
    constructor() {
        super()
        this.libDomain = []
    }

    get getId() {
        return this.id = this.id
    }
    set setId(id) {
        this.id = id
    }

    get getName() {
        return this.name = this.name
    }
    set setName(name) {
        this.name = name
    }

    get getCode() {
        return this.code = this.code
    }
    set setCode(code) {
        this.code = code
    }

    get getBalise() {
        return this.balise = this.balise
    }
    set setBalise(balise) {
        this.ibalise = balise
    }

    get getLastChapter() {
        return this.chapter = this.chapter
    }
    set setLastChapter(chapter) {
        this.chapter = chapter
    }

    get getLibDomain() {
        return this.libDomain = this.libDomain
    }
    set setLibDomain(libDomainIds) {
        this.libDomain = libDomainIds
    }


}