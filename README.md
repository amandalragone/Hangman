# The Bookworm Word Guess Game

This is a Word Guess Game based on a book theme. It can be accessed at https://amandalragone.github.io/Word-Guess-Game/.

When the player opens the game, the computer will select a random book name.
Then, the player needs to start guessing which letters are part of that word picked by the computer.

If the player types in a letter that belongs to the title selected, a message will display saying that the letter is correct. The letter will also be added to the appropriate spot in the word.

If the letter selected is incorrect, the player will see a message saying that the letter is not part of the word. The letter will be entered on the "Letters already guessed" field, and the number displayed on the "Guesses Remaining" field will decrease by one.

If the player is able to guess the entire word before the number on "Guesses Remaining" reaches 0, he wins. In this case, the player will see a message saying that the number of wins is being increased by one. Otherwise, the player loses.

Once the player has won or lost, the game will be reset automatically and the computer will select a new word.