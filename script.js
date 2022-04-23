let numBox = document.getElementById("guessNum");
let numOfTries = 1;
let gameWon = false;
let randomNum = randomizeNumber();

let guessNumBtn = document
  .querySelector("#submitBtn")
  .addEventListener("click", () => {
    let resultBox = document.querySelector("#result");
    console.log(randomNum);
    if (numBox.value < randomNum) {
      resultBox.innerHTML = "Unešeni broj je manji od traženog";
      numOfTries += 1;
    } else if (numBox.value > randomNum) {
      resultBox.innerHTML = "Unešeni broj je veći od traženog";
      numOfTries += 1;
      console.log(numOfTries);
    } else {
      resultBox.innerHTML = `<strong>bravo, pogodili ste iz ${numOfTries}. puta</strong>`;
    }
  });
numBox.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    document.querySelector("#submitBtn").click();
  }
});
console.log(randomNum);
function randomizeNumber() {
  return Math.floor(Math.random() * 100);
}
