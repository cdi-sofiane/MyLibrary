import con from "../config/db.js";

export class Model {
  async doQuery(query) {
    try {
      let dbQuery = await resolvePromiseRequest(query);
      return dbQuery;
    } catch (error) {
      return error;
    }
  }
}
function resolvePromiseRequest(query) {
  return new Promise((resovle, reject) => {
    con.query(query, (err, res) => {
      // if (err) throw err;
      if (res.length > 0) {
        let string = JSON.stringify(res[0]);
        let json = JSON.parse(string);
        resovle(json);
      } else {
        reject(err);
      }
    });
  });
}
