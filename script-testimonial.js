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
        1200: {
            slidesPerView: 4, // Muestra cuatro imágenes a la vez
        },
    },
});




document.addEventListener('DOMContentLoaded', function() {
    // Función para centrar los íconos
    function centerIcons() {
        const icons = document.querySelectorAll('.icon1');
        icons.forEach(icon => {
            const container = icon.parentElement;
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;

            // Ajuste del tamaño del ícono si es necesario
            icon.style.fontSize = `${containerWidth * 0.6}px`; // Ajustar el tamaño del ícono basado en el tamaño del contenedor

            // Centrar el ícono vertical y horizontalmente
            icon.style.lineHeight = `${containerHeight}px`; // Igualar el line-height al alto del contenedor
        });
    }

    // Ejecutar la función al cargar la página
    centerIcons();

    // Ejecutar la función al redimensionar la ventana
    window.addEventListener('resize', centerIcons);
});

