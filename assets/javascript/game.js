
//letters for computer's choice
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

    
//array of variables to match h tags
    var wins = 0;
    var losses = 0;
    var left = 9;
    var userguesses = "";

//computer makes one random letter choice 
//when userguesses computer choice: computer picks new letter, wins++
//when userguesses a letter: display in list next to userguesses
    
    //picks random letter
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    document.onkeyup = function(event) {
        var userGuess = event.key;
        console.log(computerGuess);
        if(userGuess === computerGuess){
            wins++;
            left = 9;
            userguesses = "";
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        } else if (userGuess !== computerGuess){
            left--;
            userguesses = userguesses + " " + userGuess;
        }
        
        if(left === 0){
            losses++;
            left = 9;
            userguesses = "";
        }

        

        var winsText = document.getElementById("wins");
        winsText.textContent = wins;

        var lossesText = document.getElementById("losses");
        lossesText.textContent = losses;

        var leftText = document.getElementById("left");
        leftText.textContent = left;

        var userguessesText = document.getElementById("userguesses");
        userguessesText.textContent = userguesses;

    };





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



