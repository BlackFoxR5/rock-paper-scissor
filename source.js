console.log("Hello Player!!");

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

let humanChoice = null;

document.querySelector("#rock").addEventListener("click", () => {
    humanChoice = "Rock";
});

document.querySelector("#paper").addEventListener("click", () => {
    humanChoice = "Paper";
});

document.querySelector("#scissors").addEventListener("click", () => {
    humanChoice = "Scissors";
});

function getHumanChoice() {
    return humanChoice;
}


// console.log(getHumanChoice());

    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    const result = document.querySelector("#results")

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        result.textContent = `It's a tie! Score - You: ${humanScore}, PC: ${computerScore}`;
        return "It's a tie!";
    }

    if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
            humanScore++; //increment humanScore by 1
            console.log("Your score:", humanScore); //shows user's score
            result.textContent = `You win! Rock beats Scissors - Score: You: ${humanScore}, PC: ${computerScore}`;
            return "You win! Rock beats Scissors";
        } 
        else {
            computerScore++; //increment computerScore by 1
            console.log("PC's score:", computerScore); //show computer's score
            result.textContent = `You lose! Paper beats Rock - Score: You: ${humanScore}, PC: ${computerScore}`;
            return "You lose! Paper beats Rock";
        }
    }

    if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            humanScore++; //increment humanScore by 1
            console.log("Your score:", humanScore); //shows user's score
            result.textContent = `You win! Paper beats Rock - Score: You: ${humanScore}, PC: ${computerScore}`;
            return "You win! Paper beats Rock";
        } else {
            computerScore++; //increment computerScore by 1
            console.log("PC's score:", computerScore); //show computer's score
            result.textContent = `You lose! Scissors beats Paper - Score: You: ${humanScore}, PC: ${computerScore}`;
            return "You lose! Scissors beats Paper";
        }
    }

    if (humanChoice === "Scissors") {
        if (computerChoice === "Paper") {
            humanScore++; //increment humanScore by 1
            console.log("Your score:", humanScore); //shows user's score
            result.textContent = `You win! Scissors beats Paper - Score: You: ${humanScore}, PC: ${computerScore}`;
            return "You win! Scissors beats Paper";
        } else {
            computerScore++; //increment computerScore by 1
            console.log("PC's score:", computerScore); //show computer's score
            result.textContent = `You lose! Rock beats Scissors - Score: You: ${humanScore}, PC: ${computerScore}`;
            return "You lose! Rock beats Scissors"
        }
    }
}

function fiveRound() {
    if (roundsPlayed >= 5) {
        result.textContent = "Game over!";
        console.log("Game over!");
        if (humanScore > computerScore) {
            result.textContent = "You won the game! The game has been reset. Play again!";
            console.log("You won the game!");
        } else if (humanScore < computerScore) {
            result.textContent = "You lost the game! The game has been reset. Play again!";
            console.log("You lost the game!");
        } else {
            result.textContent = "It's a tie! The game has been reset. Play again!";
            console.log("It's a tie!")
        }

        // Reset the game
        roundsPlayed = 0;
        humanScore = 0;
        computerScore = 0;
        // result.textContent = "The game has been reset. Play again!"
        console.log("The game has been reset. Play again!");

        return;
    }

    let humanChoice = getHumanChoice();
    if (humanChoice) {
        let computerChoice = getComputerChoice();
        console.log("Computer chose: ", computerChoice);
        console.log("You chose: ", humanChoice);
        console.log(playRound(humanChoice, computerChoice));
        roundsPlayed++;
    } else {
        console.log("Enter Rock, Paper or Scissors!");
    }
}  

document.querySelector("#rock").addEventListener("click", fiveRound);
document.querySelector("#paper").addEventListener("click", fiveRound);
document.querySelector("#scissors").addEventListener("click", fiveRound);
