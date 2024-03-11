// JavaScript code in script.js
let secretNumber;
let attempts = 0;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
}

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    attempts++;

    if (userGuess == secretNumber) {
        displayResult(`Congratulations! You guessed the number in ${attempts} attempts.`);
        resetGame();
    } else if (userGuess < secretNumber) {
        displayResult('Too low! Try again.');
    } else {
        displayResult('Too high! Try again.');
    }
}

function displayResult(message) {
    document.getElementById('resultMessage').innerText = message;
}

function resetGame() {
    attempts = 0;
    startGame();
    displayResult('');
}
startGame(); // Initialize the game when the page loads