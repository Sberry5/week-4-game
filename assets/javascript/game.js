//--------------------Crystal Game---------------------
$(document).ready(function(){

//Variable to store the games random number
var computerScore = computerNumber();
//console.log(computerScore);

});

var userScore;

var wins = 0;

var losses = 0;

	function randomNumCrystals (){
//Crystals object
	return {

		"redcrystal": {
			points:Math.floor(Math.random() * 11) + 1, 
			image: "assets/images/red-crystal.jpg"
	},
		"greencrystal":{
			points:Math.floor(Math.random() * 11) + 1, 
			image: "assets/images/green-crystal.jpg"
	},
		"yellowcrystal":{
			points:Math.floor(Math.random() * 11) + 1, 
			image: "assets/images/yellow-crystal.jpg"
	},
		"bluecrystal":{
			points:Math.floor(Math.random() * 11) + 1, 
			image: "assets/images/blue-crystal.jpg"
	}

			};
	}

//Function to create a random number for the computer score
	function randomNumberGen () {
		return Math.floor(Math.random() * 120) + 19;
	}

	function matchGame () {
		matchingNumber = 0;
//Call random numbers values to crystal images
		crystals = randomNumCrystals();
		randomNum = randomNumberGen();
		var usernumber = $("<div id="usernumber">").text(randomNum);
		$(".userInput").html(usernumberDiv);
	}

//Loop to update screen, user number calculated
	function updateScreen (didWin){
		$("#userNum").empty();0
		if (didWin === true){
		$(".userInput").append($("<p>").text("You Won!"));rendermatchingNumber()
		else if (didWin === false){
		$(".userInput").append($("<p>").text("You Lost!"));rendermatchingNumber()	
//Number of wins and losses, need variables, and if win++, use <p> or span. Use ++
		}
	}
//Render function for crystals
//Function to update matching number
//Function to render the match

// //On click setup

// //Conditionals will be in functions for crystalNumbers and gameNumber

// //Populate number of wins


// //Populate number of losses

// //else if (userScore >= computerScore){
// //	losses++;
// //}


// //Reset function
// //	function reset(){
// //		usernumber = 0
// //	}



// // var redScore = createnumber();
// // console.log(redScore);

// // var blueScore = createnumber();
// // console.log(blueScore);

// // var yellowScore = createnumber();
// // console.log(yellowScore);

// // var greenScore = createnumber();
// // console.log(greenScore);

// //Function to create a random number for each crystal
// 	function createnumber () {
// 		return Math.floor(Math.random() * 11) + 1;
// 	}



// //Code place games random number in div
// $("#gameNumber").text(computerScore);

// //$("#usernumber").text(userScore);

// //When crystal is click add number to usernumber div
// //Tag object to setup on.click function
// $("randomNumCrystals").on("click", function() {
// 		if (userScore == redScore; wins++
// 		else losses ++	
// 		$("#usernumber").text(userScore);
// 	});	


// // $("#red").on("click", function() {
// // 		(userScore += redScore).toString();	
// // 	});	

// // });








