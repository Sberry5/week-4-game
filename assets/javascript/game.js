//--------------------Crystal Game---------------------
$(document).ready(function(){

//Variable to store the games random number
// var gameScore = computerNumber();
//console.log(gameScore);

//Code place games random number in div
$("#gameNumber").text(gameScore);

var redScore;
var blueScore;
var yellowScore;
var greenScore;
var gameScore;

reset();
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
//Will try to setup with one function
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
	function score(){

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


//Reset function
	function reset(){
		redScore = createnumber();
		console.log(redScore);
		greenScore = createnumber();
		console.log(greenScore);
		blueScore = createnumber();
		console.log(blueScore);
		yellowScore = createnumber();
		console.log(yellowScore);
		userScore = 0;
		gameScore = computerNumber();
		$("#gameNumber").text(gameScore);
	}

});

//--------------------To figure out--------------------

// $(".crystals").on("click", function(event) {
// 		userScore += redScore;	
// 		$("#usernumber").text(userScore);
// 		console.log(event.target);
// //if id matches blue increment by blues score
// 		if ()
// 	});




