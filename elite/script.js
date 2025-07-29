window.addEventListener('DOMContentLoaded', () => {
  // Cargar Navbar
  if (document.getElementById('navbar-container')) {
    fetch('navbar.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
      });
  }

  // Cargar Footer
  if (document.getElementById('footer-container')) {
    fetch('footer.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('footer-container').innerHTML = data;
      });
  }

  // Cargar Banner
  if (document.getElementById('banner-container')) {
    fetch('banner.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('banner-container').innerHTML = data;
      });
  }

  // Animaciones de aparición
  const sections = document.querySelectorAll('.destacado');
  sections.forEach((sec, i) => {
    setTimeout(() => sec.classList.add('visible'), 300 * (i + 1));
  });

  // Activar animaciones al hacer scroll
  function activarAnimaciones() {
    const secciones = document.querySelectorAll(".animada");
    const trigger = window.innerHeight * 0.85;

    secciones.forEach((sec) => {
      const top = sec.getBoundingClientRect().top;
      if (top < trigger) {
        sec.classList.add("aparece");
      }
    });
  }

  window.addEventListener("scroll", activarAnimaciones);
  window.addEventListener("load", activarAnimaciones);

  // Animación especial para about.html
  if (window.location.pathname.includes("about.html")) {
    const fadeSection = document.querySelector('.fade-section');
    if (fadeSection) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            fadeSection.classList.add('show');
          }
        });
      }, { threshold: 0.3 });
      observer.observe(fadeSection);
    }
  }

  // Validación de formulario en contacto.html
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();
      const terminos = document.getElementById("terminos").checked;

      if (!nombre || !email || !telefono || !mensaje || !terminos) {
        alert("Por favor, completa todos los campos y acepta los términos.");
        return;
      }

      alert("Formulario enviado correctamente. ¡Gracias por registrarte!");
      this.reset();
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario-contacto");

  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      const telefonoInput = document.getElementById("telefono");
      const telefono = telefonoInput.value.trim();

      // Solo números, entre 7 y 15 dígitos
      const regexTelefono = /^[0-9]{7,15}$/;

      if (!regexTelefono.test(telefono)) {
        alert("Por favor ingresa un número de teléfono válido (solo dígitos, entre 7 y 15 caracteres).");
        telefonoInput.focus();
        e.preventDefault(); // Detiene el envío del formulario
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const carrusel = document.getElementById("carrusel3D");
  let isDragging = false;
  let startX;
  let currentRotation = 0;

  carrusel.parentElement.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    carrusel.style.animation = "none"; // detener giro automático
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    startX = e.clientX;
    currentRotation += delta * 0.5;
    carrusel.style.transform = `rotateY(${currentRotation}deg)`;
  });
});

});
