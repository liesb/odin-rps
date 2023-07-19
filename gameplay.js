const playOptions = ["Rock", "Scissors", "Paper"];  // order matters!
let playerScore = 0, computerScore = 0;

function getRandomInt(max) {
    //  get a random number between 0 (incl) and max (incl).
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
}

function getComputerChoice(){
    // return random choice
    return playOptions[getRandomInt(2)]
}

// function capitalise (s){
//     // capitalises a string
//     return s.charAt(0).toUpperCase() + s.slice(1)
// }

// function cleanInput(s){
//     // reformat player input to match one of the play options
//     return capitalise(s.toLowerCase())
// }

function playOneRound(playerChoiceEvent){
    let computerChoice = getComputerChoice();
    playerChoice = playerChoiceEvent.target.id;
    let playerIndex = playOptions.indexOf(playerChoice)
    let computerIndex = playOptions.indexOf(computerChoice)

    // display outcome and update scores
    //  draw
    if (playerIndex === computerIndex){
        roundOutcome.textContent =`You Draw! You both chose ${playerChoice}`;
        
    }
    // win
    else if ((playerIndex + 1) % playOptions.length == computerIndex){
        playerScore ++;
        roundOutcome.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    }

    // lose
    else {
        computerScore++;
        roundOutcome.textContent =`You Lose! ${playerChoice} loses to ${computerChoice}`;
    }

    // update rolling score
    rollingScore.textContent = `You ${playerScore} - ${computerScore} Computer`;

    if (playerScore === 5){
        requestAnimationFrame(() => {}, 20)
        alert("You've won!\nClick to play again")
        resetGame()
    }
    else if (computerScore === 5){
        requestAnimationFrame(() => {}, 20)
        alert("You've lost!\nClick to play again")
        resetGame()
    }

}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    roundOutcome.textContent =``;
    rollingScore.textContent = `You: 0 - 0 Computer`;

}


const buttons = document.querySelectorAll("button");
buttons.forEach(button => addEventListener("click", playOneRound))
