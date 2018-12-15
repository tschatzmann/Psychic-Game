// Creating variables to hold the number of wins, losses, and ties. They start at 0.
// BUild variables
var wins = 0;
var losses = 0;
var guessesRemaining = 6;
var underScoreCount = 0;
console.log('at set var underScoreCount ' + underScoreCount);
var usedLetters = "";
var LetterCount = 0;
var alphbetArray = []
var computerChoice = "";


// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userGuessText = document.getElementById("userGuess-text");
var computerChoiceText = document.getElementById("computerChoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var usedLettersText = document.getElementById("usedLetters-text");

//create an alphbet array
for (i = 0; i < 26; i++) {
    alphbetArray.push((i + 10).toString(36));

}
console.log(alphbetArray)


initvar();

console.log(computerChoice);
computerChoiceText.textContent = "The computer chose: " + computerChoice;

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    //userGuess = userGuess.toLocaleLowerCase;
    console.log("userGuess " + userGuess);
    console.log('beginning at userGuess ' + 'guessesRemaining ' + guessesRemaining);


    // Hide the directions
    directionsText.textContent = "";

    if (IsUsedLetter(userGuess) >= 0) {
        alert('You have already used letter ' + userGuess);
    }
    else {
        if (guessesRemaining > 0) {
            console.log(userGuess + ' in guessesRemaining loop')
            console.log('beginning if statement ' + 'guessesRemaining ' + guessesRemaining)
            if (userGuess == computerChoice) {
                IsWin(guessesRemaining)
            } else {
                WrongGuess(guessesRemaining);
            }
            usedLetters = usedLetters + " , " + userGuess;
            console.log("usedLetters " + usedLetters);
        } else {
            IsLoss(guessesRemaining);
        }
    }
    // Display the user and computer guesses, and wins/losses/ties.
    userGuessText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerChoice;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    usedLettersText.textContent = "Letters Used " + usedLetters;
}



function initvar() {
    rando = Math.floor(Math.random() * 26 - 1);
    console.log(rando);
    computerChoice = alphbetArray[rando];
    guessesRemaining = 6;
    usedLetters = "";
    userGuess = "";
    userGuessText.textContent = "You chose: " + userGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    computerChoiceText.textContent = "The computer chose: " + computerChoice;
    usedLettersText.textContent = "Letters Used " + usedLetters;
    
    console.log("in initvar function")
}

function IsFound() {
    position = computerChoice.indexOf(userGuess);
    console.log('position of letter ' + position);
    return (position);
}

function IsUsedLetter(userGuess) {
    console.log(usedLetters);
    return usedLetters.indexOf(userGuess);

}

function IsLoss() {
    alert(" you lose");
    losses++;
    console.log(losses);
    console.log("in loss function " + underScoreCount);
    initvar();
}

function WrongGuess() {
    guessesRemaining--;
}



function IsWin() {
    console.log('in function is win ' + underScoreCount);
    wins++;
    console.log('wins ' + wins);
    initvar();
}

