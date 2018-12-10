# Constructor-Word-Guess
A command-line word guess game using object constructors.
**Theme: U.S. Presidents**

## How to Play
  * Type "node index" to begin the game.
  * Guess a letter that you think is in the puzzle.
  * If the letter is in the puzzle, it will now be revealed in the puzzle.
  * If the letter is not in the puzzle, you lose one of your guesses.
  * Try to guess the puzzle before you guess seven letters incorrectly. 

## Features
  * A word is randomly chosen from a predetermined list.
  * The word is then passed into a Word constructor, which also uses a Letter constructor to set up the gameplay.
  * When a user guesses an incorrect letter, the remaining guesses decrease by one, and the letter is logged in a letters guessed array that is displayed to the user.
  * When a user guesses a correct letter, the letter is revealed in the puzzle.
  * When a user runs out of guesses, a message is displayed that says the game is over and asks the user if a new game should be started.
  * When a user correctly reveals the whole puzzle, a message is displayed that congratulates the user and asks if a new game should be started.
  * If the user enters something other than a letter, the user is asked to enter in a letter.
  * If the user enters in a letter that's already been guessed, the user is asked to enter in a different letter.
  * If the user chooses to play a new game, the previous puzzle will be removed from the puzzle list so that the user will play a new puzzle.
  * The user is alerted when all puzzles have been played.
  * Uses the inquirer npm to allow the user to choose a letter.
  * Uses the chalk npm to improve the terminal display.
  * The index.js file uses the Word constructor from word.js, which uses the Letter constructor from letter.js.
  ***
### User-win gameplay
![User-win photo](https://github.com/edcourtney74/Constructor-Word-Guess/blob/master/images/win.gif "User wins")
### User-loss gameplay
![User-loss photo](https://github.com/edcourtney74/Constructor-Word-Guess/blob/master/images/loss.gif "User loses")
### Error handling for user
![Errors photo](https://github.com/edcourtney74/Constructor-Word-Guess/blob/master/images/error_handling.gif "Errors")
### Puzzles all played
![All-played photo](https://github.com/edcourtney74/Constructor-Word-Guess/blob/master/images/all_played.gif "All played")


