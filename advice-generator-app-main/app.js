const resultDiv = document.getElementById("#results"); // Div HTML des retours de l'api
const btn = document.getElementById("generate");
const idLink = document.getElementById("#idlink");

btn.addEventListener("click", () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};

function getAdvice() {
  fetch("	https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const Adviceobj = adviceData.slip;
      console.log(Adviceobj);
      resultDiv.innerHTML = `<p id = "Advice"> " ${Adviceobj.advice} " <span id = "id"> ADVICE #${Adviceobj.id} </span> </p>`;
    })
    .catch((error) => {
      console.log("error");
    });
}
