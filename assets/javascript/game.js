//--------------------Crystal Game---------------------

//When/how to use document.ready?
//$(document).ready(function(){


//Start Game
//$(document).ready(function(startGame){
//	(startGame)
//Variable to store the games random number
var gameScore = computerNumber();
//console.log(computerScore);

//Code place games random number in div
$("#gameNumber").text(gameScore);
//});


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
		return Math.floor((Math.random() * 12) + 1);
	}

//Function to create a random number for the gameScore
	function computerNumber () {
		return Math.floor((Math.random() * 120) + 19);
	}

//When crystal is clicked add number to usernumber div.
//I realize a loop would be better, or calling all crystals
//at a time. Couldn't figure it out.
$("#red").on("click", function() {
		userScore += redScore;	
		$("#usernumber").text(userScore);
		score();
	});

$("#blue").on("click", function() {
		userScore += blueScore;	
		$("#usernumber").text(userScore);
		score();
	});

$("#green").on("click", function() {
		userScore += greenScore;	
		$("#usernumber").text(userScore);
		score();
	});	

$("#yellow").on("click", function() {
		userScore += yellowScore;	
		$("#usernumber").text(userScore);
		score();
	});	

//Score Function
	function score () {

//Populate number of wins
		if (userScore === gameScore){
		wins ++;
		$("#winsNum").text(wins);
		alert("You win!");
		reset();
		}
//Populate number of losses
		else if (userScore >= gameScore){
		losses ++;
		$("#lossesNum").text(losses);
		alert("You lost!");
		reset();
		}
};

(score);

//Reset function
	function reset(){
		userScore = 0;
		computerNumber();

	}



//--------------------Questions--------------------
//When/how to use document.ready?
//$(document).ready(function(){

//Why does the following console.log different numbers for
//additions, but adds the same number for every button to
//the page?
// $(".crystals").on("click", function() {
// 		userScore += redScore;	
// 		$("#usernumber").text(userScore);
// 	});




