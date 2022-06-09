const promise01 = fetch("https://jsonplaceholder.typicode.com/users/");
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

promise01
  .then((response) => {
    let data = response.json();
    data.then((userList) => {
      let companyUser = userList[1].company;
      console.log(userList[1]);
      console.log(userList[1].email);
      console.log(userList[1].address);
      console.log(companyUser);
      console.log(userList[1].address["city"]);
    });
  })
  .catch((erreur) => {
    console.log("error");
  });
