var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "keylogger",
  port: "3306"
});

connection.connect(err => {
  if (err) {
    console.log("Error connect db!")
    throw err;
  }
})

module.exports = connection;