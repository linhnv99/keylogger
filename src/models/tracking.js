const conn = require("../configs/dbConfig");

const Tracking = function (tracking) {
  this.id = tracking.id;
  this.created_at = tracking.created_at;
};

Tracking.getOne = (trackingId) =>
  new Promise((resolve, reject) => {
    conn.query("SELECT * FROM tracking WHERE id = ?", trackingId, (err, rs) => {
      if (err) reject(err);
      resolve(rs);
    });
  });

Tracking.create = (tracking) =>
  new Promise((resolve, reject) => {
    conn.query("INSERT INTO tracking SET ?", tracking, (err, rs) => {
      if (err) reject(err);
      resolve(rs);
    });
  });
  
module.exports = Tracking;
