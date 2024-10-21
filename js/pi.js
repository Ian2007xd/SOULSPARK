const frases = [
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    "No cuentes los días, haz que los días cuenten.",
    "La única manera de hacer un gran trabajo es amar lo que haces.",
    "Tu tiempo es limitado, no lo desperdicies viviendo la vida de alguien más.",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito."
];

let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
let fraseActual = '';

document.getElementById('generarFrase').addEventListener('click', generarFrase);
document.getElementById('verFavoritos').addEventListener('click', mostrarFavoritos);
document.getElementById('cerrarModal').addEventListener('click', cerrarModal);
document.getElementById('corazonAgregar').addEventListener('click', manejarFavoritos);

function generarFrase() {
    const randomIndex = Math.floor(Math.random() * frases.length);
    fraseActual = frases[randomIndex];
    document.getElementById('frase').innerText = fraseActual;
    document.getElementById('explicacion').innerText = "¡Haz clic en el corazón para agregar a favoritos!";
    
    // Cambiar el color del corazón a gris
    document.getElementById('corazonAgregar').style.color = 'grey';
}

function manejarFavoritos() {
    const corazon = document.getElementById('corazonAgregar');
    
    if (favoritos.includes(fraseActual)) {
        // Eliminar de favoritos
        favoritos = favoritos.filter(favorito => favorito !== fraseActual);
        corazon.style.color = 'grey'; // Cambiar a gris
    } else {
        // Agregar a favoritos
        favoritos.push(fraseActual);
        corazon.style.color = 'red'; // Cambiar a rojo
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

function mostrarFavoritos() {
    const listaFavoritos = document.getElementById('listaFavoritos');
    listaFavoritos.innerHTML = ''; // Limpiar la lista

    if (favoritos.length === 0) {
        listaFavoritos.innerHTML = '<li>No tienes favoritos.</li>';
    } else {
        favoritos.forEach((favorito, index) => {
            const li = document.createElement('li');
            li.textContent = favorito;
            
            const eliminarBtn = document.createElement('button');
            eliminarBtn.textContent = 'Eliminar';
            eliminarBtn.className = 'eliminar';
            eliminarBtn.addEventListener('click', () => {
                eliminarFavorito(index);
            });

            li.appendChild(eliminarBtn);
            listaFavoritos.appendChild(li);
        });
    }

    document.getElementById('modalFavoritos').style.display = 'flex'; // Mostrar el modal
}

function cerrarModal() {
    document.getElementById('modalFavoritos').style.display = 'none'; // Ocultar el modal
}

function eliminarFavorito(index) {
    const eliminado = favoritos.splice(index, 1)[0]; // Eliminar favorito
    localStorage.setItem('favoritos', JSON.stringify(favoritos));

    // Verificar si la frase eliminada es la que se está mostrando
    if (fraseActual === eliminado) {
        document.getElementById('corazonAgregar').style.color = 'grey'; // Cambiar a gris
    }

    mostrarFavoritos(); // Actualizar la lista de favoritos
}
