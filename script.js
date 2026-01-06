function checkCode() {
    const correctCode = "K2026";
    const videoURL = "https://youtu.be/4VoG45v8WRY";

    const input = document.getElementById("codeInput");
    const message = document.getElementById("message");
    const correctSound = document.getElementById("correctSound");
    const wrongSound = document.getElementById("wrongSound");

    const value = input.value.trim().toUpperCase();

    if (value === correctCode) {
        message.style.color = "lightgreen";
        message.textContent = "Correct! Opening video...";
        if (correctSound) correctSound.play();

        setTimeout(() => {
            window.location.href = videoURL;
        }, 800);

    } else {
        message.style.color = "red";
        message.textContent = "Try again";

        if (wrongSound) wrongSound.play();

        input.classList.add("shake");
        setTimeout(() => {
            input.classList.remove("shake");
        }, 400);
    }
}
