const btnColors=["green","red","yellow","blue"];
let gameSequence = [];
let userClickedPattern = [];
let level = 0;
let start = false;

function nextSequence(){
    level++;
    userClickedPattern=[];

    $("h1").text(`Level ${level}`);
    
    let randNum=Math.floor(Math.random()*4);

    let randChosenColor = btnColors[randNum];
    gameSequence.push(randChosenColor);

    let btnChosen = $(`#${randChosenColor}`);
    btnChosen.fadeOut().fadeIn()
    
    playSound(randChosenColor);
    
};

$(".btn").click(function(){
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);


    checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
};

function animatePress(currentColor){
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(() => {
    $(`#${currentColor}`).removeClass("pressed");        
    }, 100);
}

$(document).keypress(()=>{
    if(!start){
        nextSequence();
        start = true;
    }
});

function checkAnswer(currentLevel){
    if(gameSequence[currentLevel] === userClickedPattern[currentLevel])
    {

        if((gameSequence.length-1)==currentLevel){
            setTimeout(()=>{
                nextSequence();
            },500);
        }
    }
    else
    {
        level=0;
        start = false;
        gameSequence=[];

        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(() => {
        $("body").removeClass("game-over");        
        }, 100);

        $("h1").text(`Game Over, Press Any Key to Restart`);
        
    }
}