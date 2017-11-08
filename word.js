Word = require("./word.js");

var wordBank = ['apple', 'papaya', 'tangerine', 'cantaloupe', 'lychee'];
var lettersOfWord = [];
var objArray = [];
var outputArray = [];
var output

// Pick a random fruit from wordBank
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// Change it to the letters
lettersOfWord = chosenWord.split('');


function wordGame() {
    for (i = 0; i < lettersOfWord.length; i++) {
          objArray.push({
            value: lettersOfWord[i],
            placeholder: "_",
            guessed: false
        });
    }

    letterOutput();

}

// Test:
// console.log(chosenWord);
// console.log(lettersOfWord);

function letterOutput() {
    for (i = 0; i < objArray.length; i++) {
        if (objArray[i].guessed == false) {
            outputArray.push(objArray[i].placeholder);
        } else {
            outputArray.push(objArray[i].value);
        }
    }

    output = outputArray.join(' ');
    console.log("\n" + output + "\n");
}

wordGame()
