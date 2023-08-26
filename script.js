var timer = 60;
var score = 0;
var randomNumber = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function makebubbles(){
    var clutter = "";

for(var i = 1; i <= 133; i++){
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
  var timeInt = setInterval(() => {
       if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
       }
       else{
        document.querySelector("#hitval").textContent = 0;
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        clearInterval(timeInt);
       }
    }, 1000);
}

function getNewHit(){
    randomNumber = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = randomNumber;
}

document.querySelector("#pbtm").addEventListener("click", (details) => {
    var clickedNUmber = Number(details.target.textContent);
    if(clickedNUmber === randomNumber){
        increaseScore();
        makebubbles();
        getNewHit();
    }
});

runTimer();
makebubbles();
getNewHit();