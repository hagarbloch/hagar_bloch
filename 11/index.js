const express = require ('express');
const path = require ('path');
const app = express();
const bodyParser = require ('body-parser');
const port = 2023;
const connection = require('./DB/DB');
const createDB = require ('./DB/createDB_CRUD');
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req,res)=>{
    res.send("Hi DB");

});

app.listen(port, ()=>{
    console.log("server is running on port" , port);
});
//
app.get ('/createTable' , createDB.createTable);



