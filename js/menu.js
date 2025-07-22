document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  
  // Función para alternar el menú
  function toggleMenu() {
    menuToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
  }
  
  // Evento click para el botón de menú
  menuToggle.addEventListener('click', toggleMenu);
  
  // Cerrar el menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll('.navbar-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      navbarMenu.classList.remove('active');
    });
  });
  
  // Cerrar el menú al cambiar el tamaño de la ventana a un tamaño mayor
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      menuToggle.classList.remove('active');
      navbarMenu.classList.remove('active');
    }
  });
});