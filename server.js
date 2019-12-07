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

function calc(req, res) {
    
    // console.log("hey did I even make it this far in the program?");
    console.log(req.body.foreignCurr);
    console.log(req.body.currName);

    // var result = {success:false};

    var calc = '0';

    if (req.body.number == 0 && req.body.currName){
        var calc = 0;

    } else {
        switch(req.body.currName) {
            case "NZD":
                var calc = req.body.foreignCurr / 1.53;
                break;
            case "EUR":
                var calc = req.body.foreignCurr / .90;
                break;
            case "GBP":
                var calc = req.body.foreignCurr / .76;
                break;
            case "CAD":
                var calc = req.body.foreignCurr / 1.33;
                break;
            case "AUD":
                var calc = req.body.foreignCurr / 1.46;
                break; 
            case "undefined":
                prompt("Please Pick a currency name");

                exit;
            default: 
        }
        

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
