var path = require("path");
var express = require("express");

var app = express();

//make public/static stuff
app.use(express.static("public"));
app.use(express.json() );
app.use(express.urlencoded({ extended: true }));


app.post("/calc", calc);     


app.listen(3000, function () {
    console.log("Server is up and listening on port 3000");
});

//functions

function calc(req, res) {
    
    var result = {success:false};

    if (req.body.number == 0){
        var result = "$0 NZD is $0 in USD";
    } else {
        var result = req.body.number / 1.53;
    }

    res.json(result)
}
