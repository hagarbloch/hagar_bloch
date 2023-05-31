const express = require ('express');
const app = express ();
const path = require ('path')
const port = 2020;
app.use(express.static(path.join(__dirname, "static")))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/INDEX.html"));
});


app.get('/formHandler', (req,res)=>{
    res.send('THANK YOU!');
})

app.listen(port, ()=> {
    console.log ("server is running on port" , port) ;
})
