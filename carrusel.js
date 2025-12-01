function iniciarCarrusel(selector) {
    const root = document.querySelector(selector);
    const track = root.querySelector(".carousel-track");
    const slides = Array.from(root.querySelectorAll(".slide"));
    const nextBtn = root.querySelector(".next");
    const prevBtn = root.querySelector(".prev");
    const indicators = root.querySelector(".carousel-indicators");

    let index = 0;

    // Crear puntos
    slides.forEach((_, i) => {
        const dot = document.createElement("div");
        if (i === 0) dot.classList.add("active");
        indicators.appendChild(dot);

        dot.addEventListener("click", () => goToSlide(i));
    });

    const dots = indicators.children;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;

        [...dots].forEach(d => d.classList.remove("active"));
        dots[index].classList.add("active");
    }

    function goToSlide(i) {
        index = i;
        updateCarousel();
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    // AutoSlide
    setInterval(() => {
        index = (index + 1) % slides.length;
        updateCarousel();
    }, 3500);
}

// Iniciar el carrusel cuando la página carga
document.addEventListener("DOMContentLoaded", () => {
    iniciarCarrusel(".carousel");
});
