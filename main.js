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

// Calculator Functionality
function calculateMPG() {
    const miles = parseFloat(document.getElementById('miles').value);
    const gallons = parseFloat(document.getElementById('gallons').value);

    if (!isNaN(miles) && !isNaN(gallons) && gallons !== 0) {
        const mpg = miles / gallons;
        document.getElementById('result').innerText = `Your car's mileage is ${mpg.toFixed(2)} MPG.`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
    }
}
