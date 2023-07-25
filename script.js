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

function playRound(weapon){
    let playerSelection = weapon;
    let computerSelection = getComputerChoice();

    // if(playerSelection === null){
    //     return null;
    // }else{
    //     playerSelection = playerSelection.toLowerCase();
    // }

    const playerImage = document.getElementById('playerImage');
    const computerImage = document.getElementById('computerImage');
    playerImage.src = `images/${playerSelection}.png`;
    computerImage.src = `images/${computerSelection}.png`;

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


let player = 0;
let computer = 0;

function playGame(){
   
    
        let result = ""; 
       let whoWin = score;
       //console.log(whoWin);

    //    if(whoWin === null){
    //     console.log("Game cancelled");
    //     return;
    //    }

       if(whoWin.includes("Win")){
            player++;
            result += `Player: ${player} , Computer: ${computer}`;
       }else if(whoWin.includes("Lose")){
            computer++;
            result += `Player: ${player} , Computer: ${computer}`;
       }else if(whoWin.includes("Draw!")){
            result += `Player: ${player} , Computer: ${computer}`;
       }

       

    
    if(player === 5 || computer === 5){
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
        if(player > computer){
            result += "\n Player Win! Do you want to play again ?";
        } else if(computer > player){
            result += "\n Computer Win! Do you want to play again ?";
        } else {
            result += "\n Draw! Friendship won! Do you want to play again ? ";
        }
        //document.getElementById('playAgainButton').disabled = false;
    }
    return result;
}

 

// var playAgain = true;

// while (playAgain) {
//     var answer = prompt("Do you want to play again? (Yes/No)");

//     if (answer.toLowerCase() === "yes") {
//       console.log("Game restarting...");
//       playGame();
//     } else if (answer.toLowerCase() === "no") {
//       console.log("Game finished.");
//       playAgain = false;
//     } else {
//       console.log("Waiting for a valid answer...");
//     }
//   }


const buttons = document.querySelectorAll('button');
const div = document.querySelector(".text");
const div2 = document.querySelector(".text2")
let score = "";
let winner = "";


buttons.forEach((button) => {
        

        button.addEventListener('click', () => {
            if (button.id === 'again') {
                playAgain() ;
            } else {
                const btnTxt = button.textContent;
                score = playRound(btnTxt);
                div.textContent = score;
                winner = playGame();
                div2.textContent = winner;

            }
        });
     
  });


  function playAgain() {
    player = 0;
    computer = 0;
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;

    div.textContent = "";
    div2.textContent = "";
}
  










