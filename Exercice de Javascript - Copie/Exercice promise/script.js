const promesse = new Promise((resolve, reject) => {
  resolve(565662342);
  reject(125315351253);
});

promesse.then((val) => console.log("Le resolve a une valeur de", val));

promesse.catch((val) => console.log("La valeur rejeté est de", val));

// Exercice 1

const promise = new Promise((resolve, reject) => {
  resolve(3);
  reject("Boo !");
});

promise.then((val) => console.log(val));
promise.catch((val) => console.log(val));

// Exercice 2

let itShouldResolve = false;

const makePromiseWithConstructor = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (itShouldResolve == true) {
      resolve("Complete");
    } else {
      reject("Rejected");
    }
  }, 5000);
});

makePromiseWithConstructor.then((val) => console.log(val));
makePromiseWithConstructor.catch((val) => console.log(val));
