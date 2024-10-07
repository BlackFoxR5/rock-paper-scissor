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