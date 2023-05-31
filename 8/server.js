const express = require ('express');
const path = require ('path');
const upp = express();
const port =2034;
app.use(express.static(path.join(__dirname,"static")));


app.get('/', (req,res)=>{
    res.send("Hi Day8!");
});


app.listen(port, ()=>{
    console.log("server is running on port", port);
});
