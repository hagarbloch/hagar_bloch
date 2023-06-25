const mysql = require('mysql2');
const SQL= require ('./db');

const createTable = (req,res)=>{
    const Q1 = "CREATE TABLE IF NOT EXISTS usersAA (id int(9) PRIMARY KEY,name VARCHAR(255),password VARCHAR(255));";
    SQL.query(Q1, (err, mysqlres)=>{
        if(err) {
            console.log(err);
            res.send(err);
            return;
        }
        else{
        console.log("table created");
        res.send('table created');
        return;
        };
    });
};


const dropTable = (req,res)=>{
    const Q2 = "DROP TABLE usersAA;";
    SQL.query(Q2, (err, mysqlres)=>{
        if(err) {
            console.log(err);
            res.send(err);
            return;
        }
        else{
        console.log("table dropped");
        res.send('table dropped');
        return;
        };
    });
};


module.exports = {createTable, dropTable};