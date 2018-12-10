// GLOBAL VARIABLES===========================================================
// Store inquirer, chalk npm in a variable
var inquirer = require("inquirer");

// Access info from word.js
var Word = require("./word")

// Array of possible words
var wordList = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison", "John Tyler", "James Polk", "Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan", "Abraham Lincoln", "Andrew Johnson", "Ulysses Grant", "Rutherford Hayes", "James Garfield", "Chester Arthur", "Grover Cleveland", "Benjamin Harrison", "Grover Cleveland", "William McKinley", "Theodore Roosevelt", "William Taft", "Woodrow Wilson", "Warren Harding", "Calvin Coolidge", "Herbert Hoover", "Franklin Roosevelt", "Harry Truman", "Dwight Eisenhower", "John Kennedy", "Lyndon Johnson", "Richard Nixon", "Gerald Ford", "Jimmy Carter", "Ronald Reagan", "George H. W. Bush", "Bill Clinton", "George W. Bush", "Barack Obama", "Donald Trump"];

// Current puzzle variable, will be set in selectWord function
var wordToGuess;

// User guess variable, set when the user picks a letter
var userGuess;

// Variable that holds array of letters that make up the puzzle's word
var letterArray;

// Variable to hold number of remaining guesses
var guessesRemaining = 7;

// Variable to hold correct guesses, which will indicate when puzzle is solved
var guessesCorrect = 0;

// Variable to hold words removed after played
var removedWords = [];

// Variable to hold randomWord selected
var randomWord;

// Variable to hold array of letters already guessed
var guessedLetters = [];

// GLOBAL FUNCTIONS========================================================
// Function to pick random word
function createPuzzle() {
    // Selects a random number, looks through the wordList array and assigns the corresponding word to a variable
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];

    // Converts word selected into array of individual letters
    letterArray = randomWord.split("");

    // Uses Word constructor to create word object
    wordToGuess = new Word(letterArray);

    // Run createLetterObjects to add letter objects to array
    wordToGuess.createLetterObjects(letterArray);

    // Check to see any of the new letter objects in the allLetters array were not true letters (for example, a space, period, etc.0)
    for (let i = 0; i < wordToGuess.allLetters.length; i++) {
        if (!/^[a-zA-Z]/.test(wordToGuess.allLetters[i].puzzleLetter)) {
        // If it's not a letter, add to the guessesCorrect variable that tracks when the puzzle has been solved
        guessesCorrect ++;
        }
    }

    // Run displayLetter function to initially show the puzzle and guesses remaining
    wordToGuess.displayPuzzle(letterArray);
    console.log("\nGuesses remaining: " + guessesRemaining + "\n");

    // Start game
    getUserGuess();
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
    ]).then(function (answer) {

        // Make letter lowercase, store into a variable
        userGuess = answer.userInput.toLowerCase();

        // Validate that user entered a letter
        if (!/^[a-z]/.test(userGuess)) {
            // If a letter wasn't entered, display a message to user
            console.log("Please only select a letter\n");

            // Ask again for user input
            getUserGuess();
            
            // Validate that user hasn't picked letter yet
        } else if (guessedLetters.includes(userGuess)) {
            // If the letter was already picked, display a message to user
            console.log("You already picked that letter. Please choose a different one.\n");

            // Ask again for user input
            getUserGuess();                       
            
        } else {

            // Store userGuess into an array so user can't pick it again
            guessedLetters.push(userGuess);
            
            // Check userGuess with letters in wordToGuess
            wordToGuess.startCheckGuess(userGuess);

            // After checking for matches with userGuess, display wordToGuess, updated with any matching letters;
            wordToGuess.displayPuzzle(letterArray);
            
            // Check user guess against local array of letters, including uppercase for any uppercase in puzzle
            if ((letterArray.indexOf(userGuess) < 0) && (letterArray.indexOf(userGuess.toUpperCase()) < 0)) {
                // If the letter is not in the array, decrease the remaining guesses
                guessesRemaining--;

                // If guessesRemaining = 0...
                if (guessesRemaining === 0) {
                    // Display message to the user
                    console.log("I'm sorry. You're out of guesses.\n")

                    // Display complete puzzle
                    console.log("The answer: " + letterArray.join("") + "\n");

                    // Ask user whether to play again
                    newGame();

                    // If guesses are remaining...
                } else {

                    // Alert user in terminal how many guesses they have left
                    console.log("Sorry. That letter was incorrect. \n\nGuesses remaining: " + guessesRemaining + ";  Letters already chosen: " + guessedLetters.join(" ") + "\n");

                    // Ask user for another letter
                    getUserGuess();
                }

            } else {
                // If the letter is in the array, see how many times it is in there and add to guessesCorrect variable for each instance, accounting for any uppercase letters as well
                for (i = 0; i < letterArray.length; i++) {
                    if ((userGuess === letterArray[i]) || (userGuess.toUpperCase() === letterArray[i])) {
                        guessesCorrect++;
                    }
                }

                // Check to see if guessesCorrect equals letterArray.length
                if (guessesCorrect === letterArray.length) {
                    // Congratulate the user
                    console.log("Congratulations!! You solved the puzzled.\n")

                    // Ask user whether to play again
                    newGame();
                }

                else {
                    // If not, display remaining guesses
                    console.log("\nGuesses remaining: " + guessesRemaining + ";  Letters already chosen: " + guessedLetters.join(" ") + "\n");

                    // Ask the user for another guess
                    getUserGuess();
                }
            }
        }
    });
};

// Function to start a new game
function newGame() {
    // Use inquirer to ask the user for a letter
    inquirer.prompt([
        {
            type: "confirm",
            name: "newgame",
            message: "Do you want to play again?"
        }
        // After user input received... 
    ]).then(function (answer) {
        if (answer.newgame === true) {
            // Remove last word from word list so it doesn't come up again
            removedWords = wordList.indexOf(randomWord);
            if (removedWords > -1) {
                wordList.splice(removedWords, 1);
            }

            // Check to make sure there are puzzles left to play
            if (wordList.length > 0) {

                // Reset variables
                guessesRemaining = 7;
                guessesCorrect = 0;
                guessedLetters = [];

                // Start game
                createPuzzle();

                // If no puzzles are left to play, let the user know
            } else {
                console.log("Sorry. There are no new puzzles available.\n");
            }

        } else {
            // Display goodbye message in terminal
            console.log("Thanks for playing. If you change your mind, just type 'node index'.\n");
        }
    })
}

// START FIRST GAME===================================================================
// Run createPuzzle function to set the puzzle for the game and start gameplay
createPuzzle();