const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector('#score');
const selectvarText = document.querySelector('#selectedvar');
let score = 0
let acceptedAnswer = true
var randomNumber = 1;

const SCORE_POINTS = 10

startGame = () => {
    score = 0
}

// const rollDice = () => Math.floor(Math.random() * 6) + 1;

choices.forEach(choice =>{
    choice.addEventListener('click', e => {
        const selectedChoice = e.target
        const selectedAnswer = e.target.id

        choice.style.backgroundColor = "yellow"

        console.log("Selected: " + selectedAnswer)
        selectvarText.innerText = selectedAnswer

        // const random = rollDice();

        randomNumber = Math.floor(Math.random() * 6) + 1;
        console.log("Dice number: " + randomNumber)

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