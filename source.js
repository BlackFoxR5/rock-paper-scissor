console.log("Hello World!!");

function getComputerChoice() {  //computer's choice
    const randomNum = Math.random();
    if (randomNum <  0.33) {
        return "Rock";
    } else if (randomNum < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// console.log(getComputerChoice());

function getHumanChoice() { //user's choice
    let choice = prompt("Rock, Paper or Scissors?");
    choice = choice.toLowerCase(); //to make case insensitive inputs

    if (choice === "rock") {
        return "Rock";
    } else if (choice === "paper") {
        return "Paper";
    } else if (choice === "scissors") {
        return "Scissors";
    } else {
        return "Invalid choice";
    }
}

// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
            return "You win! Rock beats Scissors";
        } else {
            return "You lose! Paper beats Rock";
        }
    }

    if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            return "You win! Paper beats Rock";
        } else {
            return "You lose! Scissors beats Paper";
        }
    }

    if (humanChoice === "Scissors") {
        if (computerChoice === "Paper") {
            return "You win! Scissors beats Paper";
        } else {
            return "You lose! Rock beats Scissors"
        }
    }
}

let humanChoice = getHumanChoice();
if (humanChoice !== "Invalid choice") {
    let computerChoice = getComputerChoice();
    console.log("Computer chose:", computerChoice);
    console.log(playRound(humanChoice, computerChoice))
} else {
    console.log("Enter Rock, Paper or Scissors")
}