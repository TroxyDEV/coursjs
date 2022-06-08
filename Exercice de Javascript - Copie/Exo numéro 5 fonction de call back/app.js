function salutation(nom) {
  // Je créee une function salutation ayant comme parametre un nom
  alert("Salutation " + nom); // La function déclenche une alert + le parametre nom, pas définit
}

function donneeVisiteur(callback) {
  // Je crée une function donée visiteur ayant une autre function en parametre "callback"
  var nomInput = prompt("Entrez votre nom"); // Je crée une prompt(pop up avec chaine de caractere) et la stock dans une variable nomInput
  callback(nomInput); // Callback est une fonction qui rappelle la function no
}
donneeVisiteur(salutation);
