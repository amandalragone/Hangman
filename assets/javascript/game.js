//These are the base vars, that will define the theme, wins number, and the possible choices the user can make.
var theme = ["the killers", "mumford and sons", "good charlotte", "coldplay", "audioslave", "linkin park", "simple plan", "eminem", "britney spears", "avril lavigne", "nickelback", "evanescence", "new found glory", "yellowcard", "interpol", "weezer", "the all-american rejects", "jonas brothers", "jimmy eat world", "nsync", "backstreet boys", "spice girls"];
var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;

//Now, we're starting the game in the backend, by letting the computer pick a random word from the "theme" array, setting up how many guessesRemaining the user will have for that word, resetting the number of wins and making it show up on the correct place, and creating a new var, "lettersGuessed".
var computerChoice = theme[Math.floor(Math.random() * theme.length)];
console.log(computerChoice)
var guessesRemaining = computerChoice.length;
var guessesRemainingText = document.getElementById("guessesRemaining");
guessesRemainingText.textContent = guessesRemaining;
var winsText = document.getElementById("wins");
winsText.textContent = wins;
var lettersGuessed = [];

//After the computer makes its choice, we need some empty spaces to show up on the "Current Word" field. The number of empty spaces need to correspond to the number of letters in the word.
// ex: coldplay = 8 chars - if coldplay is the computerChoice. 8 is computerChoice.length

var computerChoiceText = document.getElementById("computerChoice");
var emptyWord = [];
    for (var i = 0 ; i < computerChoice.length ; i++) {
        emptyWord.push("_ ");
    };
computerChoiceText.textContent = emptyWord.join("");
var remainingLetters = computerChoice.length;


//Now, it's time for the user to start playing: we're creating an event to allow the user to pick a letter. If the letter is included in the "userChoices" array, then the letter will be written on the appropriate field in the document.

    document.onkeyup = function(event) {
        var lettersGuessedbyUser = event.key.toLowerCase();

        if ((userChoices.includes(lettersGuessedbyUser)) && (computerChoice.includes(lettersGuessedbyUser))) {
            lettersGuessed.push(lettersGuessedbyUser);
            var lettersGuessedText = document.getElementById("lettersGuessed");
            lettersGuessedText.textContent = lettersGuessed;
            computerChoiceText.textContent = lettersGuessedbyUser;
            

            for (var j = 0; j < computerChoice.length ; j++) { 
                if (computerChoice[j] === lettersGuessedbyUser) {
                    emptyWord[j] = lettersGuessedbyUser;
                    --remainingLetters;
                };
            };
            computerChoiceText.textContent = emptyWord.join("");
                
            
        } else if ((userChoices.includes(lettersGuessedbyUser)) && (computerChoice.indexOf(lettersGuessedbyUser) === -1)) {
            guessesRemainingText.textContent = --guessesRemaining;
            lettersGuessed.push(lettersGuessedbyUser);
            var lettersGuessedText = document.getElementById("lettersGuessed");
            lettersGuessedText.textContent = lettersGuessed;
            console.log("This letter is not correct. Try again");
        } else {
            console.log("Try again");
        };
    };
