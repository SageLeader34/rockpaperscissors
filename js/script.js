// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

// DOCUMENT READY FUNCTION BELOW
 $("#shoot").click(function(){
  
var userChoice = $('#userChoice').val();
console.log(userChoice);

var computerChoice="";

var randomNumber= Math.floor(Math.random() * 3);

if(randomNumber === 0) {
 computerChoice = "rock"; 
}

else if (randomNumber === 1) {
 computerChoice = "paper";
}

else if (randomNumber === 2) {
 computerChoice = "scissors";
}

if(userChoice==="rock"){
 if (computerChoice === "rock") {
  $("#result").val("DRAW");
 }
 
 else if (computerChoice === "paper") {
  $("#result").val("COMPUTER WINS");
 }
 
 else if (computerChoice === "scissors") {
  $("#result").val("PLAYER WINS");
 }
 
}

if (userChoice=== "paper"){
 if (computerChoice ==="rock"){
$("#result").val("USER WINS");
 }
else if (computerChoice === "paper") {
 $("#result").val("DRAW");
}  
else if (computerChoice === "scissors"){
 $("#result").val("COMPUTER WINS");
 }
}

if (userChoice=== "scissors"){
 if (computerChoice ==="rock"){
$("#result").val("COMPUTER WINS");
 }
else if (computerChoice === "paper") {
 $("#result").val("USER WINS");
}  
else if (computerChoice === "scissors"){
 $("#result").val("DRAW");
}
 
}
     
 })
