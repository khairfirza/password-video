function checkCode() {
    const correctCode = "2580"; // CHANGE THIS
    const videoURL = "https://www.youtube.com/watch?v=YOUR_VIDEO_ID";

    const input = document.getElementById("codeInput").value;
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
