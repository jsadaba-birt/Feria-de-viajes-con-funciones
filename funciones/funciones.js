// --------------------------
// Función para index.html
// --------------------------
function mostrarBienvenida() {
    // Solo si existe el elemento en la página
    const bienvenida = document.getElementById('bienvenida');
    if (!bienvenida) return;

    const mensaje = document.createElement('p');
    mensaje.textContent = "¡No olvides visitar los stands de nuestros expositores y participar en las actividades!";
    mensaje.style.fontWeight = 'bold';
    bienvenida.appendChild(mensaje);
}

// --------------------------
// Función para informacion.html
// --------------------------
function resaltarTabla() {
    const tabla = document.querySelector('table');
    if (tabla) {
        tabla.style.backgroundColor = '#f0f8ff';
        tabla.style.border = '2px solid #0077b6';
    }
}

// --------------------------
// Función para expositores.html
// --------------------------
function contarExpositores() {
    const lista = document.querySelectorAll('ol li');
    if (lista.length === 0) return;

    const contador = document.createElement('p');
    contador.textContent = `Número de expositores: ${lista.length}`;
    lista[lista.length - 1].after(contador);
}

// --------------------------
// Función para destinos.html
// --------------------------
function mostrarDestinoFavorito() {
    // Solo seleccionar listas de destinos
    const listas = document.querySelectorAll('ul.lista-destinos');
    if (listas.length === 0) return;

    listas.forEach((ul, i) => {
        const boton = document.createElement('button');
        boton.textContent = 'Marcar favorito';
        ul.after(boton);

        boton.addEventListener('click', () => {
            ul.style.backgroundColor = '#fff3bf';
            boton.textContent = 'Favorito ✔';
            boton.disabled = true;
            const seccion = i === 0 ? 'Internacional' : 'Nacional';
            alert(`Has marcado como favorito la sección ${seccion}`);
        });
    });
}


// --------------------------
// Función para contacto.html
// --------------------------
function validarFormulario(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos antes de enviar el formulario.');
        return false;
    }

    alert(`Gracias, ${nombre}. Tu mensaje ha sido enviado correctamente.`);
    return true;
}

// --------------------------
// Ejecutar funciones al cargar la página
// --------------------------
window.addEventListener('DOMContentLoaded', () => {
    mostrarBienvenida();
    resaltarTabla();
    contarExpositores();
    mostrarDestinoFavorito();
});
