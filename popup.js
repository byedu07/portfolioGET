document.getElementById("diseno-web").addEventListener("click", function(event) {
    let popup = document.getElementById("popup");
    let body = document.body;

    // Si el popup ya está visible, lo cerramos
    if (popup.style.display === "block") {
        // Cerrar el popup
        popup.style.opacity = "0";
        popup.style.transform = "scale(0.5)";

        setTimeout(() => {
            popup.style.display = "none";
            body.classList.remove("blur-background"); // Eliminar el difuminado
        }, 400); // Tiempo suficiente para la animación
    } else {
        // Si el popup no está visible, lo abrimos
        // Obtener la posición del botón
        let buttonRect = event.target.getBoundingClientRect();

        // Calcular la posición de la esquina inferior izquierda del botón
        let leftPosition = buttonRect.left;
        let topPosition = buttonRect.top + buttonRect.height;

        // Posicionar el popup en la esquina inferior izquierda del botón
        popup.style.left = leftPosition + "px";
        popup.style.top = topPosition + "px";

        // Mostrar el popup pero con opacity 0 para que la animación se vea al aparecer
        popup.style.opacity = "0";
        popup.style.transform = "scale(0.5)";
        popup.style.display = "block";

        // Aplicar el filtro de difuminado al fondo
        body.classList.add("blur-background");

        // Añadir una pequeña pausa para que se vea la animación
        setTimeout(() => {
            popup.style.opacity = "1"; // Hacer visible el popup con opacidad
            popup.style.transform = "scale(1)"; // Escalar el popup a su tamaño completo
        }, 10);
    }
});

// Cerrar el popup con el botón de cerrar
document.getElementById("close-popup").addEventListener("click", function() {
    let popup = document.getElementById("popup");
    let body = document.body;

    popup.style.opacity = "0";
    popup.style.transform = "scale(0.5)";

    setTimeout(() => {
        popup.style.display = "none";
        body.classList.remove("blur-background"); // Eliminar el difuminado
    }, 400); // Tiempo suficiente para la animación
});

// Cerrar el popup al hacer scroll
window.addEventListener("scroll", function() {
    let popup = document.getElementById("popup");
    let body = document.body;

    if (popup.style.display === "block") {
        // Cerrar el popup si está visible
        popup.style.opacity = "0";
        popup.style.transform = "scale(0.5)";

        setTimeout(() => {
            popup.style.display = "none";
            body.classList.remove("blur-background"); // Eliminar el difuminado
        }, 400); // Tiempo suficiente para la animación
    }
});
