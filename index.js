let player = prompt("What is your choice? ");

let answers = ["rock", "paper", "scissors",];

let random = Math.floor(Math.random() * answers.length)

let ai = answers[random];

const aiAnswerString = "The computers choice is: "

console.log(aiAnswerString + ai)

const playerTieCase = "It's a tie!"

const playerWinCase = "You win!"

const playerLoseCase = "You lose... try better next time!"

function playRPS() { 

  switch(true) {

    case player === computer:
    console.log(playerTieCase)
    break

    case player === "rock" && computer === "scissors":
    console.log(playerWinCase)
    break

    case player === "scissors" && computer === "paper":
    console.log(playerWinCase)
    break

    case player === "paper" && computer === "rock":
    console.log(playerWinCase)
    break

    case player === "scissors" && computer === "rock":
    console.log(playerLoseCase)
    break

    case player === "paper" && computer === "scissors":
    console.log(playerLoseCase)
    break

    case player === "paper" && computer === "paper":
    console.log(playerTieCase)
    break

    case player === "scissors" && computer === "scissors":
    console.log(playerTieCase)
    break

    case player === "rock" && computer === "rock":
    console.log(playerTieCase)
    break

    default: console.log(playerLoseCase)

  };

};

playRPS();