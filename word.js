letter = require("./letter.js");

var wordBank = ['apple', 'papaya', 'tangerine', 'cantaloupe', 'lychee'];
var lettersOfWord = [];
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

function Word() {
    for (i = 0; i < chosenWord.length; i++) {
        let letters = new letter(chosenWord[i], i);
        lettersOfWord.push(letters);
    }
}

function wordRender() {
    let blankspace = "";
    for (j = 0; j < lettersOfWord.length; j++) {
        blankspace += lettersOfWord[j].letterRender();
    }
    console.log(blankspace);
}

module.exports = Word;

console.log(chosenWord);