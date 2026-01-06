const correctCode = "K2026";

/* ===== TIMER 5:30 ===== */
let timeLeft = 5 * 60 + 30;
const timeDisplay = document.getElementById("time");

const timerInterval = setInterval(() => {
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    document.getElementById("message").textContent = "Time is up!";
    return;
  }

  timeLeft--;

  const min = Math.floor(timeLeft / 60);
  const sec = timeLeft % 60;

  timeDisplay.textContent =
    `${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`;
}, 1000);

/* ===== CHECK CODE ===== */
function checkCode() {
  const input = document.getElementById("codeInput").value.toUpperCase();
  const message = document.getElementById("message");
  const card = document.getElementById("card");

  if (input === correctCode) {
    message.style.color = "lightgreen";
    message.textContent = "Correct!";
    clearInterval(timerInterval);
    setTimeout(playVideo, 600);
  } else {
    message.style.color = "red";
    message.textContent = "Wrong code";
    card.classList.add("shake");
    setTimeout(() => card.classList.remove("shake"), 400);
  }
}

/* ===== PLAY VIDEO FULLSCREEN ===== */
function playVideo() {
  const vc = document.getElementById("videoContainer");
  const video = document.getElementById("video");

  document.getElementById("card").style.display = "none";
  vc.style.display = "block";

  video.play();

  if (video.requestFullscreen) video.requestFullscreen();
  else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
}
