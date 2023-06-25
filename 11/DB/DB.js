const mysql = require ('mysql2');
const config = require ('./DB.config');
const connection =  mysql.createConnection({
    host: config.HOST,
    database: config.DB,
    user: config.USER,
    password: config.PASSWORD,
});

connection.connect(error => {
    if (error) throw error;
    console.error('connected to DB', );
});

module.exports = {connection};
  

  