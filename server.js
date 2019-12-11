var express = require("express");
var app = express();

// make public/static stuff
// why isn't this working for me???? BVLEHFHOUIS H FKUHEFLWEIHEFIHLU
app.use(express.static("public"));
app.use(express.json() );
app.use(express.urlencoded({ extended: true })); 

//maybe this port will fix everything?? PLEASE I JUST WANT IT TO WORK
const port = process.env.PORT || 5000;
// listen for port
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});

// app.listen(5000, function () {
//     console.log("Server is up and listening on port 5000");
// });

app.get('/', function (req, res) {
    console.log("Received a request for /");
  });


app.post("/dollarCalc", dollarCalc);
app.post("/calc", calc);     

//functions

function calc(req, res) {
    console.log("I've made it this far");
    console.log(req.body.foreignCurr);
    console.log(req.body.currName);
    
    var gbpResult = 0;
    // switch(req.body.currName) {
    //     case "PLN":
    //         var gbpResult = req.body.foreignCurr / json.rates.GBP;
    //         break;
    //     case "MXN":
    //         var gbpResult = req.body.foreignCurr / json.rates.GBP;
    //         break;
    //     case "GBP":
    //         var gbpResult = req.body.foreignCurr / json.rates.GBP;
    //         break;
    //     case "CAD":
    //         var gbpResult = req.body.foreignCurr / json.rates.GBP;
    //         break;
    //     case "AUD":
    //         var gbpResult = req.body.foreignCurr / json.rates.GBP;
    //         break;
    //     default: 
    //     }
    console.log(gbpResult);
    res.json(gbpResult);
}

function dollarCalc(req, res) {
    
    // console.log("hey did I even make it this far in the program?");
    console.log(req.body.foreignCurr);
    console.log(req.body.currName);

    // var result = {success:false};

    var dollarCalc = '0';

    if (req.body.number == 0 && req.body.currName){
        var dollarCalc = 0;

    } else {
        switch(req.body.currName) {
            case "PLN":
                var dollarCalc = req.body.foreignCurr / 3.86;
                break;
            case "MXN":
                var dollarCalc = req.body.foreignCurr / 19.14;
                break;
            case "GBP":
                var dollarCalc = req.body.foreignCurr / .76;
                break;
            case "CAD":
                var dollarCalc = req.body.foreignCurr / 1.33;
                break;
            case "AUD":
                var dollarCalc = req.body.foreignCurr / 1.46;
                break; 
            case "undefined":
                prompt("Please Pick a currency name");

                exit;
            default: 
        }
        var usdCalcResult = dollarCalc.toFixed(2);

        console.log(usdCalcResult);
        // var result = {success:true};

        // next();
        
        // fix this with a middleware and return result in next func?
        // var calcDisplay = {calcResult:calcResult};

        // return calcDisplay;
    }
    res.json(usdCalcResult);

}

// function displayCalc(req, res, next){

//     console.log("I made it");

//     res.json(calcResult);

//     next();
// }
