// Wait for DOM content to load before executing code
document.addEventListener("DOMContentLoaded", () => {

    // Selects class choice elements to be used later
    const choices = document.querySelectorAll(".choice");
    // Get result div to display results later
    const resultDiv = document.getElementById("result");
    // Gets play again button
    const playAgainBtn = document.getElementById("play-again");

    const tipDiv = document.getElementById("tip");

    // Creates array of computer choices
    const choicesArray = ["rock", "paper", "scissors"];

    // Add event listener for when an element is clicked
    choices.forEach(choice => {
        choice.addEventListener("click", () => {
            // Call playgame with chosen element
            playGame(choice.id);
        });
    });

    // Add event listener for when button is clicked representing the choices
    document.addEventListener('keydown', (event) => {
        const keyMap = { 'r': 'rock', 'p': 'paper', 's': 'scissors' };

        if (keyMap[event.key]) {
            playGame(keyMap[event.key]);
        }
    });

    // playGame function for game logic
    function playGame(userChoice) {

        // Computer 'chooses' randomly from calculating for an index in the choice array
        const computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
        
        // Initialize empty string for result
        let result = "";

        // Tie
        if (userChoice === computerChoice) {
            result = "It's a tie!";

        // User wins
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            result = "You win!";

        // Computer wins
        } else {
            result = "Computer wins!";
        }

        // Display results in the result div
        resultDiv.innerHTML = `You chose <strong>${userChoice}</strong>. Computer chose <strong>${computerChoice}</strong>.<br> ${result}`;
    }

    // Add event listener to play again button
    playAgainBtn.addEventListener("click", () => {
        
        // Clear results
        result.innerHTML = "";
    });

    // Add event listener for enter clicked to play again
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            document.getElementById("result").innerHTML = "";
        }
    });
});
