// Creating variables to hold the number of wins, losses, and ties. They start at 0.
// BUild variables
let wins = 0;
let losses = 0;
let guessesRemaining = 6;
let underScoreCount = 0;
let usedLetters = "";
let LetterCount = 0;
let alphbetArray = []
let computerChoice = "";


// Create constiables that hold references to the places in the HTML where we want to display things.
let directionsText = document.getElementById("directions-text");
let userGuessText = document.getElementById("userGuess-text");
let computerChoiceText = document.getElementById("computerChoice-text");
let winsText = document.getElementById("wins-text");
let lossesText = document.getElementById("losses-text");
let usedLettersText = document.getElementById("usedLetters-text");
let guessesRemainingtext = document.getElementById("guessesRemaining-text");

//create an alphbet array
for (i = 0; i < 26; i++) {
    alphbetArray.push((i + 10).toString(36));

}

initvar();

// for testing computerChoiceText.textContent = "The computer chose: " + computerChoice;

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    //userGuess = userGuess.toLocaleLowerCase;
 
    // Hide the directions
    directionsText.textContent = "";

    if (IsUsedLetter(userGuess) >= 0) {
        alert('You have already used letter ' + userGuess);
    }
    else {
        if (guessesRemaining > 0) {
            if (userGuess == computerChoice) {
                IsWin(guessesRemaining)
            } else {
                WrongGuess(guessesRemaining);
            }
            usedLetters = usedLetters + " , " + userGuess;
        } else {
            IsLoss(guessesRemaining);
        }
    }
    // Display the user and computer guesses, and wins/losses/ties.
    userGuessText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerChoice;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    usedLettersText.textContent = "Letters Used: " + usedLetters;
    guessesRemainingtext.textContent = "Guesses Remaining: " + guessesRemaining
}



function initvar() {
    rando = Math.floor(Math.random() * 26 - 1);
    computerChoice = alphbetArray[rando];
    guessesRemaining = 6;
    usedLetters = "";
    userGuess = "";
    userGuessText.textContent = "You chose: " + userGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    computerChoiceText.textContent = "The computer chose: " + computerChoice;
    usedLettersText.textContent = "Letters Used: " + usedLetters;
    guessesRemainingtext.textContent = "Guesses Remaining: " + guessesRemaining;
    
}

function IsFound() {
    position = computerChoice.indexOf(userGuess);
    return (position);
}

function IsUsedLetter(userGuess) {
    return usedLetters.indexOf(userGuess);

}

function IsLoss() {
    losses++;
    initvar();
}

function WrongGuess() {
    guessesRemaining--;
}



function IsWin() {
    wins++;
    initvar();
}

