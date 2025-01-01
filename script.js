// Toggle pop-up on paw click
document.getElementById('easter-egg').addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.classList.toggle('hidden');
});

// Make the ASCII art center on page load
window.onload = function() {
    const asciiArt = document.getElementById('ascii-art');
    asciiArt.style.whiteSpace = 'pre-wrap'; // Ensures it formats correctly
};
