// Toggle pop-up on cat image click
document.getElementById('easter-egg').addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.classList.toggle('hidden');
});

// Make the ASCII art center on page load (if applicable)
window.onload = function() {
    const asciiArt = document.getElementById('ascii-art');
    
    if (asciiArt) { // Check if ASCII art exists
        asciiArt.style.whiteSpace = 'pre-wrap'; // Ensures it formats correctly
    }
};
