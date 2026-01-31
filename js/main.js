// Verificación de conexión
console.log('✅ JavaScript conectado correctamente');

// Mensaje de bienvenida temporal
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Quality Remodel - Sitio cargado');
    console.log('📁 Estructura lista para desarrollo');
});


const swiper = new Swiper(".mySwiper", {
    loop: true,               // Infinito
    autoplay: {
        delay: 6500,          // Cambia cada 3.5 segundos
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: "fade",           // Efecto elegante de desvanecido (opcional)
    fadeEffect: {
        crossFade: true
    },
});