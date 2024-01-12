// Awesome Increase Numbder & Proggres Animation

let statsNums = document.querySelectorAll(".number");
let statsSection = document.getElementById("awesome");
let skillsSection = document.querySelector("#skills");
let skillsProg = document.querySelectorAll(".prog span");
let started = false;
console.log(statsSection);
window.onscroll = function () {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      statsNums.forEach((num) => startCount(num));
    }
    started = true;
  }
  if (window.scrollY >= skillsSection.offsetTop) {
    skillsProg.forEach((span) => {
      span.style.width = span.dataset.proggres;
    });
  }
};
function startCount(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}

// Event Section Count Down
// The End Of The Year

let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();
  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;
  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if ((dateDiff = 0)) {
    clearInterval(counter);
  }
}, 1000);
