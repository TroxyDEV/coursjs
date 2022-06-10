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
    // Je repond au resolve("Succes") de mon api et je lui créée un argument "response" pour recuperer les données
    let data = response.json();
    // Je stock les donnée dans une variable data et transforme mon argument en json().
    data.then((userList) => {
      // Je résoud la promesse avec .then et lui passe un argument userList pour ensuite recupere les données
      console.log(userList[1]); // J'affiche index 1 de mon userlist
      // Je stock différente donnée dans des constantes
      const txtName = userList[1].name;
      const txtCompany = userList[1].company["name"];
      const txtCity = userList[1].address["city"];
      // J'ajoute a mes selecteur(span dans mon html) du text html
      // Je suis obliger de le faire depuis ma promesse car sinon probleme de scope
      userName.innerHTML = txtName;
      userCompany.innerHTML = txtCompany;
      userCity.innerHTML = txtCity;
    });
  })
  .catch((erreur) => {
    console.log("error");
  });
