const diceContainer = document.getElementById("dice-container");
const numberOfDice = document.getElementById("number");
const rollBtn = document.getElementById("roll");
const resultDisplay = document.getElementById("result");
const totalDisplay = document.getElementById("total");
const counterDisplay = document.querySelector(".roll-counter");
const lastRoll = document.querySelector(".last-roll");

changeNumberOfDice();
let result = [];
let counter = 0;
let prevRoll = [];

rollBtn.addEventListener("click", () => {
  lastRoll.textContent = `Last roll results: ${prevRoll.join(", ")}`;

  counter++;
  counterDisplay.textContent = `Roll Counter: ${counter}`;
  result = [];
  dices = document.querySelectorAll(".dice");
  dices.forEach((dice) => {
    let random = randomizer();
    result.push(random);
    dice.setAttribute("src", `./images/${random}.png`);
  });
  resultDisplay.textContent = `Results: ${[...result].join(", ")}`;
  totalDisplay.textContent = `Total: ${sum(...result)}`;
  prevRoll = [...result];
});

numberOfDice.addEventListener("change", () => {
  diceContainer.innerHTML = "";
  changeNumberOfDice();
  resultDisplay.textContent = "Results:";
  totalDisplay.textContent = "Total:";
});

function randomizer() {
  let x = Math.floor(Math.random() * 6) + 1;
  return x;
}

function changeNumberOfDice() {
  for (let i = 1; i <= numberOfDice.value; i++) {
    const newDice = document.createElement("img");
    newDice.setAttribute("src", `./images/${numberOfDice.value}.png`);
    newDice.setAttribute("class", "dice");
    diceContainer.appendChild(newDice);
  }
}

function sum(...rest) {
  let x = rest.reduce((total, element) => total + element, 0);
  return x;
}
