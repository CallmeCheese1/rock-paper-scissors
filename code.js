// Generate a random number between min (inclusive) and max (exclusive)
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    choice = getRandomNumber(1, 3)
    
    switch (choice) {
        case 1:
            choice = "rock"
            break;

        case 2:
            choice = "paper"
            break;

        case 3:
            choice = "scissors"
            break;

        default:
            getComputerChoice();
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    //Either of these two variables will only ever equal "rock", "paper", or "scissors".

    //If they have the same thing
    if (playerSelection === computerSelection) {
        return `It was a draw! You both picked ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}`;
    } else if ( //If the player's fulfilled any of the win conditions
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()}!`;
    } else { //If the player hasn't fulfilled any of the win conditions, it's probably because they've lost.
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}!`;
    }
}

//const playerSelection = "rock".toLowerCase();
//const computerSelection = getComputerChoice();

//console.log(`You've picked: ${playerSelection}`);
//console.log(`But, the computer picked: ${computerSelection}`);
//console.log(playRound(playerSelection, computerSelection))

function game() {
    console.log("It's time for Rock Paper Scissors!");

    let round = 0;
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = "";
    let computerSelection = "";

    while (!((playerScore === 3) || (computerScore === 3))) {
        round++;

        console.log(`----ROUND ${round}----`);
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);

        chosen = false;
        while (!(chosen)) {
            playerSelection = prompt("What will you choose?").toLowerCase()

            if (playerSelection !== "rock" && playerSelection !== "scissors" && playerSelection !== "paper") {
                console.log(playerSelection);
                console.log("Sorry, that was not a valid input. Please try again.");
            } else {
                console.log(playerSelection);
                console.log(`You chose ${playerSelection}!`);
                chosen = true;
            }
        }

        computerSelection = getComputerChoice();
        console.log("The computer has chosen, too. Let's see...");

        decision = playRound(playerSelection, computerSelection);
        console.log(decision);
        
        if (decision.includes("win")) {
            playerScore++;
        } else if (decision.includes("lose")) {
            computerScore++;
        }
    }

    if (playerScore === 3) {
        console.log("Congratulations! You've beat the world's best Rock Paper Scissors CPU!");
    } else {
        console.log("GAME OVER. You've lost!")
    }
}

game();