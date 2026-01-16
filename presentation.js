// JavaScript for navigating between HTML slides using arrow keys

// List of slide file names
const slides = [
    "1.html",
    "2.html",
    "3.html",
    "4.html",
    "5.html",
    "6.html",
    "7.html",
    "8.html",
    "9.html",
    "10.html",
    "11.html",
    "12.html",
    "13.html",
    "14.html",
    "15.html",
    "16.html",
    "17.html",
    "18.html"
];

// Current slide index
let currentSlide = 0;

// Function to load a slide in the iframe
function loadSlide(index) {
    if (index >= 0 && index < slides.length) {
        const iframe = document.getElementById("slideFrame");
        iframe.src = slides[index];
    }
}

// Event listener for keydown events
function handleKeydown(event) {
    if (event.key === "ArrowRight") {
        // Go to the next slide
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            loadSlide(currentSlide);
        }
    } else if (event.key === "ArrowLeft") {
        // Go to the previous slide
        if (currentSlide > 0) {
            currentSlide--;
            loadSlide(currentSlide);
        }
    }
}

// Ensure the window always listens for keydown events
window.addEventListener("keydown", handleKeydown);

// Refocus the window when the iframe is clicked
const iframe = document.getElementById("slideFrame");
iframe.addEventListener("load", () => {
    iframe.contentWindow.addEventListener("click", () => {
        window.focus();
    });
});

// Load the first slide initially
loadSlide(currentSlide);