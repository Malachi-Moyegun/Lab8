
// Variables to keep track of the score
let wins = 0;
let losses = 0;
let ties = 0;

// Get the buttons from the HTML
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resetButton = document.getElementById("reset");

// Add event listeners to each button
rockButton.addEventListener("click", function() {
    playGame("rock");
});

paperButton.addEventListener("click", function() {
    playGame("paper");
});

scissorsButton.addEventListener("click", function() {
    playGame("scissors");
});

// Function to play the game
function playGame(playerChoice) {

    // Generate a random computer choice
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];

    let result = "";

    // Check if the game is a tie
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
        ties++;
    }

    // Check if the player wins
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        wins++;
    }

    // Otherwise, the computer wins
    else {
        result = "You lose!";
        losses++;
    }

    // Display the result on the page
    document.getElementById("result").textContent =
        "You chose " + playerChoice +
        ". Computer chose " + computerChoice +
        ". " + result;

    // Update the scoreboard
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("ties").textContent = ties;
}

// Reset the scoreboard
resetButton.addEventListener("click", function() {
    wins = 0;
    losses = 0;
    ties = 0;

    document.getElementById("wins").textContent = 0;
    document.getElementById("losses").textContent = 0;
    document.getElementById("ties").textContent = 0;

    document.getElementById("result").textContent =
        "Make your choice to start!";
});
