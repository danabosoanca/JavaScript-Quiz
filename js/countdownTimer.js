const startingMinutes = 15;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown-timer");
const quiz1 = document.getElementById("quiz");

myTimeout = setInterval(updateCountdown, 1000);
function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownEl.innerHTML = `${minutes} : ${seconds}`;
  time--;
  if (minutes < 1) {
    countdownEl.style.color = "red";
    countdownEl.style.fontSize = "clamp(3em, 2vw + 2em, 6em)";
  }
  if (minutes == 0 && seconds == 0) {
    quiz1.innerHTML = `
        <h2 class="total-score">Time is up.</h2>
        <button onclick="location.reload()" id="reload">Reload</button>
        `;
    clearInterval(myTimeout);
  }
}
