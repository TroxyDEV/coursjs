// Je crée des données pour mon local storage

localStorage.setItem("prenom", "Julien"); // Je crée un item dans mon systeme local avec "clé/valeur" et je la stocke dans une var item1
localStorage.setItem("name", "Esnault");

// Je récupere mes données
const username = localStorage.getItem("name");

console.log(username);
