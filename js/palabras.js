const meanings = {
    'INVESTIGACION': 'La investigación es el impulso innato de la humanidad por buscar la verdad...',
    'VOLUNTAD': 'La voluntad es el poder invisible que nos hace levantarnos...',
    'COOPERACION': 'La cooperación es la danza armónica entre seres humanos...',
    'CINCERIDAD': 'La sinceridad es el acto de mostrarnos tal como somos...',
    'CONSTANCIA': 'La constancia es el hábito de continuar...',
    'COMPANEDISMO': 'El compañerismo es la presencia de un alma que camina a tu lado...',
    'AHORRO': 'El ahorro es el arte de pensar en el futuro...',
    'ECOFILIA': 'La ecofilia es la conexión profunda y amorosa con la naturaleza...',
    'RESPONSABILIDAD': 'La responsabilidad es el acto de tomar las riendas de nuestras acciones...',
    'ESFUERZO': 'El esfuerzo es el combustible que transforma los sueños en realidad...',
    // Si no hay significado de una palabra, se mostrará un mensaje genérico
  };

  function showMeaning(word) {
    const meaningText = meanings[word] || 'Significado no encontrado';
    const meaningTitle = document.getElementById('meaning-title');
  
    // Actualiza el título con la palabra seleccionada
    meaningTitle.innerText = word ? `${word}` : 'Significado';
  
    // Actualiza el texto del significado
    document.getElementById('meaning-text').innerText = meaningText;
  }
  
  
  function filterWords() {
    const input = document.getElementById('search-box').value.toUpperCase();
    const select = document.getElementById('word-select');
    const options = select.getElementsByTagName('option');
    let found = false;
  
    for (let i = 0; i < options.length; i++) { // Comienza en 1 para ignorar el primer elemento "Selecciona una palabra"
      const txtValue = options[i].textContent || options[i].innerText;
      if (txtValue.toUpperCase().indexOf(input) > -1) {
        options[i].style.display = "";
        found = true;
      } else {
        options[i].style.display = "none";
      }
    }
  
    if (!found && input !== "") {
      document.getElementById('meaning-text').innerHTML = 'Palabra no encontrada<span class="sad-face">😔</span>';
    } else if (!found && input === "") {
      document.getElementById('meaning-text').innerText = 'Selecciona una palabra para ver su significado filosófico y reflexionar desde una perspectiva distinta.';
    }
  }
  