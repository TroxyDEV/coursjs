const boiteaoutil = ["hache", "scie", "tractueur", "blablabla"]; // Quand type string ne pas oublier """
console.log(boiteaoutil);
console.log(boiteaoutil[3]); // Appeller un index précis de mon tableau

boiteaoutil[4] = "frigo"; // Rajouter a mon tableau une donnée

let need = () => {
  // Function fléchée anonyme
  alert("J'ai besoin de " + boiteaoutil[2]); // Alert avec un concaténation
};

// need(); // Je déclenche la function

console.log(boiteaoutil.length); // Connaitre le nombre d'entrée de mon tableau

boiteaoutil.sort(); // Classe les donnée de mon tableau par ordre alphabetique

console.log(boiteaoutil);
