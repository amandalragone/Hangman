//These are the base vars, that will define the theme, wins number, and the possible choices the user can make. Some of them are only declared in the Global scope. They get an assignment within the functions
var wins = 0;
var theme = ["the killers", "mumford and sons", "good charlotte", "coldplay", "audioslave", "linkin park", "simple plan", "eminem", "britney spears", "avril lavigne", "nickelback", "evanescence", "new found glory", "yellowcard", "interpol", "weezer", "the all-american rejects", "jonas brothers", "jimmy eat world", "nsync", "backstreet boys", "spice girls"];
var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerChoice
var lettersGuessed
var lettersGuessedbyUser
var guessesRemaining
var remainingLetters
var emptyWord

var guessesRemainingText = document.getElementById("guessesRemaining");
var winsText = document.getElementById("wins");
var computerChoiceText = document.getElementById("computerChoice");
var lettersGuessedText = document.getElementById("lettersGuessed");
var pressKeyText = document.getElementById("press_key");



//Now, we're starting the game in the backend, by letting the computer pick a random word from the "theme" array, setting up how many guessesRemaining the user will have for that word, resetting the number of wins and making it show up on the correct place, and creating an empty array for "lettersGuessed".

var newGame = function () {

computerChoice = theme[Math.floor(Math.random() * theme.length)];
console.log(computerChoice)

guessesRemaining = computerChoice.length;
guessesRemainingText.textContent = guessesRemaining;

winsText.textContent = wins;

lettersGuessed = [];

//After the computer makes its choice, we need some empty spaces to show up on the "Current Word" field. The number of empty spaces need to correspond to the number of letters in the word.
// ex: coldplay = 8 chars - if coldplay is the computerChoice. 8 is computerChoice.length

remainingLetters = computerChoice.length;
console.log(remainingLetters);

emptyWord = [];
    for (var i = 0 ; i < computerChoice.length ; i++) {
        if (computerChoice[i] === " ") {
            emptyWord[i] = " ";
            --remainingLetters;
        } else if (computerChoice[i] === "-") {
            emptyWord[i] = "-";
            --remainingLetters;
        } else {
            emptyWord.push("_ ");
        };
    };
    console.log(remainingLetters);
   
computerChoiceText.textContent = emptyWord.join("");

}




//Now, it's time for the user to start playing: we're creating an event to allow the user to pick a letter. If the letter is included in the "userChoices" array, then the letter will be written on the appropriate field in the document.
//if remainingLetters= 0 and guessesRemaining > 0, user wins
//if remainingLetters> 0 and guessesRemaining = 0, user loses

document.onkeyup = function(event) {
    lettersGuessedbyUser = event.key.toLowerCase();

        if ((userChoices.includes(lettersGuessedbyUser)) && (computerChoice.includes(lettersGuessedbyUser))) {
            lettersGuessed.push(lettersGuessedbyUser);
            lettersGuessedText.textContent = lettersGuessed;
            computerChoiceText.textContent = lettersGuessedbyUser;
            
            for (var j = 0; j < computerChoice.length ; j++) { 
                if (computerChoice[j] === lettersGuessedbyUser) {
                    emptyWord[j] = lettersGuessedbyUser;
                    --remainingLetters;
                    console.log(remainingLetters);
                };
            };
            computerChoiceText.textContent = emptyWord.join("");
                
            
        } else if ((userChoices.includes(lettersGuessedbyUser)) && (computerChoice.indexOf(lettersGuessedbyUser) === -1)) {
            guessesRemainingText.textContent = --guessesRemaining;
            lettersGuessed.push(lettersGuessedbyUser);
            lettersGuessedText = document.getElementById("lettersGuessed");
            lettersGuessedText.textContent = lettersGuessed;
            console.log("This letter is not correct. Try again");
            console.log(guessesRemaining);
        } else {
            console.log("Try again");
        };

        
        
        if ((remainingLetters === 0) && (guessesRemaining > 0)) {
            // console.log("Congratulations, the correct word was" + computerChoice + "! We're setting your wins to" + wins + 1 + "!");
            wins = wins + 1;
            winsText.textContent = wins;

            pressKeyText.textContent = "Congratulations, the correct word was " + computerChoice.toUpperCase() + "! We're setting your wins to " + wins + "! Now, let's pick another word and play again, shall we?"
            newGame();

         } else if ((remainingLetters > 0) && (guessesRemaining === 0)) {
            console.log("you lose");
        
            pressKeyText.textContent = "Oh oh... The correct word was " + computerChoice.toUpperCase() + "... But don't worry. Let's try again!";
            newGame();
        };

};

newGame();