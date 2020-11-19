import { Model } from "./Model.js";
export class AppUser extends Model {
  constructor() {
    super();
  }
  async findOneById(id) {
    let query = `SELECT * from app_user where id = ${id}`;
    let objAppUser = await this.doQuery(query);

    return objAppUser;

  }
}
