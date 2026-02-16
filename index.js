const express = require("express");

const app = express();
const port = 3000;

app.get("/", function(req, res){
    res.status(200).json({
        message: "Server is up, welcome to microsoft azure"
    })
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is listening on port ${port}`);
});