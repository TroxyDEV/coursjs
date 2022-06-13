// Créee un objet simple avec une key/value

const firstObject = {
  name: "Julien",
};

// Ajouter une valeur a mon objet

firstObject.age = 10;

// Autre maniere d'ajouter un objet

firstObject["Adresse"] = "Rue des rues";
console.log(firstObject);

//

const promise1 = fetch("https://jsonplaceholder.typicode.com/users/");

promise1.then(async (response) => {
  const data = await response.json();

  console.log(Object.values(data)); // Object.values() renvoie un tableau contenant les valeurs des propriétés
  console.log(Object.entries(data)); // renvoie un tableau des propriétés propres énumérables
  console.log(Object.getOwnPropertyNames(data)); // object.getOwnPropertyNames() renvoie un tableau de toutes les propriétés
  // Object.getOwnPropertyDescriptor() renvoie un descripteur de la propriété propre d'un objet
  const descriptor1 = Object.getOwnPropertyDescriptor(data[2], "name");
  console.log(descriptor1);

  data[2].name = "test"; // Change a property

  console.log(data[2].name);
});
