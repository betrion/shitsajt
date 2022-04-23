let numBox = document.getElementById("guessNum");
let numOfTries = 1;
let gameWon = false;
let guessNumBtn = document
  .querySelector("#submitBtn")
  .addEventListener("click", () => {
    let resultBox = document.querySelector("#result");
    console.log(randomNum);
    if (numBox.value < randomNum) {
      resultBox.innerHTML = "traženi broj je manji od unešenog";
      numOfTries += 1;
    } else if (numBox > randomNum) {
      resultBox.innerHTML = "traženi broj je veći od unešenog";
      numOfTries += 1;
      console.log(numOfTries);
    } else {
      resultBox.innerHTML = `<strong>bravo, pogodili ste iz ${numOfTries}. puta</strong>`;
    }
  });
let randomNum = randomizeNumber();
console.log(randomNum);
function randomizeNumber() {
  return Math.floor(Math.random() * 100);
}
