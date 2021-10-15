const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector('#score');
let score = 0
let acceptedAnswer = true
var randomNumber = 1;

const SCORE_POINTS = 10

startGame = () => {
    score = 0
}

choices.forEach(choice =>{
    choice.addEventListener('click', e => {
        if(!acceptedAnswer) return

        acceptedAnswer = false
        const selectedChoice = e.target
        const selectedAnswer = e.target.id

        console.log(selectedAnswer)
        // console.log(randomNumber)

        let classToApply = selectedAnswer == randomNumber ? 'correct' : 'incorrect'

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            acceptedAnswer = true
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

function shuffle(){
    randomNumber = Math.floor(Math.random() * 6) + 1;
    const img = document.getElementById("img");
    console.log(randomNumber);
    img.setAttribute("src", `${randomNumber}.png`)
}

function anim(){
    setTimeout(shuffle, 1000);
    const img = document.getElementById("img");
    img.setAttribute("src", "dice.gif");
}

var myInterval = setInterval(anim, 10000);

var countdownNumberEl = document.getElementById('countdown-number');
var countdown = 10;

countdownNumberEl.textContent = countdown;

setInterval(function() {
  countdown = --countdown <= 0 ? 10 : countdown;
  if (countdown === 0){
      console.log("time up")
      anim();
  }
  countdownNumberEl.textContent = countdown;
}, 1000);

