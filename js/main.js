let currentIndex = 0;
const slides = document.querySelectorAll('.carousel img');
const intervalTime = 3000; // Set the interval time in milliseconds (e.g., 3000ms = 3 seconds)
let slideInterval;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    }

    const translateX = -currentIndex * (100 / 3);
    document.querySelector('.carousel').style.transition = 'transform 0.5s ease';
    document.querySelector('.carousel').style.transform = `translateX(${translateX}%)`;
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, intervalTime);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Start the slideshow when the page loads
startSlideShow();

// Pause the slideshow on hover
document.querySelector('.carousel-container').addEventListener('mouseover', stopSlideShow);

// Resume the slideshow on mouseout
document.querySelector('.carousel-container').addEventListener('mouseout', startSlideShow);

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');

    menuButton.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});