const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "sqluser",
  password: "password",
  database: "socialmedia",
});

module.exports = db;
