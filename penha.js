let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Esconde todas as imagens
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Exibe a imagem atual
    slides[slideIndex].style.display = 'block';
}

// Função para navegar entre as imagens
function moveSlide(n) {
    slideIndex += n;
    showSlides();
}

// Inicializar o slider
showSlides();


