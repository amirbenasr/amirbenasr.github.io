let soundBtn = document.getElementById("sound");
let paths = document.querySelector(".sound");
var audio = new Audio("web_vocal.wav");

const playSound = (e) => {
  paths.classList.add("playing");
  audio.play();
  audio.addEventListener("ended", () => {
    paths.classList.remove("playing");
  });
};

soundBtn.addEventListener("click", function (e) {
  playSound(e);
});

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style.color = "red";
    btn.innerText = "Under Dev";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.color = "white";
    btn.innerText = "Know more";
  });
});
