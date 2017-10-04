//--------------------Crystal Game---------------------
$(document).ready(function(){

//Variable to store the games random number
var computerScore = computerNumber();
//console.log(computerScore);

var redScore = createnumber();
console.log(redScore);

var blueScore = createnumber();
console.log(blueScore);

var yellowScore = createnumber();
console.log(yellowScore);

var greenScore = createnumber();
console.log(greenScore);

var userScore;

var wins = 0;

var losses = 0;



//Function to create a random number for each crystal
	function createnumber () {
		return Math.floor(Math.random() * 12) + 1;
	}

//Function to create a random number for the computer score
	function computerNumber () {
		return Math.floor(Math.random() * 120) + 19;
	}

//Function to initialize game


//Code place games random number in div
$("#gameNumber").text(computerScore);

//$("#usernumber").text(userScore);

//When crystal is click add number to usernumber div
$("#red").on("click", function() {
		userScore += redScore;	
		$("#usernumber").text(userScore);
	});	
});

// $("#red").on("click", function() {
// 		(userScore += redScore).toString();	
// 	});	

// });



//Populate number of wins
//if (userScore === computerScore){
//	wins++;
//}

//Populate number of losses
//else if (userScore >= computerScore){
//	losses++;
//}


//Reset function
//	function reset(){
//		usernumber = 0
//	}





