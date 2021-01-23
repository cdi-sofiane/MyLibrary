
import con from "../config/db.js";

export class Model {
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
        if (err )throw err;
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
