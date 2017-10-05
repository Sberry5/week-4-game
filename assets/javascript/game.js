//--------------------Crystal Game---------------------

//When/how to use document.ready?
//$(document).ready(function(){


//Global variables-------------------------------------

//Variable to store the games random number
var gameScore = computerNumber();
//console.log(computerScore);

//Code place games random number in div
$("#gameNumber").text(gameScore);


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

//When crystal is clicked add number to usernumber div.
//I realize a loop would be better, or calling all crystals
//at a time. Couldn't figure it out.
$("#red").on("click", function() {
		userScore += redScore;	
		$("#usernumber").text(userScore);
	});

$("#blue").on("click", function() {
		userScore += blueScore;	
		$("#usernumber").text(userScore);
	});

$("#green").on("click", function() {
		userScore += greenScore;	
		$("#usernumber").text(userScore);
	});	

$("#yellow").on("click", function() {
		userScore += yellowScore;	
		$("#usernumber").text(userScore);
	});	

//Score Function
	function score () {

//Populate number of wins
		if (userScore == gameScore){
		wins ++;
		$("#winsNum").text(wins);
		}
//Populate number of losses
		else if (userScore >= gameScore){
		losses ++;
		$("#lossesNum").text(losses);
		reset();
		}
};

//Reset function
	function reset(){
		userScore = 0

	}

//Reset function
//	function reset(){
//		usernumber = 0
//	}








