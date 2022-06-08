const btnDelete = document.getElementById("btnDelete");
console.log(btnDelete);

// Je crée des données pour mon local storage

localStorage.setItem("prenom", "Julien"); // Je crée un item dans mon systeme local avec "clé/valeur" et je la stocke dans une var item1
localStorage.setItem("name", "Esnault");

// Je récupere mes données et les stock dans une constante
const username = localStorage.getItem("name");

console.log(username);
// Je supprime mes données en utilisant le localstorage clear
btnDelete.addEventListener("click", () => {
  localStorage.clear();
});
