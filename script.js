/* =================================
   MENÚ RESPONSIVE
================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* =================================
   CERRAR MENÚ AL SELECCIONAR
================================= */

const links = document.querySelectorAll(".nav-menu a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =================================
   MODO OSCURO
================================= */

const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkMode.textContent = "☀️";

    } else {

        darkMode.textContent = "🌙";

    }

});


/* =================================
   VALIDACIÓN DEL FORMULARIO
================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();


    /* Comprobar campos vacíos */

    if (nombre === "" || email === "" || mensaje === "") {

        formMessage.textContent =
            "Por favor, completa todos los campos.";

        formMessage.style.color = "#c9346e";

        return;

    }


    /* Validar correo */

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

        formMessage.textContent =
            "Por favor, escribe un correo electrónico válido.";

        formMessage.style.color = "#c9346e";

        return;

    }


    /* Mensaje exitoso */

    formMessage.textContent =
        "¡Mensaje enviado correctamente! Gracias por contactar a Rosé Beauty.";

    formMessage.style.color = "#23834a";


    /* Limpiar formulario */

    contactForm.reset();

});


/* =================================
   ANIMACIÓN AL HACER SCROLL
================================= */

const cards = document.querySelectorAll(
    ".portfolio-card, .service-card"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});