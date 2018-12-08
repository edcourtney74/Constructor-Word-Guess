// GLOBAL VARIABLES===========================================================
// Store inquirer npm in a variable
var inquirer = require("inquirer");

// Access info from word.js
var Word = require("./word")

// Array of possible words
var wordList = ["cardinals", "tigers"];

// Current puzzle variable, will be set in selectWord function
var randomWord;

// GLOBAL FUNCTIONS========================================================
// Function to pick random word
function createPuzzle() {
    // Selects a random number, looks through the wordList array and assigns the corresponding word to a variable
    randomWord = wordList[Math.floor(Math.random() * 2)];
    console.log("Puzzle selected: " + randomWord);

    // Converts word selected into array of individual letters
    var letterArray = randomWord.split("");
    console.log("Array before anything is done to it:" + letterArray);

    // Uses Word constructor to create letter objects
    var wordToGuess = new Word(letterArray);
    
    // Run displayLetter function to initially show the puzzle
    wordToGuess.displayPuzzle(letterArray);
}

// Function to ask for user to guess a letter, then check that letter with the puzzle and display the puzzle again


// MAIN PROCESS========================================================================
// Run createPuzzle function to set the puzzle for the game
createPuzzle();





// Use Word constructor to set up word guess for new variable

// Display puzzle in terminal
// wordToGuess.startCheckGuess("r");
// TEST - console logging letters array to make sure they are objects

