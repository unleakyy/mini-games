const guessGame = document.getElementById("guessGame");
const darkMagicChallenge = document.getElementById("darkMagicChallenge");
const diceRoll = document.getElementById("diceRoll");

darkMagicChallenge.addEventListener("click", () => {
  // window.location.href = './dark-magic/magic.html';
});

guessGame.addEventListener("click", () => {
  window.location.href = "./guess-game/guess1/guess1.html";
});

diceRoll.addEventListener("click", () => {
  window.location.href = "./dice-roll/dice-roll.html";
});
