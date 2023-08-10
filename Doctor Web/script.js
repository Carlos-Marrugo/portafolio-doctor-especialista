document.addEventListener("DOMContentLoaded", function () {
    const scrollButtons = document.querySelectorAll(".scroll-button");
    
    scrollButtons.forEach(button => {
      button.addEventListener("click", (event) => {
        event.preventDefault(); // Evitar comportamiento por defecto del enlace
        
        const targetId = button.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });

// ... (otros códigos) ...

// Captura los formularios
const loginForm = document.querySelector('.login-form form');
const scheduleForm = document.querySelector('.schedule-form form');

// Agrega el evento para enviar el formulario de inicio de sesión
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Agrega aquí la lógica para procesar el formulario de inicio de sesión
  // Puedes verificar las credenciales y mostrar mensajes de éxito o error
});

// Agrega el evento para enviar el formulario de agendar cita
scheduleForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Agrega aquí la lógica para procesar el formulario de agendar cita
  // Puedes usar Fetch API o enviar los datos a un servidor
});

// ... (otros códigos) ...
