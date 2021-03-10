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
        //console.log(e)
        playerSelection=options.alt.toLowerCase();
        //console.log(playerSelection)
        singleRound(playerSelection,computerSelection());
        //console.log("already playing")
    })
})
//this function randomize between 3 options
let computerSelection = ()=>{
    let random= Math.floor(Math.random()*3);
    let arr= ['paper', 'scissors', 'rock'];
    return arr[random];
}
//Returns the winner
function singleRound(playerSelection, computerSelection){
    //console.log(playerSelection+ " " + computerSelection)
    //console.log("i'm in single Round")
    if(playerSelection==computerSelection){ 
        textAfterRound.textContent= 'it \'s a tie, you can do it!';
        return;
    }else if(playerSelection=='rock'){
           //console.log('P rock')
        if (computerSelection=='paper'){
            //console.log('C paper')
            computerWins();
            return;
        }else if(computerSelection=='scissors'){
           //console.log('C scissors')
           playerWins();
           return;
        }
    }else if(playerSelection=='paper'){
        //console.log('P paper')
        if (computerSelection=='scissors'){
            //console.log('C scissors')
            computerWins();
            return;
        }else if(computerSelection=='rock'){
            //console.log('C rock')
            playerWins()
            return;
        }
    }else if(playerSelection=='scissors'){
            //console.log('P scissors')
            if (computerSelection=='rock'){
            //console.log('C rock')
            computerWins();
            return;
        }else if(computerSelection=='paper'){
            //consoile.log('Cpaper')
            playerWins();
            return;
      }
    }

}
function playerWins(){
    playerScore++
    textAfterRound.textContent= 'You win the round, do it again!';
    yourScore.textContent=playerScore;
    checkScore();
}
function computerWins(){
    computerScore++
    textAfterRound.textContent= 'You lose the round, please FOCUS!!';
    machineScore.textContent=computerScore;

    checkScore();
}
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