const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "demo",
  connectionLimit: 10,
});

const insert = (data) =>
  new Promise((resolve, reject) => {
    pool.query("INSERT INTO logs SET ?", { content: data }, (err, rs) => {
      if (err) reject(err);
      resolve(rs.insertId);
    });
  });

module.exports = { insert };