// Exercise 1

const wordText = document.getElementById('proutText');

let word = 'prout';
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

let count = 0;

function timer (){
    setInterval(function(){
        count += 1;
        timerText.textContent = count;
        }  ,1000);
}
 timer();
