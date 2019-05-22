var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 5;
var lettersGuessed = [];
var computerGuess = [];

var winsText = document.getElementById("");
var lossesText = document.getElementById("");
var guessesLeft = document.getElementById("");
var guessesText = document.getElementById("");



document.onkeyup = function (event) {
	var userGuess = event.key;
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	if (userGuess === computerGuess) {
		wins++;
		guessedLetters = [];
		guesses = 10;
	}

else {
	guesses--;
	guessedLetters.push(userGuess);
}

if (guesses === 0) {
	losses++;
	guessedLetters = [];
}
if (guesses === 0) {
	guesses = 10;
}
}
winsText.textContent = "Wins: " + wins;
losesText.textContent = "Losses: " + losses;
guessesLeft.textContent = "Guesses Left: " + guesses;
guessesText.textContent = "Your Guesses so far: " + guessedLetters;
