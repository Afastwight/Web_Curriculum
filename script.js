document.addEventListener("DOMContentLoaded", function () {
    // Modo oscuro/claro toggle con almacenamiento en localStorage y cambio de fondo
    const modeToggle = document.getElementById("mode-toggle");
    const body = document.body;

    // Inicialmente establecer en modo claro
    if (!localStorage.getItem("dark-mode")) {
        localStorage.setItem("dark-mode", "disabled");
    }

    function updateTheme() {
        if (localStorage.getItem("dark-mode") === "enabled") {
            body.classList.add("dark-mode");
            body.style.backgroundImage = "url('codigo.jpg')";
            body.style.color = "#e0e0e0";
            modeToggle.textContent = "☀️";
            document.querySelectorAll(".header-title, .header-subtitle, .section-title, .section-text, .nav-link").forEach(el => {
                el.style.color = "#e0e0e0";
            });
        } else {
            body.classList.remove("dark-mode");
            body.style.backgroundImage = "url('blanco.jpg')";
            body.style.color = "#000";
            modeToggle.textContent = "🌙";
            document.querySelectorAll(".header-title, .header-subtitle, .section-title, .section-text").forEach(el => {
                el.style.color = "#000";
            });
        }
    }

    updateTheme();

    modeToggle.addEventListener("click", function () {
        if (localStorage.getItem("dark-mode") === "enabled") {
            localStorage.setItem("dark-mode", "disabled");
        } else {
            localStorage.setItem("dark-mode", "enabled");
        }
        updateTheme();
    });

    // Navegación activa al hacer scroll
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", function () {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });

    // Smooth scrolling al hacer clic en la navegación
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Botón de contacto flotante
    const contactButton = document.getElementById("contact-button");
    contactButton.addEventListener("click", function () {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });

    // Animaciones al hacer scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".section-container").forEach(section => {
        observer.observe(section);
    });

    // Efecto de escritura dinámica en el hero
    const typedText = document.querySelector(".hero-subtitle");
    const words = ["Ingeniero en Sistema de la Informacion", "Apasionado por la Tecnología"]; 
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typedText.textContent = currentWord.substring(0, letterIndex--);
        } else {
            typedText.textContent = currentWord.substring(0, letterIndex++);
        }

        if (!isDeleting && letterIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, 1000);
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(typeEffect, isDeleting ? 100 : 200);
    }
    typeEffect();

    // Añadir efecto de hover en las tarjetas de proyectos
    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("mouseenter", () => {
            project.classList.add("hover-effect");
        });
        project.addEventListener("mouseleave", () => {
            project.classList.remove("hover-effect");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill-item");

    // Lista de colores aleatorios para el hover
    const colors = ["#ff5733", "#33ff57", "#ff33a6", "#33a6ff", "#a633ff", "#ffc233"];

    skills.forEach(skill => {
        // Agrega efecto de color aleatorio al pasar el cursor
        skill.addEventListener("mouseenter", function () {
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.style.setProperty("--random-color", randomColor);
        });

        // Restablece el color original al salir
        skill.addEventListener("mouseleave", function () {
            this.style.background = "#007bff";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    // Detectar cuando un proyecto está en pantalla
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    projects.forEach((project, index) => {
        observer.observe(project);
        
        // Alternar entre animación de entrada izquierda y derecha
        if (index % 2 === 0) {
            project.style.animation = "fadeInLeft 0.8s ease-out";
        } else {
            project.style.animation = "fadeInRight 0.8s ease-out";
        }
    });

    // Efecto de zoom al pasar el cursor
    projects.forEach(project => {
        project.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
        });

        project.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const heroImg = document.querySelector(".hero-img");

    // Efecto de entrada con animación
    heroImg.style.opacity = "0";
    setTimeout(() => {
        heroImg.style.opacity = "1";
    }, 500);

    // Hover con cambio de color de borde
    heroImg.addEventListener("mouseenter", () => {
        heroImg.style.borderColor = "#f4d03f";
    });

    heroImg.addEventListener("mouseleave", () => {
        heroImg.style.borderColor = "rgba(255, 255, 255, 0.3)";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.getElementById("contact");

    // Efecto de entrada al hacer scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactSection.style.animation = "slideIn 1.2s ease-out forwards";
            }
        });
    }, { threshold: 0.3 });

    observer.observe(contactSection);
});


