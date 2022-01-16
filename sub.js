let events = [];

const addEvent = (ev) => {
  ev.preventDefault();
  let event = {
    task: document.getElementById("task").value,
    hours: parseInt(document.getElementById("h").value),
    minutes: parseInt(document.getElementById("min").value),
    seconds: parseInt(document.getElementById("sec").value),
  };
  events.push(event);
  document.forms[0].reset();

  let btn = document.createElement("button");
  
  btn.innerHTML = `${event.task} - ${event.hours}:${event.minutes}:${event.seconds}`;
  btn.setAttribute("class","timer");
  document.body.appendChild(btn);

  let timertext = document.createElement("p");
  timertext.setAttribute("class", "timertext");
  timertext.setAttribute("id", event.task);
  document.body.appendChild(timertext);
  /**
   *
   * @param {Number} time user specificed amount of time
   */
  function executeCycle(time) {
    const countdownEl = document.getElementById(event.task);

    function updateCountdown() {
      let curtime = time;
      let hrs = parseInt(curtime / (60 * 60));
      curtime = curtime % 3600;
      let mins = parseInt(curtime / 60);
      curtime = curtime % 60;
      let secs = curtime % 60;

      hrs = hrs < 10 ? "0" + hrs : hrs;
      mins = mins < 10 ? "0" + mins : mins;
      secs = secs < 10 ? "0" + secs : secs;

      if (time >= 0 ){
        console.log(time);
        countdownEl.innerHTML = `${hrs}:${mins}:${secs}`;
        time--;
      }
    }

    setInterval(updateCountdown, 1000);
  }

  btn.onclick = function () {
    executeCycle(event.hours * 3600 + event.minutes * 60 + event.seconds);
  };

  //for display purposes only
  console.warn("added", { events });
  let pre = document.querySelector("#msg pre");
  pre.textContent = "\n" + JSON.stringify(events, "\t", 2);

  //saving to localStorage
  localStorage.setItem("MyMovieList", JSON.stringify(events));
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", addEvent);
});

