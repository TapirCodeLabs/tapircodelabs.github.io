// Detectar el idioma del navegador
function detectLanguage() {
  const userLang = navigator.language || navigator.userLanguage;
  return userLang.startsWith('es') ? 'es' : 'en';
}

// Establecer el idioma inicial
let currentLanguage = localStorage.getItem('preferredLanguage') || detectLanguage();
document.documentElement.lang = currentLanguage;

// Cambiar el idioma
function toggleLanguage() {
  currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
  localStorage.setItem('preferredLanguage', currentLanguage);
  document.documentElement.lang = currentLanguage;
  updateContent();
}

// Actualizar el contenido según el idioma
function updateContent() {
  const elements = document.querySelectorAll('[data-' + currentLanguage + ']');
  elements.forEach(element => {
    element.innerHTML = element.getAttribute('data-' + currentLanguage);
  });

  // Actualizar el texto del botón de cambio de idioma
  const langButton = document.querySelector('.language-switch');
  langButton.textContent = currentLanguage === 'es' ? 'EN' : 'ES';
}

// Inicializar el contenido con el idioma correcto
document.addEventListener('DOMContentLoaded', function() {
  updateContent();
});