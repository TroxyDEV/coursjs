var p = document.getElementById("firstP"); // Je recupere l'id de 'firstP' de mon document(html) et je la stock dans une var P
const body = document.getElementById("body"); // Je récupere mon body

body.appendChild(p); // Je met ma variable "p" comme enfant de mon body

body.removeChild(p); // Je remove ma variable 'p' comme enfant de mon body et !! il n'est pas possible de remove directement un enfant sans avoir séléctionnée sont parent !
console.log(p);
