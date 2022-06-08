const myButton = document.querySelector("#btn1");

const title = document.querySelector("h1");

console.log(myButton);
console.log(title);

myButton.addEventListener("click", () => {
  title.classList.add("exercice");
});
