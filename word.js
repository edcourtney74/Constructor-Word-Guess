// Store chalk npm in a variable
var chalk = require("chalk");

// Import info from letter.js
var Letter = require("./letter");

var Word = function(letterArray) {
    // Array that holds all letter objects created for the word to guess
    this.allLetters = []
    
    // Function to create new letter objects and push them into allLetters array
    this.createLetterObjects = function() {
        // Create for loop to go through each letter in letterArray
        for (i = 0; i < letterArray.length; i++) {
            
            // Create newLetter object from Letter constructor
            var newLetter = new Letter(letterArray[i]);
               
            // Push new letter object into allLetters array
            this.allLetters.push(newLetter);          
        }
    }
    
    // Function to show string in console, with either letters or blanks 
    this.displayPuzzle = function() {
        // Create for loop to go through each letter object in allLetters
        for (i = 0; i < this.allLetters.length; i++) {
                                 
            // Run toString function on each letter object, display letter or dash on terminal
            this.allLetters[i].toString();            
        }

        // When all letters are constructed, print puzzle to the console, 
        // using .join to eliminate commas and add a space between letters/blanks
        console.log(chalk.bold("\n" + this.allLetters.join(" ")) + "\n");        
    }    

    // Function to check if the user's guess matches any of the letters in the array
    this.startCheckGuess = function(userGuess) {
        // For loop to go over each letter object in the this.allLetters array
        for (i = 0; i < this.allLetters.length; i++) {
            this.allLetters[i].checkGuess(userGuess);
        }        
    }
}

module.exports = Word;