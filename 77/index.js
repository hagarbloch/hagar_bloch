// import and init
const express = require ('express');
const app = express ();
const path = require ('path')
const port = 2020;
app.use(express.static(path.join(__dirname, "static")))

// routing
app.get('/' , function (req,res) {
    console.log('this is the body:', req.body);
    res.send("hi express");
});
app.get('/page2', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/index.html"));
});
app.get('/page3', (req,res)=> {
    res.sendFile(path.join(__dirname, "views/page3.html"));

})
app.get('/page4', (req,res)=>{
    console.log('this is the body:', req.query);
    res.sendFile(path.join(__dirname, "views/page4.html"));
})
app.get('/formHandler', (req,res)=>{
    var x = req.query;
    res.send(x);
})
// setup listen
app.listen(port, ()=> {
    console.log ("server is running on port" , port) ;
})
