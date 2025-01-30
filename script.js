let currentIndex = 0;
const slides = document.querySelectorAll(".mySlides");
const slideContainer = document.querySelector(".slide-container");
const totalSlides = slides.length;
const visibleSlides = 3;

function plusDivs(n) {
    currentIndex += n;
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalSlides - visibleSlides) {
        currentIndex = totalSlides - visibleSlides;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    slideContainer.style.marginLeft = `${-currentIndex * (100 / visibleSlides)}%`;
}

