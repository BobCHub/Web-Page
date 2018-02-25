if (typeof(Storage) !== "undefined") {

	// Store
	var username = prompt("Your name:", "");
	localStorage.setItem("name", username);

	// Retrieve
	document.getElementById("result").innerHTML = localStorage.getItem("name");
} else {
	document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}



function submitAnswers() {
	var total = 5;
	var score = 0;
	var highscore = 0;


	var username = localStorage.getItem('name');

	//Get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	//Validation
	for (i = 1; i <= total; i++) {
		if (eval('q' + i) == null || eval('q' + i) == '') {
			alert('You Missed question ' + i);
			return false;
		};
	}

	//Set Corrent Answers
	var answers = ["a", "c", "b", "b", "c"];

	//Check Answers
	for (i = 1; i <= total; i++) {
		if (eval('q' + i) == answers[i - 1]) {
			score++;
		}
	}

	// Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You Scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';

	// Display Results Under Submit button	
	var results = document.getElementById('resultsb');
	results.innerHTML = '<h3>Result: You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';


	// save result to localStorage
	localStorage.setItem('result', score);

	if (localStorage.getItem('highscore') >= 0) { // if highscore greater or equal to zero 

		if (score > localStorage.getItem("highscore")) { // if score is equal or larger than highscore
			localStorage.setItem("highscore", score); // set score as highscore

			var results = document.getElementById('highscore');
			results.innerHTML = '<h3><span>Thats your best score</span></h3>';
			$('#highscore').fadeOut(0); // hide display as highscore div

		}
		$('#highscore').fadeIn(2000);  // display as highscore .fadein highscore div
		$('#highscore').fadeOut(3000); // fade out
	}



	return false;
}
