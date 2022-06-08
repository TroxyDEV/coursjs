const newPromise = new Promise((resolve, reject) => {
  resolve("promesse resolve");
  reject("promesse reject");
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
