inquirer = require("inquirer");
Word = require("./word.js");

var numGuesses= 10;
var letterGuessed = "";

function startGame() { 
    resetGuesses ();
    console.log("Let's play Hangman!");

}

function resetGuesses() {
    numGuesses = 10;
}

function guessLetter() {
    if(numGuesses > 0){
        inquirer.prompt([
            {
                type: "input",
                name: "userGuess",
                message: "Guess the name of a fruit: ",
            }
        ]).then(function(answer){
        correctLetters = lettersOfWord;
        for (i = 0; i < correctLetters.length; i++){
            if(letterGuessed === correctLetters[i].letter){
                correctLetters[i].revealed = true;
            };
        }
        if (chosenWord.indexOf(letterGuessed) === -1){
            console.log("incorrect");
            numGuesses--
        }
        wordRender();
        console.log("\nGuesses remaining " + numGuesses);
        guessLetter();

        })
    } else {
        console.log("You lost!");
    }
}

startGame();
guessLetter();