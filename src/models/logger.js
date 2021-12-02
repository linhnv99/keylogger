const conn = require("../configs/dbConfig");

const Logger = function (logger) {
  this.id = logger.id;
  this.file_name = logger.file_name;
  this.url = logger.url;
  this.tracking_id = logger.tracking_id;
  this.create_at = logger.createdAt;
};

Logger.getAll = () => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT * FROM logger", (err, rs, fields) => {
      if (err) reject(err);
      resolve(rs);
    });
  });
};

Logger.create = (logger) =>
  new Promise((resolve, reject) => {
    conn.query("INSERT INTO logger SET ?", logger, (err, rs) => {
      console.log(rs);
      if (err) reject(err);
      resolve(rs.insertId);
    });
  });

Logger.getOne = (id) =>
  new Promise((resolve, reject) => {
    conn.query("SELECT * FROM logger WHERE id = ?", id, (err, rs, fields) => {
      if (err) reject(err);
      resolve(rs);
    });
  });

module.exports = Logger;
