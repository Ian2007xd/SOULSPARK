// Función para redirigir a otras secciones
function goToSection(url) {
    window.location.href = url;
  }
  
  // Mostrar el contenido principal después de la animación
  window.onload = function () {
    setTimeout(function() {
      document.getElementById('intro-animation').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
    }, 3000); // 3 segundos para la animación
  };
  