var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 5;
var lettersGuessed = [];
var computerGuess = [];


document.onkeyup = function (event) {
	var userGuess = event.key;
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	
	if (userGuess === computerGuess) {
		wins++;
		guessedLetters = [];
	}
}