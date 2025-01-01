// Play music automatically when the page loads
const music = document.getElementById('background-music');

// Ensure music plays if the browser blocks autoplay
music.play().catch((error) => {
    console.log("Autoplay was blocked, playing on user interaction.");
});

// Toggle the popup when the paw icon is clicked
document.getElementById('easter-egg').addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.classList.toggle('hidden');
});
