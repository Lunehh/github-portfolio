// Toggle pop-up on cat image click
document.getElementById('easter-egg').addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.classList.toggle('hidden');
});

window.onload = function() {
    const asciiArt = document.getElementById('ascii-art');
    
    if (asciiArt) { 
        asciiArt.style.whiteSpace = 'pre-wrap'; // Ensures it formats correctly
    }
};
