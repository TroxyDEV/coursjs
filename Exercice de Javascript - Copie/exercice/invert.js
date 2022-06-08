const paragraphe = document.getElementsByClassName("p"); // Je recupere la class p de mon body html
const allp = document.querySelectorAll("P"); // Je sélectionne tout les paragraphe de mon html et le stocke dans une const allp
let newelement = document.createElement("a"); // Je créée un nouvel élement "A"
newelement.setAttribute("href", "#"); // Je rajoute un attribut "href" et "#"
newelement.innerHTML = "Lire la suite du paragraphe"; // J'implente du HTML a mon élément
console.log(paragraphe);
console.log(allp);

paragraphe[0].appendChild(newelement); // J'ajotue comme enfant newelement a ma variable paragraphe[0] je sais quel est 0 grâce au console.log fait juste avant

newelement.setAttribute("class", "lien"); // J'ajoute un attribut pour qu'il est une classe que je definit dans mon css

function cachertexte() {
  for (let i = 0; i < allp.length; i++) {
    // J'itére tout mes paragraphes//
    if (i === 0) {
      // Si c'est le premier paragraphe je ne fait rien
      continue;
    } else if ((i) => 1) {
      // Sinon si c'est égale ou supérieur au premier paragraphe j'applique ma function
      allp[i].style.display = "none";
    }
  }
}

function apparaitretext() {
  // Je créee une function apparaitretext sans argument donc vide entre guillemet()
  for (let i = 0; i < allp.length; i++) {
    // J'itére(boucle) tout mes paragraphes
    allp[i].style.display = "block";
  }
  this.remove(); // Permet de remove l'élément
}

cachertexte();

// J'écoute newelement au click et je déclenche la function apparaitretext
newelement.addEventListener("click", apparaitretext);
