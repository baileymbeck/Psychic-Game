
//letters for computer's choice
var computerChoices = ["a"]; 
//, "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
// "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    
//array of variables to match h tags
    var wins = 0;
    var losses = 0;
    var left = 0;
    var guesses = 9;

//computer random choice + user choice code
    document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if(userGuess === computerGuess)
    console.log(userGuess + computerGuess)
 }




 // I need to allow 9 choices per round
 // I need to capture guesses made and display on screen
 // I need to display wins, losses, guesses left



