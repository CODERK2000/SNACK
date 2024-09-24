// Inicializar Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Muestra una imagen a la vez
    spaceBetween: 10, // Espacio entre las imágenes
    autoplay: {
        delay: 3000, // Tiempo en ms entre cambios de imagen (3 segundos)
        disableOnInteraction: false, // Mantiene el autoplay si el usuario interactúa
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // Ajustes para pantallas grandes
        700: {
            slidesPerView: 3, // Muestra tres imágenes a la vez
        },
        // Ajustes para pantallas medianas
        450: {
            slidesPerView: 2, // Muestra dos imágenes a la vez
        },
    },
    on: {
        // Evento para aplicar zoom a la imagen activa
        slideChangeTransitionStart: function () {
            const slides = document.querySelectorAll('.swiper-slide img');
            slides.forEach((slide) => {
                slide.classList.remove('active'); // Remueve la clase 'active' de todas las imágenes
            });
            const activeSlide = document.querySelector('.swiper-slide-active img');
            if (activeSlide) {
                activeSlide.classList.add('active'); // Añade la clase 'active' a la imagen central
            }
        },
    },
});


function adjustImageSize() {
    const image = document.getElementById('about-image');

    if (window.innerWidth >= 1200) {
        // Tamaño para pantallas grandes
        image.style.width = '100px';
        image.style.height = '100px';
    } else if (window.innerWidth >= 768) {
        // Tamaño para pantallas medianas
        image.style.width = '80px';
        image.style.height = '80px';
    } else {
        // Tamaño para pantallas pequeñas
        image.style.width = '60px';
        image.style.height = '60px';
    }
}

// Ajustar tamaño de la imagen al cargar la página y al redimensionar la ventana
window.addEventListener('load', adjustImageSize);
window.addEventListener('resize', adjustImageSize);

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    const extraFaqItems = document.querySelectorAll('.extra-faq');
    const toggleButton = document.getElementById('toggle-faq');

    // Show only the first 3 FAQ items initially
    extraFaqItems.forEach(item => item.style.display = 'none');

    faqItems.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isVisible = answer.style.display === 'block';
            
            // Close other open answers
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').style.display = 'none';
                }
            });
            
            // Toggle the clicked answer
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });

    // Toggle visibility of additional FAQ items
    toggleButton.addEventListener('click', function() {
        const currentlyVisible = Array.from(extraFaqItems).some(item => item.style.display === 'block');
        if (currentlyVisible) {
            extraFaqItems.forEach(item => {
                item.style.display = 'none';
                item.style.maxHeight = '0';
                item.style.opacity = '0';
            });
            this.textContent = 'Mostrar Más';
        } else {
            extraFaqItems.forEach(item => {
                item.style.display = 'block';
                item.style.maxHeight = '100px'; // Adjust as needed
                item.style.opacity = '1';
            });
            this.textContent = 'Mostrar Menos';
        }
    });
});






document.getElementById('menu-toggle').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
});


