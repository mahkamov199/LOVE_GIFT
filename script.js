const gift = document.getElementById("gift");
const button = document.getElementById("openGift");

const envelopeArea = document.getElementById("envelopeArea");
const envelope = document.getElementById("envelope");

button.addEventListener("click", function() {

    gift.textContent = "💝";

    envelopeArea.classList.add("show");

    button.textContent = "Konvert tayyor ❤️";

    button.disabled = true;

});

envelope.addEventListener("click", function() {

    envelope.classList.toggle("open");

});
function createHeart() {
    const heart = document.createElement("div");

    heart.textContent = "❤️";
    heart.className = "floating-heart";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 600);