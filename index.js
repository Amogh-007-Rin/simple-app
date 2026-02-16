const express = require("express");

const app = express();
const port = 3000;

app.get("/", function(req, res){
    res.status(200).json({
        message: "Server is up, welcome to microsoft azure"
    })
});

app.listen(port, () =>{
    console.log(`Server is running at http://131.163.96.82:3000`);
});