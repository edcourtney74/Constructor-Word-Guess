// Constructor for puzzle letters
var Letter = function(puzzleLetter) {
    // Variable that stores correct value of letter
    this.puzzleLetter = puzzleLetter;
    // Variable that stores whether this letter has been guessed yet;
    // Start with false value
    this.correctlyGuessed = false;

    // Function to display letter or underscore - using toString so that Javascript will
    // call the function automatically when casting the object to a string
    this.toString = function() {
        // If this letter has already been correctly guessed, show the letter
        if (this.correctlyGuessed) {
            return this.puzzleLetter;
        
        // If this letter has not been guessed yet, return an underscore
        } else {
            return "_";
        }
    }
    
    // Function to check whether the user's guess is the same as the correct letter
    this.checkGuess = function(userGuess) {
        if (userGuess === this.puzzleLetter) {
            // If userGuess matches puzzleLetter, set correctlyGuessed value to true
            this.correctlyGuessed = true;            
        }
    }
}

// Export Letter
module.exports = Letter;

// TEST 
// var testLetter = new Letter("w");
// userGuess = "x"
// testLetter.checkGuess(userGuess)
// console.log("Is test correct?" + testLetter.correctlyGuessed);