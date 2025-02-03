window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const scrollPosition = window.scrollY;

    // Cambia la opacidad del fondo del nav y la altura
    if (scrollPosition > 0) {
        nav.style.height = '40px'; // Reduce la altura a la mitad
    } else {
        nav.style.height = '80px'; // Altura original
    }
});