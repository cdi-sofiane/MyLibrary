
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

  
}
