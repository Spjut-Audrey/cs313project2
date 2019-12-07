//coping from week 12 for base file

function calc() {
    //get number
    var foreignCurr = $("#foreignCurr").val();
    
    //get name
    var currName = $('input[name=currName]:checked').attr('id');

	var params = {
        foreignCurr: foreignCurr,
        currName: currName
	};

	$.post("/calc", params, function(calcResult) {
		if (calcResult) {
            $("#status").text("Successfully calculated.");
            $("#result").html("$");
            $("#result").append(foreignCurr);
            $("#result").append(" ");
            $("#result").append(currName);
            $("#result").append(" is worth $");
            $("#result").append(calcResult);
            $("#result").append(" in USD");
		} else {
			$("#status").text("Error calculating. Please try again.");
		}
    });
    
    // try and get the calculated result to display to user in HTML
    // $.post("/calc", params, function(calcDisplay) {
    //     if (calcDisplay) {
    //         $("#result").html(calcDisplay);
    //         $("#result").append(" is how much NZD is worth in USD");
    //     } else {
	// 		$("#result").text("Error calculating. Please try again.");
	// 	}
    // }
}

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