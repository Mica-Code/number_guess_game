let username = prompt("Enter Username");
let upperlimit = 2;
let lowerlimit = 1;
let stage = 1;

document.querySelector(".play").addEventListener("click", playGame);

function welcome() {
  document.querySelector(".welcome").textContent = "Welcome " + username;
}



function playGame() {

  let randomNum = Math.floor(Math.random() * upperlimit) + 1;
  let guessNum = Number(document.querySelector(".guessNum").value);

  if (guessNum === randomNum) {

    ++stage;
    ++upperlimit;
    document.querySelector(".stage").textContent = `Stage ${stage} (Guess a Number between 1 and ${upperlimit})`;

    document.querySelector(".result").style.color = "yellow";
    document.querySelector(".result").textContent = `CORRECT - Stage ${stage}`;


  }
  else {
    stage = 1;
    upperlimit = 2;
    document.querySelector(".stage").textContent = `Stage ${stage} (Guess a Number between 1 and ${upperlimit})`;
    document.querySelector(".result").style.color = "red";
    document.querySelector(".result").textContent = `WRONG - Game Over`;
  }


}
