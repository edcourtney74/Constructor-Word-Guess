// GLOBAL VARIABLES===========================================================
// Store inquirer npm in a variable
var inquirer = require("inquirer");

// Access info from word.js
var Word = require("./word")

// Array of possible words
var wordList = ["cardinals", "tigers"];

// Current puzzle variable, will be set in selectWord function
var wordToGuess;

// User guess variable, set when the user picks a letter
var userGuess;

// Variable that holds array of letters that make up the puzzle's word
var letterArray;

// GLOBAL FUNCTIONS========================================================
// Function to pick random word
function createPuzzle() {
    // Selects a random number, looks through the wordList array and assigns the corresponding word to a variable
    var randomWord = wordList[Math.floor(Math.random() * 2)];
    console.log("Puzzle selected: " + randomWord);

    // Converts word selected into array of individual letters
    letterArray = randomWord.split("");

    // Uses Word constructor to create word object
    wordToGuess = new Word(letterArray);
    
    // Run createLetterObjects to add letter objects to array
    wordToGuess.createLetterObjects(letterArray);
    console.log("wordToGuess properties: " + wordToGuess.allLetters);
    
    // Run displayLetter function to initially show the puzzle
    // wordToGuess.displayPuzzle(letterArray);
}

// Function to ask for user to guess a letter, then check that letter with the puzzle and display the puzzle again
function getUserGuess() {
    // Use inquirer to ask the user for a letter
    inquirer.prompt([
        {
            type: "input",
            name: "userInput",
            message: "Please choose a letter"
        }
    // After user input received... 
    ]).then(function(answer) {
        // Store letter into a variable
        userGuess = answer.userInput;
        
        // Check userGuess with letters in wordToGuess
        wordToGuess.startCheckGuess(userGuess);

        // After checking for matches with userGuess, display wordToGuess, updated with any matching letters;
        wordToGuess.displayPuzzle(letterArray);

        getUserGuess();

    });     
};


// MAIN PROCESS========================================================================
// Run createPuzzle function to set the puzzle for the game
createPuzzle();
getUserGuess();





// Use Word constructor to set up word guess for new variable

// Display puzzle in terminal
// wordToGuess.startCheckGuess("r");
// TEST - console logging letters array to make sure they are objects

