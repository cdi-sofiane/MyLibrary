
import { Model } from "./Model.js";
export class AppUser extends Model {

    constructor(_id) {
        super();
        this.id = _id
    }
    set _id(id) {
        this.id;

    }
    get _id() {
        this.id = this.id;
        return this.id
    }

    async findOneById(id) {
        let query = `SELECT * from app_user where id = ${id}`;
        let result = await this.doQuery(query);
        // this.Id(result.id)
        // console.log(this.Id)
        return result;

    }
}
