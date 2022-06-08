// Selector

const launchBtn = document.getElementById("launchBtn");
const stopBtn = document.getElementById("stopBtn");

console.log(launchBtn);
console.log(stopBtn);
// Set timeout function

let timeoutID;

launchBtn.onclick = () => {
  timeoutID = window.setTimeout(consoleAlert, 1000);
};

function consoleAlert() {
  alert("It was long");
}

stopBtn.onclick = () => {
  window.clearTimeout(timeoutID);
};

// Set interval Function
let intervalID;

function intervalStart() {
  intervalID = window.setInterval(intervalAlert, 1000);
}

function intervalAlert() {
  console.log("blablabla");
}

function intervalStop() {
  window.clearInterval(intervalID);
}
