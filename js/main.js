// stopwatch
const startButton = document.querySelector('#startButton');
const startScherm = document.querySelector('#startScherm');

const stopwatch = { elapsedTime: 0 };
var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hour = 0;
let stop = false;

startButton.addEventListener('click', () => {
    startStopwatch();
    startScherm.classList.add("hidden");
  })

function startStopwatch() {
    if (stop == true) {
      return;
    }
    else {
      //reset start time
      stopwatch.startTime = Date.now();
      // run `setInterval()` and save the ID
      stopwatch.intervalId = setInterval(() => {
        //calculate elapsed time
        const elapsedTime = Date.now() - stopwatch.startTime + stopwatch.elapsedTime
        //calculate different time measurements based on elapsed time
        milliseconds = parseInt((elapsedTime%1000)/10)
        seconds = parseInt((elapsedTime/1000)%60)
        minutes = parseInt((elapsedTime/(1000*60))%60)
        hour = parseInt((elapsedTime/(1000*60*60))%24);
        }, 100);
      }
  }

function stopStopwatch() {
    console.log(hour, minutes, seconds, milliseconds);
    console.log("hello");
}

stopbutton.addEventListener('click', () => {
    stopStopwatch();
})

