(function() {
    // Obtener el nombre y el mensaje de la URL
    var params = new URLSearchParams(window.location.search);
    var nombre = params.get('nombre');
    var mensaje = params.get('mensaje');

    // Colores para el nombre
    var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    var index = 0;

    // Mostrar el nombre con colores si está presente
    if (nombre) {
        var nombreContainer = document.getElementById('nombreContainer');
        for (var i = 0; i < nombre.length; i++) {
            var span = document.createElement('span');
            span.textContent = nombre[i];
            span.style.color = colors[index];
            nombreContainer.appendChild(span);
            index = (index + 1) % colors.length;
        }
    }

    // Mostrar el mensaje si está presente
    if (mensaje) {
        var mensajeContainer = document.getElementById('mensajeContainer');
        mensajeContainer.textContent = mensaje;
        mensajeContainer.style.color = 'white';
    }
})();
