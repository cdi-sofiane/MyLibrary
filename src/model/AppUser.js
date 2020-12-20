
import { Model } from "./Model.js";
export class AppUser extends Model {


  constructor() {
    super();

  }
  setId(id) {
    this.id = id;
    return this
  }

  async findOneById() {
    let query = `SELECT * from app_user where id = ${this.id}`;
    let objAppUser = await this.doQuery(query);

    return objAppUser;

  }
}
