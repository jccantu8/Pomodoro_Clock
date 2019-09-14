//Initialize variables holding 25 and 5 minutes in milliseconds
var workTime = 25*60*1000;
var breakTime = 5*60*1000;

//Initialize two flags that will be used to decide which function to use - work or break
var workFlag = false;
var breakFlag = false;

//Subtract 1 second from either workTime or breakTime every second. If the time in either runs out, flag values will be inverted.
setInterval(function() {
  if (workFlag) {
    workTime -= 1000;

    var minutes = Math.floor((workTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((workTime % (1000 * 60)) / 1000);

    document.getElementById("clock").innerHTML = minutes + " min " + seconds + " s";

    if (workTime < 0) {
      document.getElementById("clock").innerHTML = "5 min 0 s";
      workFlag = true;
      breakFlag = false;
    }
  }

  if (workFlag2){
    breakTime -= 1000;

    var minutes = Math.floor((breakTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((breakTime % (1000 * 60)) / 1000);

    document.getElementById("clock").innerHTML = minutes + " min " + seconds + " s";

    if (breakTime < 0) {
      refreshTime();
    }
  }
}, 1000);

//Resumes timer
function playTime() {
  if (workTime < 0) {
    breakFlag = true;
  } else {
    workFlag = true;
  }
}

//Pauses timer
function pauseTime() {
  if (workTime < 0) {
    breakFlag = false;
  } else {
    workFlag = false;
  }
}

//Resets timer
function refreshTime() {
  workFlag = false;
  workFlag = false;
  workTime = 25*60*1000;
  breakTime = 5*60*1000;
  document.getElementById("clock").innerHTML = "25 min 0 s";
}