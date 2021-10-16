const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector('#score');
const selectvarText = document.querySelector('#selectedvar');
let score = 0
let acceptedAnswer = true
var randomNumber = 1;
var classToApply = ""

const SCORE_POINTS = 10

startGame = () => {
    score = 0
}

function start(){
    var countdownNumberEl = document.getElementById('countdown-number');

    var countdown = 10;
    countdownNumberEl.textContent = countdown;

    var myInterval = setInterval(function() {
    countdown = --countdown <= 0 ? myStopFunction() : countdown;
    countdownNumberEl.textContent = countdown;
    }, 1000);

    function myStopFunction() {
        anim();
        ch();
        clearInterval(myInterval);
    }
}

function check(){
    const selectedChoice = e.target
    const selectedAnswer = e.target.id

    console.log("Selected: " + selectedAnswer)

    randomNumber = Math.floor(Math.random() * 6) + 1;

    console.log("Dice number: " + randomNumber)
}

// ------------------------------------
choices.forEach(choice =>{
    choice.addEventListener('click', e => {
        if(!acceptedAnswer) return

        acceptedAnswer = false
        const selectedChoice = e.target
        const selectedAnswer = e.target.id

        console.log("Selected: " + selectedAnswer)
        selectvarText.innerText = selectedAnswer
        selectedChoice.parentElement.classList.add('selected')

        randomNumber = Math.floor(Math.random() * 6) + 1;

        console.log("Dice number: " + randomNumber)
        
        classToApply = selectedAnswer == randomNumber ? 'correct' : 'incorrect'

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
            
        }
        // selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            // selectedChoice.parentElement.classList.remove(classToApply)
            selectedChoice.parentElement.classList.remove('selected')
            acceptedAnswer = true
        }, 1000)
        
    })
})

function ch(){

    if(classToApply == 'incorrect'){
        console.log("Galat");
    }
}

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

function shuffle(){
    const img = document.getElementById("img");
    console.log(randomNumber);
    img.setAttribute("src", `./assets/${randomNumber}.png`)
}

function anim(){
    setTimeout(shuffle, 1000);
    const img = document.getElementById("img");
    img.setAttribute("src", "./assets/dice.gif");
}



