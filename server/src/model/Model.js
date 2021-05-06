
import { connection } from "../config/db.js";

export class Model {
  constructor() {
    this.table = (this.constructor.name.toLowerCase())
  }

  async findOneById(id) {

    let query = `SELECT * from ${this.table} where id = ${id}`;
    let result = await this.doQuery(query);

    return result;
  }
  async findAll() {
    let query = `SELECT * from libdomains right JOIN libbooks ON libbooks.libDomains_id = libdomains.id order by libbooks.id`;
    let result = await this.doQuery(query);
    return result;
  }
  async findUsersAll() {
    let query = `SELECT * from ${this.table}`;
    let result = await this.doQuery(query);
   
    return result;
  }
  async findOneByParams(objAppUser) {
    let query = `SELECT * from ${this.table} where mail = "${objAppUser.getMail}" and password ="${objAppUser.getPassword}" `;
    let result = await this.doQuery(query);
    return result;
  }
  async doQuery(query) {
    try {

      let dbQuery = await resolvePromiseRequest(query);
      return dbQuery;
    } catch (error) {
      console.error(error);
      return [];
    }

  }
}
async function resolvePromiseRequest(query) {
  return new Promise((resolve, reject) => {
    try {

      connection.query(query, (err, res) => {
        if (err) throw err;
        try {

          let string = JSON.stringify(res);
          let json = JSON.parse(string);
          resolve(json);
        } catch (err) {
          console.error(err + 'rororo');
        }

      });
    } catch (error) {
      console.log('toto');
    }
  });
}
