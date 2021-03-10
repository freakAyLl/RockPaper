let options=document.querySelectorAll(".options");

//this function inputs person choice
options.forEach((options)=>{
    console.log("hey"+options)
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
    console.log(playerSelection+ " " + computerSelection)
    console.log("i'm in single Round")
    if(playerSelection==computerSelection){ 
        //console.log('Tie')
        return `It is a Tie! Both selected ${computerSelection}`;
    }else if(playerSelection=='rock'){
           //console.log('P rock')
        if (computerSelection=='paper'){
            //console.log('C paper')
            return `You Lose! ${computerSelection} beats ${playerSelection}.`;
        }else if(computerSelection=='scissors'){
           //console.log('C scissors')
            return `You Win! ${playerSelection} beats ${computerSelection}.`;
        }
    }else if(playerSelection=='paper'){
        //console.log('P paper')
        if (computerSelection=='scissors'){
            //console.log('C scissors')
            return `You Lose! ${computerSelection} beats ${playerSelection}.`;
        }else if(computerSelection=='rock'){
            //console.log('C rock')
            return `You Win! ${playerSelection} beats ${computerSelection}.`;
        }
    }else if(playerSelection=='scissors'){
            //console.log('P scissors')
            if (computerSelection=='rock'){
            //console.log('C rock')
            return `You Lose! ${computerSelection} beats ${playerSelection}.`;
        }else if(computerSelection=='paper'){
            function computerPlay(){
                let random= Math.floor(Math.random()*3);
                let arr= ['paper', 'scissors', 'rock'];
                return arr[random];
            }       }
    }
}


function game(playerInput){
    let computerCount=0
    let playerCount=0
    
        const result= singleRound(playerInput);
        console.log(result);
        alert(result);
        let decider=result[4];
        if(decider== 'W'){
            playerCount++;
        }else if(decider== 'L'){
            computerCount++;
        }
    
    if(computerCount>playerCount){
        console.log('computer Win:'+computerCount+" to "+playerCount);
    }else if(computerCount<playerCount){
        console.log('Player Wins: '+playerCount+ " to "+computerCount);
        return 'Player wins'
    }else{
        return "it's a tie. Player: "+playerCount+ ". Computer:"+computerCount+".";
    }
}