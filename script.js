// Play music automatically when the page loads
window.addEventListener("load", function() {
    const bgm = document.getElementById('bgm');
    
    // Attempt to play the audio
    bgm.play().catch(error => {
        console.log("Music failed to autoplay:", error);
        // Optionally unmute or provide a button to play if needed
        bgm.muted = false; // Uncomment if you want it to be unmuted on error
    });
 });
 
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
 