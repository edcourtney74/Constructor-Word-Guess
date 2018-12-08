// Import info from letter.js
var Letter = require("./letter");

var Word = function(letterArray) {
    // Array that holds all letter objects created for the word to guess
    this.allLetters = []
    
    // Function to show string in console, with either letters or blanks 
    this.displayPuzzle = function(letterArray) {
        // Create for loop to go through each letter in letterArray
        for (i = 0; i < letterArray.length; i++) {

            // Create newLetter object from Letter constructor
            var newLetter = new Letter(letterArray[i]);
            
            // Push new letter object into allLetters array
            this.allLetters.push(newLetter);
            
            // Run toString function on each letter object, display letter or dash on terminal
            this.allLetters[i].toString();            
        }

        // When all letters are constructed, print puzzle to the console, 
        // using .join to eliminate commas and add a space between letters/blanks
        console.log("Puzzle so far: " + this.allLetters.join(" "));        
    }    

    // Function to check if the user's guess matches any of the letters in the array
    this.startCheckGuess = function(userGuess) {
        // For loop to go over each letter object in the this.allLetters array
        for (i = 0; i < this.allLetters.length; i++) {
            // console.log("Checking if I can grab allLetters character value: " + this.allLetters[i].puzzleLetter);

            this.allLetters[i].checkGuess(userGuess);
            // console.log("Letter correctly guessed?: " + this.allLetters[i].correctlyGuessed);
        }        
    }
}

module.exports = Word;