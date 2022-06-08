const createElement = document.createElement("h1"); // Je créée l'élément qui va remplacer
createElement.innerHTML = "Le Javascript est tres difficile"; // Je lui ajoute du texte HTML
oldTitle = document.querySelector("h1"); // Je sélectionne mon ancien titre
// body.appendChild(oldTitle); // J'indique le parent de "oldTitle" // Not obligatoire

body.replaceChild(createElement, oldTitle); // Je remplace les deux éléments
