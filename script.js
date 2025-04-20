// Declare global variables
let secretNumber;
let score;
let guessCount;
let gameOver;
const maxAttempts = 10; // Maximum number of allowed guesses

// Initializes or resets the game state
function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
  score = 10; // Initial score
  guessCount = 0; // Reset guess count
  gameOver = false; // Reset game over flag

  // Update UI elements to initial state
  document.getElementById("score").textContent = score;
  document.getElementById("attempts").textContent = `${guessCount}/${maxAttempts}`;
  document.getElementById("feedback").textContent = '';
  document.getElementById("guess-input").value = '';
  document.getElementById("guess-input").disabled = false;
  document.getElementById("history-list").innerHTML = '';
  document.getElementById("input-error").textContent = '';
}

// Handles user's guess input and game logic
function checkGuess() {
  if (gameOver) return; // Do nothing if the game is over

  // Get UI elements
  const guessInput = document.getElementById("guess-input");
  const feedback = document.getElementById("feedback");
  const history = document.getElementById("history-list");
  const inputError = document.getElementById("input-error");
  const guess = Number(guessInput.value); // Convert input to a number

  // Validate input
  if (guess < 1 || guess > 100 || isNaN(guess)) {
    inputError.textContent = "❗ Please enter a number between 1 and 100!";
    return;
  } else {
    inputError.textContent = ''; // Clear error if input is valid
  }

  guessCount++; // Increment guess count
  document.getElementById("attempts").textContent = `${guessCount}/${maxAttempts}`;

  // Record guess in history
  const guessItem = document.createElement("li");
  guessItem.textContent = `Guess ${guessCount}: ${guess}`;
  history.appendChild(guessItem);

  // Check if the guess is correct
  if (guess === secretNumber) {
    feedback.textContent = "🎉 Correct!"; // Win message
    guessInput.disabled = true; // Disable input
    gameOver = true; // Set game over flag
  } else {
    score--; // Decrease score
    document.getElementById("score").textContent = score;

    // Give feedback based on guess
    feedback.textContent = guess < secretNumber ? "📈 Too low!" : "📉 Too high!";
    
    // Check if attempts are exhausted
    if (guessCount >= maxAttempts) {
      feedback.textContent = `💥 Game Over! The number was ${secretNumber}`; // Game over message
      guessInput.disabled = true; // Disable input
      gameOver = true; // Set game over flag
    }
  }
}

// Event listeners for guess and restart buttons
document.getElementById("guess-btn").addEventListener("click", checkGuess);
document.getElementById("restart-btn").addEventListener("click", startGame);

// Start the game when the page loads
startGame();
