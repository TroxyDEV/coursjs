let userName = {
  // Objet avec des propriétés // key : valeur
  nom: "John",
  prenom: "Travolta",
  sex: "H",
  taille: 1.7,
  bonjour: function () {
    // Methode = une function qui execute une instruction
    // alert("Bonjour " + userName.nom + " " + userName.prenom); // J'éxecute alerte ( mauvaise maniere de faire)
    alert("Bonjour " + this.nom + " " + this.prenom); // Bonne maniere de faire car si j'ai plusieurs userName mon code ne va pas fonctionner
  },
};

console.log(userName); // J'appelle la variable userName
console.log(userName.nom); // J'appelle la propriété nom de ma variable userName
console.log(userName["sex"]); // Autre manière d'appeller une propriété de ma variable

userName.bonjour(); // Je déclenche la function
