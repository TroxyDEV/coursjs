const text = document.getElementById("paragraphe"); // J'appelle mon élément span de mon html et je le stock dans une const text
const button = document.querySelector("button");

function showtext() {
  text.innerHTML = "John travolta"; // J'ajoute du html a mon élément
}

button.addEventListener("click", showtext);
