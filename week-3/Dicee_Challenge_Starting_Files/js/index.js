const playBtn = document.querySelector(".play-btn");

playBtn.addEventListener("click", play);

function play() {
  const randomNumber1 = Math.floor(Math.random() * 6 + 1);
  console.log(randomNumber1);

  const img1 = document.querySelector(".img1");
  img1.src = `images/dice${randomNumber1}.png`;

  const randomNumber2 = Math.floor(Math.random() * 6 + 1);
  console.log(randomNumber2);

  const img2 = document.querySelector(".img2");
  img2.src = `images/dice${randomNumber2}.png`;

  const heading = document.querySelector("h1");

  if (randomNumber1 > randomNumber2) {
    heading.innerText = "🚩 Player 1 wins";
  } else if (randomNumber1 < randomNumber2) {
    heading.innerText = "Player 2 wins 🚩";
  } else {
    heading.innerText = "Draw";
  }
}
