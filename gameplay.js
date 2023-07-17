const playOptions = ["Rock", "Scissors", "Paper"];  // order matters!

function getRandomInt(max) {
    //  get a random number between 0 (incl) and max (incl).
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
}

function getComputerChoice(){
    // return random choice
    return playOptions[getRandomInt(2)]
}

function capitalise (s){
    // capitalises a string
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function cleanInput(s){
    // reformat player input to match one of the play options
    return capitalise(s.toLowerCase())
}

function playOneRound(computerChoice, playerChoice){
    playerChoice = cleanInput(playerChoice)
    console.log(playerChoice)
    let playerIndex = playOptions.indexOf(playerChoice)
    let computerIndex = playOptions.indexOf(computerChoice)

    //  draw
    if (playerIndex === computerIndex){
        return `You Draw! You both chose ${playerChoice}`
    }
    // win
    if ((playerIndex + 1) % playOptions.length == computerIndex){
        return `You Win! ${playerChoice} beats ${computerChoice}`
    }

    // lose
    return `You Lose! ${playerChoice} loses to ${computerChoice} `
}

function game(){
    // play a 5 round game
    let playerScore = 0, computerScore = 0;
    for (let round = 1; round <= 5; round++){
        let computerChoice = getComputerChoice();
        let playerChoice = "";
        while (playOptions.indexOf(playerChoice) === -1){
            playerChoice = cleanInput(prompt("Choose from Rock, Paper, Scissors"));
        }
        let roundOutcome = playOneRound(computerChoice, playerChoice);
        console.log(roundOutcome);
        if (roundOutcome.includes("You Win")) {
            playerScore += 1;
        }
        else if (roundOutcome.includes("You Lose")) {
            computerScore += 1;
        }
    }

    let scoreText = ` (${playerScore} vs ${computerScore})`

    if (computerScore === playerScore ){
        return "You Draw Overall!" + scoreText
    }
    else if (computerScore < playerScore){
        return "You Win Overall!" + scoreText
    }
    else {
        return "You Lose Overall!" + scoreText
    }
}