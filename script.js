const correctCode = "K2026";
const videoId = "Qz_YPmpfzjY"; // CHANGE IF NEEDED

/* AUDIO */
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");

/* TIMER 5:30 */
let timeLeft = 5 * 60 + 30;
const timeDisplay = document.getElementById("time");

const timer = setInterval(() => {
  if (timeLeft <= 0) {
    clearInterval(timer);
    document.getElementById("message").textContent = "TIME IS UP!";
    return;
  }

  timeLeft--;
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;

  timeDisplay.textContent =
    `${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`;
}, 1000);

/* CHECK CODE */
function checkCode() {
  const input = document.getElementById("codeInput").value.toUpperCase();
  const message = document.getElementById("message");
  const card = document.getElementById("card");

  if (input === correctCode) {
    correctSound.play();
    message.style.color = "lightgreen";
    message.textContent = "CORRECT!";
    clearInterval(timer);
    setTimeout(playYouTube, 800);
  } else {
    wrongSound.play();
    message.style.color = "red";
    message.textContent = "WRONG CODE";
    card.classList.add("shake");
    setTimeout(() => card.classList.remove("shake"), 400);
  }
}

/* PLAY YOUTUBE FULLSCREEN */
function playYouTube() {
  const container = document.getElementById("videoContainer");
  const iframe = document.getElementById("ytPlayer");

  document.getElementById("card").style.display = "none";
  container.style.display = "block";

  iframe.src =
    `https://www.youtube.com/embed/${videoId}` +
    `?autoplay=1&mute=0&controls=0&rel=0&playsinline=0`;

  if (container.requestFullscreen) container.requestFullscreen();
  else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
}
