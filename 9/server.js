const express = require ('express');
const app = express ();
const path = require ('path')
const bodyParser = require ('bodyParser');
const sql = require ('./DB/DB');
const port = 2020;
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.send('Hi day 9!');
    res.sendFile(path.join(__dirname, "views/INDEX.html"));
});


app.get('/formHandler', (req,res)=>{
    res.send();
})

app.listen(port, ()=> {
    console.log ("server is running on port" , port) ;
})
