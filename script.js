function getComputerChoice() {
    let choice = (Math.floor(Math.random() * 3) + 1);
    if(choice == 1){
        return "rock"
    } else if(choice == 2){
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(){
    let playerSelection = prompt("Write your weapon:").toLowerCase();
    let computerSelection = getComputerChoice();
    if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats Scissors"
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rock"
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock"
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You Lose! Scissors beats Paper"
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You Lose! Rock beats Scissors"
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beats paper"
    }else if(playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors"){
        return "Draw!"
    } else {
        return "You must select your weapon!"
    }
    
}





