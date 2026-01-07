const correctCode = "K2026";
const videoId = "Qz_YPmpfzjY"; // CHANGE IF NEEDED

/* AUDIO */
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");


/* CHECK CODE */
function checkCode() {
  const input = document.getElementById("codeInput").value.toUpperCase();
  const message = document.getElementById("message");
  const card = document.getElementById("card");

  if (input === correctCode) {
    correctSound.play();
    message.style.color = "lightgreen";
    message.textContent = "CORRECT!";
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
