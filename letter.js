// Constructor for puzzle letters
var Letter = function(puzzleLetter) {
    this.puzzleLetter = puzzleLetter;
    this.correctGuess;
    console.log("Puzzle letter: " + this.puzzleLetter);

    // Function checks whether the user's guess is the same as the correct letter
    this.checkGuess = function(userGuess) {
        if (userGuess === this.puzzleLetter) {
            // If userGuess matches puzzleLetter, set correctGuess value to true
            this.correctGuess = true;
            console.log("Correct guess?: " + this.correctGuess)
        } else {
            // If the letters don't match, set correctGuess to false;
            this.correctGuess = false;
            console.log("Correct guess?: " + this.correctGuess)
        }
    }

    // Function to display letter or underscore
    this.displayLetter = function() {
        // If the user guess was found correct in the checkGuess function, return the correct letter
        if (this.correctGuess) {
            return this.puzzleLetter;
            // console.log(this.puzzleLetter);
        
            // If the user guess was incorrect, return an underscore
        } else {
            return "_";
        }
    }
}

// Export Letter
module.exports = Letter;