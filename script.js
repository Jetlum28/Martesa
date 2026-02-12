function openLetter() {
    document.getElementById("envelope").style.display = "none";
    document.getElementById("card").style.display = "block";
    document.getElementById("music").play();
}

const countdown = document.getElementById("countdown");
const weddingDate = new Date("July 7, 2026 18:00:00").getTime();

setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    countdown.innerHTML = "⏳ " + days + " ditë " + hours + " orë " + minutes + " minuta";
}, 1000);