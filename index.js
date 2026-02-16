const express = require("express");

const app = express();
const port = 80;

app.get("/", function(req, res){
    res.send.json({
        message: "Server is up, welcome to microsoft azure"
    })
});

app.listen(port, () =>{
    console.log("server is running at port 80")
});