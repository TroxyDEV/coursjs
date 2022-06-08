const btn = document.querySelector("button"); // J'appelle mon button et je le stock dans une constante btn
// function alerte() {
//   // Je créée une function nomée alerte() qui déclenche une alert('Coucou')
//   alert("Coucou");
// }
const alerte = () => {
  // Function fléchée
  alert("Coucou");
};

btn.addEventListener("click", alerte); // J'écoute ma constante btn au click et je déclenche ma function alerte
