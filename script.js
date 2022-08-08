// Exercise 1

const wordText = document.getElementById('proutText');

let word = 'Good Luck!';
let nextLetter = 0;
function wordcompter(){
  let interval = setInterval(() => {
        let textPlace = document.querySelector('#proutText');
        textPlace.innerText= textPlace.innerText+word[nextLetter++];
        if(nextLetter >= word.length)
    {
        clearInterval(interval);
    }
    }, 1000);
}

wordcompter();


// _______________________________________________

// Exercise 2
// Write a function that displays every second that has passed on the page since it was opened. 
// The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", 
// then "2 minutes have passed" (for 120 seconds and more), etc.

const timerText = document.getElementById('timer-text');
const minuteText = document.getElementById('minuteText');

let second = 0;
let minute = 0;
let n=60;

function timer (){
    setInterval(function(){
        second += 1;
        if(second == 60){
            second=1;
            minute+=1
            if(minute==1){
                minuteText.textContent=minute +" minute has passed";
            }else{
                minuteText.textContent=minute +" minutes have passed";
            };
        }
            else{
        timerText.textContent = second;
        }}  ,1000);
        
}
 timer();

// _______________________________________________
// Exercice 3 WHACK A MOLE

//Take all the circles/holes
let holes = document.querySelectorAll('.hole')
console.log(holes);

//Function to add score 
function addScore(){
    let score = document.querySelector('.whackAMole__score');
    score.innerText= parseInt(score.innerText)+100;
}
let mySound = new Audio('mixkit-sad-game-over-trombone-471.wav')

//Function to manage the lives
function lives(){
    let lives = document.querySelector('.whackAMole__life');
    lives.innerText= parseInt(lives.innerText)-1;
    if(lives.innerHTML < 1){
        mySound.play()
        alert('GAME OVER')
        document.location.reload()
    }
}

//Adding and removing class when click on 
holes.forEach(hole => {
    hole.addEventListener("click",()=>{
        if(hole.classList.contains('green')){
            hole.classList.remove('green');
            console.log('good')
            addScore()
        }
        else{
            console.log('bad')
            lives();
            hole.classList.add('wrongHole');
            setTimeout(() => {
                hole.classList.remove('wrongHole')
            }, 500);
        }
})
});

//Make the green circle appear
function greenAppear(){
    let interval = setInterval(() => {
        holes.forEach(hole => {
            const idx = Math.floor(Math.random() * holes.length);
            let target = holes[idx];
            // console.log (idx)
            // console.log(target)
            target.classList.toggle('green')
        });
    }, 2000);
}

greenAppear();
