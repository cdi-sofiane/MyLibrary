
import con from "../config/db.js";

export class Model {
  constructor() {
    this.table = (this.constructor.name.toLowerCase())
  }

  async findOneById(id) {

    let query = `SELECT * from ${this.table} where id = ${id}`;

    let result = await this.doQuery(query);
    console.log(this.table)

    return result;
  }
  async findAll() {
    let query = `SELECT * from libdomains right JOIN libbooks ON libbooks.libDomains_id = libdomains.id order by libbooks.id`;
    let result = await this.doQuery(query);
    console.log(this.table)
    return result;
  }
  async doQuery(query) {
    try {

      let dbQuery = await resolvePromiseRequest(query);
      // console.log(dbQuery );
      return dbQuery;
    } catch (error) {
      // return null;
      console.error(error);
    }

  }
}
async function resolvePromiseRequest(query) {
  return new Promise((resolve, reject) => {
    try {

      con.query(query, (err, res) => {
        if (err) throw err;
        // if (res.length > 0) {
        try {

          let string = JSON.stringify(res);
          let json = JSON.parse(string);
          resolve(json);
        } catch (err) {

          console.error(err + 'rororo');
        }
        // } else {
        //  resolve(err);
        // }
      });
    } catch (error) {
      console.log('toto');
    }
  });
}
