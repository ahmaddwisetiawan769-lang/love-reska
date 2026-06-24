function loveMessage() {
    const messages = [
        "❤️ I Love You Reska ❤️",
        "💕 Kamu adalah alasan aku tersenyum setiap hari 💕",
        "💖 Terima kasih sudah hadir dalam hidupku 💖",
        "🌹 Aku sayang kamu, Reska 🌹",
        "✨ You are my favorite person ✨"
    ];

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    document.getElementById("message").innerHTML = randomMessage;
}

function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = "30px";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    let pos = window.innerHeight;

    const animation = setInterval(() => {
        pos -= 3;
        heart.style.top = pos + "px";

        if (pos < -50) {
            clearInterval(animation);
            heart.remove();
        }
    }, 20);
}

setInterval(createHeart, 300);
