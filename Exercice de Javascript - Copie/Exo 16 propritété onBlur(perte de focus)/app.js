const input = document.querySelector("#input"); // Je sélectionne l'id de mon champs de saisie et le stock dans une variable input

console.log(input); // Work / Test console log

input.onblur = () => {
  // Propriété onblur qui déclenche une function anonyme fléchée
  alert("test");
};

// Le onBlur est une perte de focus sur mon input il se déclenche par exemple quand, j'appuie sur tab ou je click autre part
