document.getElementById('vamosBtn').addEventListener('click', function() {
    var nombre = document.getElementById('nombreInput').value;
    var mensaje = document.getElementById('mensajeInput').value;
    
    if (nombre.trim() === '') {
        alert('Por favor, introduce un nombre.');
        return;
    }

    var mensajeCodificado = encodeURIComponent(mensaje);

    if (mensaje.trim() !== '') {
        window.location.href = `fireworks.html?nombre=${encodeURIComponent(nombre)}&mensaje=${mensajeCodificado}`;
    } else {
        window.location.href = `fireworks.html?nombre=${encodeURIComponent(nombre)}`;
    }
});
