let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

//score
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const generateCompChoice=()=>{
    //rock paper scissors
    const options = ["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random());
    return options[randIdx];
}

const drawGame=()=>{
    console.log("game was draw ");
    msg.innerText="draw the game play again !";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        console.log("you win");
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You win ! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        console.log("you lose");
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You win ! ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userchoice)=>{
    console.log("user choice ",userchoice);
    //generate computer choice
    const compChoice=generateCompChoice();
    console.log("comp choice = ",compChoice);
    //compare choices
    if(userchoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock" ){
         userWin = compChoice==="paper"?false:true;
        }else if(userchoice==="paper") {
            userWin = compChoice==="scissors"?false:true;
        }else{
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compChoice);
    }

};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        
        playGame(userchoice);
    });
});

