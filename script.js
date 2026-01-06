function checkCode() {
    const correctCode = "K2026";
    const videoURL = "https://youtu.be/Qz_YPmpfzjY?si=WsoVhtwGcE0B6D-8";

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
