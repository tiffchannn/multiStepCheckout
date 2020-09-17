const dbHelpers = require('./dbHelpers.js');

const controller = {
  get: (req, res) => {
    dbHelpers.get((err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  },
  post: (req, res) => {
    dbHelpers.post(req, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  }
}

module.exports = controller;