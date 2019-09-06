
//letters for computer's choice
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

    
//array of variables to match h tags
    var wins = 0;
    var losses = 0;
    var left = 9;
    var userguesses = userguesses;

//computer makes one random letter choice 
//when userguesses computer choice: computer picks new letter, wins++
//when userguesses a letter: display in list next to userguesses
    
    //picks random letter
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    document.onkeyup = function(event) {
    var userGuess = event.key;
    if(userGuess === computerGuess){
        console.log(userGuess + computerGuess);
        wins++;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
     } else if (userGuess !== computerGuess){
        console.log(userGuess + computerGuess);
        losses++;
     } else if (userGuess !== computerGuess){
        console.log(userGuess + computerGuess);
        left--;
        console.log(userGuess + computerGuess);
        userGuess;
     }
    

    var winsText = document.getElementById("wins");
    winsText.textContent = wins;

    var lossesText = document.getElementById("losses");
    lossesText.textContent = losses;

    var leftText = document.getElementById("left");
    leftText.textContent = left--;

    var userguessesText = document.getElementById("userguesses");
    userguessesText.textContent = userGuess;

    };

    // Game over hidden tag

    function myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }



    // var userguessesText = document.getElementById("userguesses");
    // userguessesText.textContent = userguesses;



    //document.getElementById(userguesses).textContent(event.key);
    
    // for(i = 0; i < computerChoices.length; i++){

    // }

    // if(userGuess === computerGuess){
    // console.log(userGuess + computerGuess)
//  }




 // I need to allow 9 choices per round
 // I need to capture guesses made and display on screen
 // I need to display wins, losses, guesses left



