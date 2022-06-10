// Créee le then avec un argumetn callback (response) ? DONE
// Créee a la suite du then une function callback catch avec comme arguement erreur ? done
// Dans ma promesse then je rajoute une variable data qui est égale a une reponse(promesse) et je la convertir pour convertir mes valeurs en json()
// J'applique .then a ma promesse avec une fonction fléchée callback avec un argument "userList", done
// Console log l'argument userlist de ma data en sélectionant l'index 1, done
// Utiliser la key email , done
// Recupere l'adresse de mon user et sa ville
// Naviguer dans les données de l'api , done
// Stocker l'adresse de l'utilisateur dans une variable , done
// Afficher l'adresse de mon utilisateur sur mon html
// (Tout les commentaires ne sont plus valable pour cette exo voir celui d'avant si besoind de rappel)

//Selector
// Je selectionne les spans de mon html
let userName = document.querySelector("#userName");
let userCompany = document.querySelector("#userCompany");
let userCity = document.querySelector("#userCity");

const promise01 = fetch("https://jsonplaceholder.typicode.com/users/"); // Je recupere mon api et les données souhaité
promise01
  .then((response) => {
    const data = response.text(); // Je recupere ma promesse en format texte et non en JSON
    data.then((userlist) => {
      console.log(userlist);

      // Ican use json.parse() and put my const in argument for transform my reponse text in JSON but its useless i can use directly json
    });
  })

  .catch((erreur) => {
    console.log("error");
  });
