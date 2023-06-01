let round = 0;
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";

////Defining all the things we'll need to control in the HTML (a.k.a. everything)

//Score counters
const playerScoreCounter = document.querySelector('#playerScore') 
const roundCounter = document.querySelector('#round')
const cpuScoreCounter = document.querySelector('#cpuScore')

//The text
const outputText = document.querySelector('.output-text')

//The buttons
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')

//Called to update the counters in the HTML so they match the current values, and check for when the game ends,
function updateScores() {
    playerScoreCounter.textContent = playerScore;
    roundCounter.textContent = round;
    cpuScoreCounter.textContent = computerScore;

    if (playerScore === 5) {
        outputText.innerHTML = "Congratulations! <br> You've beat the world's best Rock Paper Scissors CPU!"
        endGame()
    } else if (computerScore === 5) {
        outputText.innerHTML = "GAME OVER. <br> You've lost!"
        endGame()
    } else {
        return
    }
}

function endGame() {
    const playerChoices = document.querySelector('.player-choices')
    playerChoices.removeChild(rockButton)
    playerChoices.removeChild(paperButton)
    playerChoices.removeChild(scissorsButton)
}

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
    round++;
    //Either of these two variables will only ever equal "rock", "paper", or "scissors".

    //If they have the same thing
    if (playerSelection === computerSelection) {
        return `It was a draw! You both picked ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}!`;
    } else if ( //If the player's fulfilled any of the win conditions
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerScore++;
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()}!`;
    } else { //If the player hasn't fulfilled any of the win conditions, it's probably because they've lost.
        computerScore++;
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}!`;
    }
}

function choiceHandler(choice) {

    result = playRound(choice, getComputerChoice())
    outputText.innerHTML = `${result} <br>Please make your next choice.`;
    updateScores()
}


outputText.innerHTML = `It's time for Rock Paper Scissors! <br>
Please make your choice.`;

rockButton.addEventListener('click', () => {choiceHandler('rock')});

paperButton.addEventListener('click', () => {choiceHandler('paper')});

scissorsButton.addEventListener('click', () => {choiceHandler('scissors')});