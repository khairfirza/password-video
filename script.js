function checkCode() {
    const correctCode = "K2026";
    const videoURL = "https://www.youtube.com/watch?v=YOUR_VIDEO_ID";

    const input = document.getElementById("codeInput").value.toUpperCase();
    const message = document.getElementById("message");

    if (input === correctCode) {
        message.style.color = "lightgreen";
        message.textContent = "Correct! Opening video...";
        window.location.href = videoURL;
    } else {
        message.style.color = "red";
        message.textContent = "Try again";
    }
}
