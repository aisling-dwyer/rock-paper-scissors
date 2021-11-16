var userChoiceDisplay = document.getElementById("user-choice");
var computerChoiceDisplay = document.getElementById("computer-choice");
var resultDisplay = document.getElementById("result")
var computerChoice;
var userChoice;
var computerChoiceDisplay;

var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");
var playGameButton = document.getElementById("playGame");


rockButton.addEventListener("click", function(){ 
    userChoice="rock"
    userChoiceDisplay.innerHTML = userChoice;
   
})

paperButton.addEventListener("click", function(){ 
    userChoice="paper"
    userChoiceDisplay.innerHTML = userChoice;
   

})

scissorsButton.addEventListener("click", function(){
    userChoice="scissors"
    userChoiceDisplay.innerHTML = userChoice;
    

})


playGameButton.addEventListener("click",function(){
    var computerChoiceNumber = Math.floor(Math.random()*3);
    if (computerChoiceNumber === 1){
        computerChoice="rock";
    }
    if (computerChoiceNumber === 2){
        computerChoice="paper";
    }
    if (computerChoiceNumber === 3){
        computerChoice="scissors";
    }
    
    computerChoiceDisplay.innerHTML=computerChoice;
    playGame()
})


function playGame(){    
    if(userChoice=="rock" && computerChoice=="paper"){
        result = "Paper wins against rock. You lose!"
    }

    if(userChoice=="paper" && computerChoice=="rock"){
        result = "Paper wins against rock. You win!"
    }

    if (userChoice=="rock" && computerChoice=="scissors"){
        result = "Rock wins against scissors. You win!"
    }

    if (userChoice=="scissors" && computerChoice=="rock"){
        result = "Rock wins against scissors. You lost!"
    }

    if (userChoice=="scissors" && computerChoice=="paper"){
        result = "Scissors wins against paper. You win!"
    }

    if (userChoice=="paper" && computerChoice=="scissors"){
        result = "Scissors wins against paper. You lose!"   
    }

    resultDisplay.innerHTML = result
}

