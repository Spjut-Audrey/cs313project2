//coping from week 12 for base file

function calc() {
	var nzd = $("#nzd").val();

	var params = {
		nzd: nzd
	};

	$.post("/calc", params, function(result) {
		if (result && result.success) {
            $("#status").text("Successfully calculated.");
            $("$result").text(calcResult + " is how much NZD is worth in USD");
		} else {
			$("#status").text("Error calculating. Please try again.");
		}
	});
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