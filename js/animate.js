// Inicializar AOS
  AOS.init({
    duration: 1000,  // Duración de la animación (en milisegundos)
    once: true,      // Si es 'true', la animación se ejecuta solo una vez cuando el elemento entra en pantalla
  });




// Selecciona todos los elementos que quieras animar
  const elements = document.querySelectorAll('.fade-in-up');

  // Crea un observador de intersección
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Cuando el elemento es visible en pantalla, agrega la clase para animarlo
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 // Activar la animación cuando el 50% del elemento sea visible
  });

  // Observa cada elemento
  elements.forEach(element => {
    observer.observe(element);
  });




  document.addEventListener('DOMContentLoaded', function() {
    // Obtén todas las palabras con la clase "color-change"
    const words = document.querySelectorAll('.color-change');
    let index = 0;

    // Función para cambiar el color
    function changeColor() {
        // Elimina la clase de color de la palabra actual
        words.forEach(word => word.classList.remove('highlight'));

        // Agrega la clase de color a la siguiente palabra
        words[index].classList.add('highlight');
        
        // Avanza al siguiente índice (circular)
        index = (index + 1) % words.length;
    }

    // Cambia el color cada 1 segundo (1000 ms)
    setInterval(changeColor, 1000);
});


// Función para contar desde el número actual hasta el número objetivo
  function animateNumber(element, target) {
    let count = parseInt(element.textContent); // Obtiene el número inicial
    const interval = setInterval(() => {
      count += 1;  // Incrementa el número en 1
      element.textContent = count;  // Actualiza el contenido del <h1>
      if (count === target) {
        clearInterval(interval);  // Detiene la animación cuando llega al número objetivo
      }
    }, 1900);  // Controla la velocidad de incremento (10ms por incremento)
  }

  // Detectar cuando los elementos se encuentran en la vista
  document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter');
    
    // Usamos el Intersection Observer para detectar cuando los elementos entran en la vista
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target.getAttribute('data-target');  // Obtiene el número objetivo
          animateNumber(entry.target, parseInt(target));  // Llama a la función para animar el número
          observer.unobserve(entry.target);  // Deja de observar el elemento después de que la animación comience
        }
      });
    }, { threshold: 0.5 }); // Inicia la animación cuando el 50% del elemento es visible

    // Observa todos los elementos con la clase 'counter'
    counters.forEach(counter => observer.observe(counter));
  });






