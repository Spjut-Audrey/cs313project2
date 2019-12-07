var path = require("path");
var express = require("express");
var ejs = require("ejs");

var app = express();

// make public/static stuff
// why isn't this working for me???? BVLEHFHOUIS H FKUHEFLWEIHEFIHLU
app.use(express.static("public"));
app.use(express.json() );
app.use(express.urlencoded({ extended: true })); 

app.get('/', function (req, res) {
    console.log("Received a request for /");


  });


app.post("/calc", calc);     


app.listen(5000, function () {
    console.log("Server is up and listening on port 5000");
});

//functions

function calc(req, res, next) {
    
    // console.log("hey did I even make it this far in the program?");
    console.log(req.body.nzd);

    var result = {success:false};

    if (req.body.number == 0){
        var calcResult = "$0 NZD is $0 in USD";

        var result = {success:true};
    } else {
        var calc = req.body.nzd / 1.53;

        var calcResult = calc.toFixed(2);

        console.log(calcResult);
        // var result = {success:true};

        // next();
        
        // fix this with a middleware and return result in next func?
        // var calcDisplay = {calcResult:calcResult};

        // return calcDisplay;
    }
    res.json(calcResult);

}

// function displayCalc(req, res, next){

//     console.log("I made it");

//     res.json(calcResult);

//     next();
// }
