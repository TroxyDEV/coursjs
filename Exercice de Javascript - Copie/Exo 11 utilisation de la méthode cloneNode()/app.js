const firstP = document.getElementById("firstP");
let clone = document.getElementById("clone");
const body = document.getElementById("body");
clone = firstP.cloneNode(true);
body.appendChild(clone);
