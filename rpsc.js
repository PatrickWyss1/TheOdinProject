document.getElementById('rbtn').addEventListener('click', playSingleRound('rock', getComputerChoice()));






function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);
    switch (rand){
        case 0:
            return "Rock!";    
        case 1:
            return "Paper!";
        case 2:
            return "Scissors!"
        default:
            return;
    }
}


function playSingleRound(playerSelection, computerSelection){

   console.log("Playing round with user selection " + playerSelection);
    let playerSelectionLower = playerSelection.toLowerCase()

    if(computerSelection == "Rock!"){
        switch (playerSelectionLower){
            case "paper":
                return "Paper beats Rock. You Win!";
            case "scissors":
                return "Rock beats Scissors. You Lost!";
            case "rock":
                return "Rocks clash, both break, it's a draw!";
            default:
                return "There was an error";
        }
    }else if(computerSelection == "Paper!"){
        switch (playerSelectionLower){
            case "paper":
                return "Your Papers fold into an origami crane, it's a draw!";
            case "scissors":
                return "Scissors cut Paper, you win!";
            case "rock":
                return "Paper suffocates Rock, you lose!";
            default:
                return "There was an error";
        }
    }else if(computerSelection == "Scissors!"){
        switch (playerSelectionLower){
            case "paper":
                return "This but a scratch, but you still lost!";
            case "scissors":
                return "No comment, it's a draw";
            case "rock":
                return "You crack the scissors back, and win!";
            default:
                return "There was an error";
        }
    }

}

function game(){
    for(let i = 0; i < 5; i++){
        playSingleRound(window.prompt("Rock, Paper or Scissors?"), getComputerChoice())
    }
}
















