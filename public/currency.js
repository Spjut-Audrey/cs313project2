//coping from week 12 for base file

function dollarCalc() {
    //get number
    var foreignCurr = $("#foreignCurr").val();
    
    //get name
    var currName = $('input[name=currName]:checked').attr('id');

	var params = {
        foreignCurr: foreignCurr,
        currName: currName
	};

	$.post("/dollarCalc", params, function(usdCalcResult) {
		if (usdCalcResult) {
            $("#status").text("Successfully calculated.");
            $("#result").html("$");
            $("#result").append(foreignCurr);
            $("#result").append(" ");
            $("#result").append(currName);
            $("#result").append(" is worth $");
            $("#result").append(usdCalcResult);
            $("#result").append(" in USD");
		} else {
			$("#status").text("Error calculating to USD. Please try again.");
		}
    });
}

function calc() {
    //get number
    var foreignCurr = $("#foreignCurr").val();
    
    //get name
    var currName = $('input[name=currName]:checked').attr('id');

    // var params = {
    //     foreignCurr: foreignCurr,
    //     currName: currName
	// };

    // $.post("/calc", params, function(gbpResult) {

    
    // set endpoint and your access key
    endpoint = 'latest'
    access_key = '1d7a9025dd73a20937855d07827601f5';

    // get the most recent exchange rates via the "latest" endpoint:
    $.ajax({
        url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key,   
        dataType: 'jsonp',
        success: function(json) {
            switch(currName) {
                case "PLN":
                    var gbpResult = foreignCurr / json.rates.PLN * json.rates.GBP;
                    break;
                case "MXN":
                    var gbpResult = foreignCurr / json.rates.MXN * json.rates.GBP;
                    break;
                case "USD":
                    var gbpResult = foreignCurr / json.rates.USD * json.rates.GBP;
                    break;
                case "CAD":
                    var gbpResult = foreignCurr / json.rates.CAD * json.rates.GBP;
                    break;
                case "AUD":
                    var gbpResult = foreignCurr / json.rates.AUD * json.rates.GBP;
                    break;
                default: 
                }

            // exchange rata data is stored in json.rates
            var gbpResultFixed = gbpResult.toFixed(2);
            // alert(gbpResultFixed);
            // // base currency is stored in json.base
            // alert(json.base);
            
            // timestamp can be accessed in json.timestamp
            // alert(json.timestamp);

            if (gbpResult) {
                $("#GBPstatus").text("Successfully calculated.");
                $("#GBPresult").html("$");
                $("#GBPresult").append(foreignCurr);
                $("#GBPresult").append(" ");
                $("#GBPresult").append(currName);
                $("#GBPresult").append(" is worth $");
                $("#GBPresult").append(gbpResultFixed);
                $("#GBPresult").append(" in GBP");
            } else {
                $("#GBPstatus").text("Error calculating to GBP. Please try again.");
            }
            
            }
        });

        
    
        
        };
    // });
    // try and get the calculated result to display to user in HTML
    // $.post("/calc", params, function(calcDisplay) {
    //     if (calcDisplay) {
    //         $("#result").html(calcDisplay);
    //         $("#result").append(" is how much NZD is worth in USD");
    //     } else {
	// 		$("#result").text("Error calculating. Please try again.");
	// 	}
    // }


// function logout() {
// 	$.post("/logout", function(result) {
// 		if (result && result.success) {
// 			$("#status").text("Successfully logged out.");
// 		} else {
// 			$("#status").text("Error logging out.");
// 		}
// 	});
// }

// function getServerTime() {
// 	$.get("/getServerTime", function(result) {
// 		if (result && result.success) {
// 			$("#status").text("Server time: " + result.time);
// 		} else {
// 			$("#status").text("Got a result back, but it wasn't a success. Your reponse should have had a 401 status code.");
// 		}
// 	}).fail(function(result) {
// 		$("#status").text("Could not get server time.");
// 	});
// }
