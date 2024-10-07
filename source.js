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

console.log(getComputerChoice());

function getHumanChoice() { //user's choice
    let choice = prompt("Rock, Paper or Scissors?");
    choice = choice.toLowerCase();

    if (choice === "rock") {
        return "Rock";
    } else if (choice === "paper") {
        return "Paper";
    } else if (choice === "scissors") {
        return "Scissors";
    } else {
        return "Try again";
    }
}

console.log(getHumanChoice());