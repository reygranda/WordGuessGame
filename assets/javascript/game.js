var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 5;
var lettersGuessed = [];
var computerGuess = [];

var winsText = document.getElementById("1");
var lossesText = document.getElementById("2");
var guessesLeft = document.getElementById("3");
var guessesText = document.getElementById("4");



document.onkeyup = function (event) {
	var userGuess = event.key;
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	if (userGuess === computerGuess) {
		wins++;
		lettersGuessed = [];
		guesses = 10;
	}

else {
	guesses--;
	lettersGuessed.push(userGuess);
}

if (guesses === 0) {
	losses++;
	lettersGuessed = [];
}
if (guesses === 0) {
	guesses = 10;
}
}
winsText.textContent = wins;
losesText.textContent = losses;
guessesLeft.textContent = guesses;
guessesText.textContent = lettersGuessed;
