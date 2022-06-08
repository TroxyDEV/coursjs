// I can use mouseOver in Js , HtML

const title = document.querySelector("h1");
console.log(title);

title.addEventListener("mouseover", () => {
  title.classList.add("bg");
});
title.addEventListener("mouseout", () => {
  title.classList.remove("bg");
  alert("Care i change color");
});
