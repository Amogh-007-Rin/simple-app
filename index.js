const express = require("express");

const app = express();
const port = 3000;

app.get("/server", function(req, res){
    res.json({
        message: "Server is up, welcome to microsoft azure"
    })
});

app.listen(port, () =>{
    console.log("server is running")
});