var items = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    
    return items[Math.floor(Math.random()*3.0)]
}

function getHumanChoice(){
    let res = prompt("Choose rock, paper, or scissors").toLowerCase();
 
    while (!items.includes(res)){
        res = prompt("Incorrect answer. Choose rock, paper, or scissors").toLowerCase();
    }

    return res;
}
function playRound(humanChoice, computerChoice) {
    if( (humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'rock') ){
        console.log("You Win!");
        humanScore++;
    }
    else 
    {
        if(humanChoice == computerChoice){
            console.log("draw");

    }
    else{
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`)
        computerScore++;
    }
}
}


function playGame(){
    for(i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice); 
    }

    if(humanScore > computerScore){
        console.log("You win the game!");
    }
    else{
        console.log("You lost!");
    }
}

playGame();
