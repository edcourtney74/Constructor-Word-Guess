// Store inquirer npm in a variable
var inquirer = require("inquirer");

// Access info from word.js
var word = require("./word")

// Array of possible puzzles
var puzzleList = ["cardinals", "tigers"];

// Current puzzle variable, will be set in randomPuzzle function
var currentPuzzle;

// Function to pick random puzzle
function randomPuzzle() {
    // Selects a random number, looks through the puzzleList array and assigns the corresponding puzzle to a variable
    var currentPuzzle = puzzleList[Math.floor(Math.random() * 2)];
    console.log("Puzzle selected: " + currentPuzzle);
}

//   * Prompts the user for each guess and keeps track of the user's remaining guesses




// MAIN PROCESS========================================================================
randomPuzzle();



