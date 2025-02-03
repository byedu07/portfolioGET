document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll("nav a");

    enlaces.forEach((enlace) => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault(); // Evita el comportamiento por defecto

            const destinoId = this.getAttribute("href").substring(1); // Obtiene el ID sin #
            const destino = document.getElementById(destinoId);

            if (destino) {
                window.scrollTo({
                    top: destino.offsetTop - 50, // Ajusta si hay un navbar fijo
                    behavior: "smooth", // Hace el scroll suave
                });
            }
        });
    });
});

