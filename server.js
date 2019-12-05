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
    
    console.log("hey did I even make it this far in the program?");

    var result = {success:false};

    if (req.body.number == 0){
        var calcResult = "$0 NZD is $0 in USD";

        var result = {success:true};
    } else {
        var calcResult = req.body.number / 1.53;
        var result = {success:true};
    }
    res.json(calcResult);
    res.json(result);
}
