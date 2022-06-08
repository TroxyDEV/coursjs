const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Je créée un timer de 5000ms avant d'executer la function callback
    resolve("promesse resolve");
  }, 5000);

  // reject("promesse reject");
});

console.log(newPromise);

newPromise.then((succes) => {
  // If my promesse are resolve
  console.log("blablabla");
});

newPromise.catch((error) => {
  // If my promise are reject then i catch the error
  console.log("blblblblbl");
});
