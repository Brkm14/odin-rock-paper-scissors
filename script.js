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
    let playerSelection = prompt("Write your weapon:");
    if(playerSelection === null){
        return null;
    }else{
        playerSelection = playerSelection.toLowerCase();
    }

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

function playGame(){
    let player = 0;
    let computer = 0;
    for (i = 0; i < 5; i++) {
       let whoWin = playRound();
       console.log(whoWin);

       if(whoWin === null){
        console.log("Game cancelled");
        return;
       }

       if(whoWin.includes("Win")){
            player++;
       }else if(whoWin.includes("Lose")){
            computer++;
       }

       console.log(`Player: ${player} , Computer: ${computer}`);

    }

    if(player > computer){
        console.log("Player Win! Player: " + player + " Computer: " + computer);
    } else if(computer > player){
         console.log("Computer Win! Player: " + player + " Computer: " + computer);
    } else {
        console.log("Draw! Friendship won Player: " + player + " Computer: " + computer);
    }
}

playGame();

var playAgain = true;

while (playAgain) {
    var answer = prompt("Do you want to play again? (Yes/No)");

    if (answer.toLowerCase() === "yes") {
      console.log("Game restarting...");
      playGame();
    } else if (answer.toLowerCase() === "no") {
      console.log("Game finished.");
      playAgain = false;
    } else {
      console.log("Waiting for a valid answer...");
    }
  }









