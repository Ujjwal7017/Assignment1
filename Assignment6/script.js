var luckNumber = Math.floor(Math.random() * 100) + 1;
var remainingGuesses = 10;
var guess;

function checkGuess() {
    guess = document.getElementById("guess").value;
    if (guess == luckNumber) {
        document.getElementById("message").innerHTML = "Congratulations! You guessed the lucky number.";
    } else if (guess > luckNumber) {
        document.getElementById("message").innerHTML = "Guessed Number is Too high. Try again.";
        remainingGuesses--;
    } else {
        document.getElementById("message").innerHTML = "Guessed Number is Too low. Try again.";
        remainingGuesses--;
    }
    document.getElementById("remaining").innerHTML = "You have " + remainingGuesses + " remaining.";
    if (remainingGuesses == 0) {
        document.getElementById("message").innerHTML = "Sorry, you ran out of guesses. The luck number was " + luckNumber + ".";
    }
}
