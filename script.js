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
        }}  ,50);
        
}
 timer();
