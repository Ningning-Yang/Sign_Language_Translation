document.getElementById("reset").onclick = function(){
var hrsinp = prompt("How long, in hours, do you want to countdown on?", 1);
var minsinp = prompt("How long, in minutes, do you want to countdown on?", 1);
var secsinp = prompt("How long, in seconds, do you want to countdown on?", 1);
var hrs = parseInt(hrsinp);
var mins = parseInt(minsinp);
var secs = parseInt(secsinp);
}


const events = [
  {
    name: "comp202 study",
    timerDuration: 2 * 3600,
  },
  { name: "comp250 study", timerDuration: 4 * 3600 },
];

if (!localStorage.getItem("events")) {
  localStorage.setItem("events", JSON.stringify(events));
  // allow user to create event (oh first time visiting our site)
} else {
  localStorage.getItem("events");
}

let time = hrs * 60 * 60 + mins * 60 + secs;

const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  let curTime = time;
  const hours = parseInt(curTime / (60 * 60));
  curTime = curTime % 3600;

  let minutes = parseInt(curTime / 60);
  curTime = curTime % 60;

  let seconds = curTime % 60;
  /*
    if (minutes == 60){
        minutes = '00';
    }
    if (seconds < 10){
        seconds = '0' + seconds;
    }*/
  //   minutes = minutes == 60 ? "00" : minutes;
  //   seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${hours}:${
    minutes >= 10 ? `${minutes}` : `0${minutes}`
  }:${seconds}`;
  time--;
}
