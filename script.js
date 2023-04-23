const boxes = document.querySelectorAll(".box");
const mole = document.querySelector(".mole");
const restart = document.getElementById("restart");
const timeCounter = document.getElementById("time");
const scoreCounter = document.getElementById("score");
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const pro = document.getElementById("pro");

let score = 0;
let currentBox = 0;
let islocked = false;
let currentTime = 10;

function showMole(){
    boxes.forEach((box) =>{
        box.classList.remove("mole");
    });
    islocked = false;
    let randomBox = boxes[Math.floor(Math.random() * 9)];

    randomBox.classList.add("mole");

    currentBox = randomBox.id
}

function start(){
    score = 0;
    currentTime = 10;
    moleTimer = setInterval(showMole, 300);
    timeTimer = setInterval(countTime, 1000);

}

start();

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(box.id == currentBox){
            if(islocked) return;

            score++;
            scoreCounter.innerHTML = score;
            box.classList.remove("mole");
            islocked = true;
        }
    });
});

function countTime(){
    currentTime--;
    timeCounter.innerHTML = currentTime;

    if(currentTime == 0){
        clearInterval(timeTimer);
        clearInterval(moleTimer);
        alert('GAME OVER! \n YOUR SCORE:' + score);
    }
}

function restartGame() {
    clearInterval(timeTimer);
    clearInterval(moleTimer);
    start();
}

function Settings() {
    currnetTime--;
    easy.addEventListener("click", moleTimer = setInterval(showMole, 1000));
    medium.addEventListener("click", moleTimer = setInterval(showMole, 500));
    pro.addEventListener("click", moleTimer = setInterval(showMole, 100));
}

restart.addEventListener("click", restartGame);



