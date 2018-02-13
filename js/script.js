function submitAnswers() {
	var total = 5;
	var score = 0;

	// Get User Input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	// Validation
	
	for ( i = 1; i <= total; i++ ) {
		if (eval('q'+i) == null || eval('q'+i) == '') {
		        alert('You missed question '+ i);
			// var wrong = [i];
			// results.innerHTML = '<h3> You missed question <span> + wrong </span></h3>';
			// results.innerHTML = '<h3> You missed question<span> + wrong </span></h3>';
			return false;
			
		}
	}

	// Set Correct Answers
	var answers = ["a", "c", "b", "b", "c"];

	// Check Answers
	for ( i = 1; i <= total; i++) {
		if ( eval('q'+i) == answers[i - 1]) {
			score++;
		}
	}

	// Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>'+score+'</span> out of   <span>'+total+'</span></h3>';
	/*('You score '+score+' out of ' +total); */
	
	
	var results = document.getElementById('resultsb');
	 results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
	/* ('You score '+score+' out of ' +total); */
  
  // Display Last Result
   var oldresult = localStorage.getItem('results');
	 results.innerHTML = '<h3>Your last score was <span>'+oldresult+'</span></h3>';
	/* alert('You score '+score+' out of ' +total); */
        
	// get the text
   var text = $('#results').text();
  
  // set the item in localStorage
  localStorage.setItem('results', text);

  // bind text to 'blur' event for div
  $('#results').on('blur', function(){
   
	// check the new text
  var newText = $(this).text();
	
	// overwrite the old text
  localStorage.setItem('results', newText);

	// test if it works
	/* alert( localStorage.getItem('results') ); */
  
})

  
	return false;

}
