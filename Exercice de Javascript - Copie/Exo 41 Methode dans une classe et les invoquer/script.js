// Definition d'une classe
class Livre {
  constructor(titre, author) {
    this.titre = titre;
    this.author = author;
  }
  affichage1() {
    console.log("Jai lu " + this.titre + " de " + this.author);
  }
  // Création d'un getter
  get titreAuthor() {
    return this.titre + " est de " + this.author;
  }
  // Création d'un setter

  set changeTitle(value) {
    this.titre = value;
  }
}
// Nouvelle instance de classe
let newBook = new Livre("La tour sombre", "Stephen");

console.log(newBook);

// SECOND

let secondBook = new Livre("Dark tower", "Moimm");
console.log(secondBook);

secondBook.changeTitle = "new title";

newBook.affichage1();

// Utilisation de getter
console.log(secondBook.titreAuthor);
