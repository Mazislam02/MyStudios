// Slider Functionality
let currentIndex = 0;
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideImages.length;
    updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideImages.length) % slideImages.length;
    updateSlider();
});

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-change slide every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % slideImages.length;
    updateSlider();
}, 3000);

// MPG Calculator Functionality
function calculateMPG() {
    const milesTraveled = parseFloat(document.getElementById('miles').value);
    const gallonsOfGasUsed = parseFloat(document.getElementById('gallons').value);

    if (isNaN(milesTraveled) || isNaN(gallonsOfGasUsed) || gallonsOfGasUsed <= 0) {
        document.getElementById('result').innerText = "Please enter valid numbers for both fields.";
    } else {
        const milesPerGallon = milesTraveled / gallonsOfGasUsed;
        document.getElementById('result').innerText = `Your car's mileage is ${milesPerGallon.toFixed(2)} MPG.`;
    }
}
