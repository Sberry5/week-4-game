//--------------------This Works---------------------
$(document).ready(function(){

//Variable to store the games random number
var computerScore = computerNumber();
console.log(computerScore);

var redScore = createnumber();
console.log(redScore);

var blueScore = createnumber();
console.log(blueScore);

var yellowScore = createnumber();
console.log(yellowScore);

var greenScore = createnumber();
console.log(greenScore);

var userScore = 0;

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


//Function to place games random number in div
$("#gameNumber").text(computerScore);

//When crystal is click add number to userScores div
$("#red,#green,#blue,#yellow").on("click", function() {
	var userScore = (redScore + blueScore + yellowScore + greenScore);
	userScore += 
});

//if (userScore === computerScore){
//	wins++;
//}

//if (userScore >= computerScore){
//	losses++;
//}





//Console.log to check if clicking on image works
//console.log("yay")

//Populate number of losses


//Populate number of wins
