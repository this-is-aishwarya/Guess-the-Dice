$(function(){
    var overlay = $('<div id="overlay"></div>');
    overlay.show();
    overlay.appendTo(document.body);
    $('.popup').show();
    $('.close').click(function(){
    $('.popup').hide();
    overlay.appendTo(document.body).remove();
    return false;
    });
    
    
     
    
    $('.x').click(function(){
    $('.popup').hide();
    overlay.appendTo(document.body).remove();
    return false;
    });
    });

const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector('#score');
const selectvarText = document.querySelector('#selectedvar');
const modal = document.querySelector(".modal-overlay");
const modalCorrect = document.getElementById("correct");

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
        check();
        clearInterval(myInterval);
        
    }
}

document.querySelector(".close-btn").addEventListener("click", () => {
    modalCorrect.classList.remove("modal-container-correct")
    modal.classList.remove("open-modal");
  });

// function check(){
//     const selectedChoice = e.target
//     const selectedAnswer = e.target.id

//     console.log("Selected: " + selectedAnswer)

//     randomNumber = 55Math.floor(Math.random() * 6) + 1;

//     console.log("Dice number: " + randomNumber)
// }

// ------------------------------------
choices.forEach(choice =>{
    choice.addEventListener('click', e => {
        if(!acceptedAnswer) return

        acceptedAnswer = false
        const selectedChoice = e.target
        const selectedAnswer = e.target.id

        randomNumber = Math.floor(Math.random() * 6) + 1;
        console.log("Dice number: " + randomNumber)

        console.log("Selected: " + selectedAnswer)
        selectvarText.innerText = selectedAnswer
        selectedChoice.parentElement.classList.add('selected')
        
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

function check(){

    if(classToApply == 'correct'){
        setTimeout(() => {
            modalCorrect.classList.add("modal-container-correct")
            modal.classList.add("open-modal");
        }, 2500)
    }
    else{
        setTimeout(() => {
            modal.classList.add("open-modal");
        }, 2500)
    }
}

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

function shuffle(){
    const img = document.getElementById("img");
    img.setAttribute("src", `./assets/${randomNumber}.png`)
}

function anim(){
    setTimeout(shuffle, 1000);
    const img = document.getElementById("img");
    img.setAttribute("src", "./assets/dice.gif");
}



