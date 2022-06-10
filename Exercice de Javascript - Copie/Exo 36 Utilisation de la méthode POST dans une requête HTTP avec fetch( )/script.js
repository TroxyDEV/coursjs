const newUser = {
  // Objet javascript
  name: "julien",
  prenom: "esnault",
  website: "https://github.com/TroxyDEV",
};

// console.log(newUser);

const promiseFetch = fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST", // Indiquer la methode d'envoie et ecrire en MAJ
  body: JSON.stringify(newUser), // Transforme mon objet JS en JSON avec la methode stringify et l'argument newUser pour indiqué quoi utilisée
  headers: {
    // Indique le type de contenu qu'il va recevoir
    "Content-Type": "application/json",
  },
});
// TOUJOURS verifier la console de chrome et allez dans le réseau pour verifier si l'envoie c'est bien fait
// SI Methode 201 = Reussi

promiseFetch.then((reponse) => {
  const dataUser = reponse.json();

  dataUser.then((userNew) => {
    console.log(userNew);
  });
});

// Done

// It is possible to do many other things with fetch and the APIs : https://jsonplaceholder.typicode.com/guide/

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8235432487mshd7c33e523eeb4ebp1b85ebjsn2ec58da4afc8",
    "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
  },
};

fetch(
  "https://community-open-weather-map.p.rapidapi.com/weather?q=Montreal%2Ccan&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
