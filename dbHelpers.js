const db = require('./db.js');

const dbHelpers = {
  get: (callback) => {
    let queryStr = `SELECT * from Checkout`;
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },
  post: (req, callback) => {
    const {name, email, password, address, line1, line2, city, state, zip, phone, cc, date, cvv, billing} = req.body;
    let queryStr = `INSERT INTO Checkout (name, email, password, address, line1, line2, city, state, zip, phone, cc, date, cvv, billing) VALUES ("${name}", "${email}", "${password}", "${address}", "${line1}", "${line2}", "${city}", "${state}", ${parseInt(zip)}, "${phone}", ${zip}, "${date}", ${parseInt(cvv)}, ${parseInt(billing)})`;
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }
}

module.exports = dbHelpers;