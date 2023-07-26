const clock = document.querySelector("#clock");
const clockFix = document.querySelector("#clockFix");

function timeStart() {
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, 0);
  const minutes = String(time.getMinutes()).padStart(2, 0);
  const seconds = String(time.getSeconds()).padStart(2, 0);

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

timeStart();
setInterval(timeStart, 1000);

function timeStartFix() {
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, 0);
  const minutes = String(time.getMinutes()).padStart(2, 0);

  clockFix.innerText = `${hours}:${minutes}:${seconds}`;
}

timeStartFix();
