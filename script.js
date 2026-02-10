function nextPage() {
  document.getElementById("page1").classList.remove("active");
  document.getElementById("page2").classList.add("active");

  let song1 = document.getElementById("song1");
  let song2 = document.getElementById("song2");

  // stop page1 music
  song1.pause();
  song1.currentTime = 0;

  // start page2 music (allowed because Next button is user click)
  song2.play().catch(err => {
    console.log("Autoplay blocked:", err);
  });

  // reset slideshow
  box.innerHTML = "";
  index = 0;

  startSlideshow();
}

function toggleMusic(id) {
  let song = document.getElementById(id);
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
}

const promises = [
  "I promise to always hold your hand in every situation 🤝",
  "I promise to protect you like my own world ,like my Daughter 🛡️",
  "I promise to make you smile even on your worst days 😊",
  "I promise to never leave you alone in your tough times 💕",
  "I promise to respect your dreams and feelings 🌈",
  "I promise to fight the whole world for you ⚔️",
  "I promise to love you like my Wife till my last breath ❤️"
];

let box = document.getElementById("promises");
let index = 0;

function startSlideshow() {
  showPromiseSlide();
}

function showPromiseSlide() {
  let p = document.createElement("p");
  p.innerText = promises[index];
  box.appendChild(p);

  index++;
  if (index < promises.length) {
    setTimeout(showPromiseSlide, 2500);
  }
}

/* FLOATING HEARTS */
setInterval(() => {
  let heart = document.createElement("div");
  heart.innerText = "❤️";
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 800);
