const btn1 = document.getElementById("onclickbtn"); // Je récupere mes deux boutons et je les stocke dans une variable
const btn2 = document.getElementById("addeventlistenerbtn");

btn1.onclick = () => {
  // Fonction onclick sur ma variable qui déclenche une function fléchée anonyme
  console.log("loll");
  alert("Je maitrise la propriété onClick !"); // Je lance un pop-up
};

btn2.addEventListener("click", () => {
  // J'écoute mon évènement ciblé avec la propriété addeventlistener et je lui donne comme parametre "click" et je déclenche une function fléchée
  alert("Je maitrise la propriété addEventListener !");
});
