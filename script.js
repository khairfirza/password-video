function checkCode() {
    const correctCode = "K2026"; // CHANGE THIS
    const videoURL = "https://youtu.be/WVskrZKq_r4?si=VFRIHOMosf-lnEsT";

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
