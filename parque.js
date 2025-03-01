let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.style.display = 'none';
    });

 
    slides[slideIndex].style.display = 'block';
}


function moveSlide(n) {
    slideIndex += n;
    showSlides();
}

showSlides();

setInterval(() => {
    slideIndex++;
    showSlides();
}, 5000);

