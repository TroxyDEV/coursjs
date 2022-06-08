// Multiplier un tableau par 2;

const array = [1, 2, 3, 4, 5];

// var scalar = 2; Autre methode de faire
const doublearr = array.map((e) => e * 2);

console.log(doublearr);

// Exo 2

// Even = Paire
const evenArr = array.filter(function (x) {
  return x % 2 === 0;
});

console.log(evenArr);
// Odd = impaire
const oddArr = array.filter(function (x) {
  return x % 2 != 0;
});

console.log(oddArr);

//exo 3

const maxValueArr = Math.max.apply(null, array);

console.log(maxValueArr);

const minValueArr = Math.min.apply(null, array);

console.log(minValueArr);

// Exo 4 (Addtioner tout les éléments du tableaux)

const sumValueArr = array.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(sumValueArr);

//correction exo 4
const sumValueArrr = array.reduce((sum, e) => sum + e);
// Exo 5

const isOddValueArr = (e) => e % 2 != 0;
console.log(array.some(isOddValueArr));

// Exo 6
const userList = [
  { name: "john", gender: "m", salary: 24000 },
  { name: "jade", gender: "f", salary: 39000 },
  { name: "jonny", gender: "m", salary: 46000 },
  { name: "joris", gender: "m", salary: 35000 },
];
const userListMen = userList.filter((male) => male.gender === "m");
// console.log(userListMen);

userListMen.map((user) => {
  return {
    salary: (user.salary += 1000),
  };
});

userListMen.reduce((userList, mensalary) => userListMen + mensalary);

console.log(userListMen);

// Correction

const menSalaryTotal = userList
  .filter((user) => user.gender == "m") // Pour filter uniquement les hommes
  .map((user) => (user.salary += 1000)) // J'augmente tout les hommes de 1K €
  .reduce((menSalaryTotal, salary) => menSalaryTotal + salary);

console.log(menSalaryTotal);
