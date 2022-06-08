const introduction = document.getElementById("intro"); // Je récupere mon ID intro et je la stocke dans une const "introduction"
const title = document.createElement("h1"); // Je crée un element avec TAGname "h1"
title.innerHTML = "blablabla"; // J'ajoute de L'html a ma constante title
var addElement = introduction.appendChild(title); // Je met comme enfant title a ma const introduction et la stock dans une variable newElement

// Paragraphe

const firstP = document.createElement("p"); // Je créee un élément P (paragraphe) et la stocke dans une const "firstP"

const textP = document.createTextNode(
  // Je créée une nodeText et la stocke dans une const textP
  "Apprentissage du language le plus populaire au monde Javascript"
);

firstP.appendChild(textP); // ma constante textP est un enfant de ma constante firstP

const placefirstP = document.getElementById("paragraphe").appendChild(firstP); // Nous pouvons ajouter deux methode d'affiler sur la même constante ou ligne de code
