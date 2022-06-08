const myUser = fetch("https://jsonplaceholder.typicode.com/users/1");
// Je stocke ma requete api dans une const qui retourne une promesse

myUser.then((response) => {
  // Je
  console.log(response);
});
