//Array from which number will be randomly chosen
var numberBank=["24", "37", "28", "35", "39", "14", "25", "33", "30", "17", "15"];

var crystalValue=[
	"12", "8", "2", "9", "16", "20", "10", "4",
	"14", "5", "7", "17", "18", "3", "26", "1"];

//--------------------This Works---------------------
//Variable to store the games random number
var computerScore = createnumber(numberBank);
console.log(computerScore);

//Variable to store red crystals random number
var redScore = createnumber (crystalValue);
console.log(redScore);

var blueScore = createnumber (crystalValue);
console.log(blueScore);

var yellowScore = createnumber (crystalValue);
console.log(yellowScore);

var greenScore = createnumber (crystalValue);
console.log(greenScore);

//Function to select random number from array
	function createnumber (myArray) {
		return myArray[Math.floor(Math.random() * myArray.length)];
	}

//Function to place games random number in div
document.getElementById("gameNumber").innerHTML = computerScore;

//Function to turn red crystal into a button
//$(document).ready(function(){
	$("#red,#green,#blue,#yellow").on("click", function() {


//Console.log to check if clicking on image works
//console.log("yay");
	});
//});

//Function to assign random number from array to each image

//Populate number of losses
//Populate number of wins
