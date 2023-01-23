const mysql = require('mysql2'); 
require('dotenv').config();

module.exports = mysql.createConnection({
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "",
  DATABASE: "board",
  socketPath: '/tmp/mysql.sock',
  dialect: "mysql",
  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000
  }, port: 3306
});
