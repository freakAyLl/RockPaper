let options=document.querySelectorAll(".options");
const textAfterRound= document.querySelector('.textAfterRound');
const yourScore= document.querySelector('.youScore');
const machineScore= document.querySelector('.machineScore');
let playerScore=0;
let computerScore=0;

function restartGame(){
    playerScore=0;
    computerScore=0;
    textAfterRound.textContent=''
    machineScore.textContent=computerScore;
    yourScore.textContent=playerScore;
}
//this function inputs person choice
options.forEach((options)=>{
    options.addEventListener("click", (e)=>{
        playerSelection=options.alt.toLowerCase();
        singleRound(playerSelection,computerSelection());
    })
})
//this function randomize between 3 options
let computerSelection = ()=>{
    let random= Math.floor(Math.random()*3);
    let arr= ['paper', 'scissors', 'rock'];
    return arr[random];
}
//Returns the winner of the round
function singleRound(playerSelection, computerSelection){
    if(playerSelection==computerSelection){ 
        textAfterRound.textContent= 'it \'s a tie, you can do it!';
        return;
    }else if(playerSelection=='rock'){
        if (computerSelection=='paper'){
            computerWins();
            return;
        }else if(computerSelection=='scissors'){
           playerWins();
           return;
        }
    }else if(playerSelection=='paper'){
        if (computerSelection=='scissors'){
            computerWins();
            return;
        }else if(computerSelection=='rock'){
            playerWins()
            return;
        }
    }else if(playerSelection=='scissors'){
            if (computerSelection=='rock'){
            computerWins();
            return;
        }else if(computerSelection=='paper'){
            playerWins();
            return;
      }
    }
}
//modifies DOM and adds player points
function playerWins(){
    playerScore++
    textAfterRound.textContent= 'You win the round, do it again!';
    yourScore.textContent=playerScore;
    checkScore();
}
//modifies DOM and adds computer points
function computerWins(){
    computerScore++
    textAfterRound.textContent= 'You lose the round, please FOCUS!!';
    machineScore.textContent=computerScore;
    checkScore();
}
//end the game
function checkScore(){
    if(playerScore==5){
        alert('you win')
        restartGame();
    }
    if(computerScore==5){
        alert('Computer Wins')
        restartGame();
    }
}