inquirer = require("inquirer");
Word = require("./word.js");
letter = require("./letter.js");

let numGuesses, correctLetters, chosenWord, wordSpace, wordRender;

function startGame() { 
    numGuesses = 10;
    wordRender();
    letterRender();
    guessLetter();
    console.log("Let's play Hangman!");

}

function guessLetter() {
    if(numGuesses > 0){
        inquirer.prompt([
            {
                type: "input",
                message: "Guess the name of a fruit:",
                name: "guess",
                validate: function(value){
                    let regExp = /^[a-z\-']/i;
                    if(regExp.test(value) === true && value.length === 1){
                        return true;
                    }
                    return false;
                }
            }
        ]).then(function(answer){
        let letterGuessed = answer.guess;
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