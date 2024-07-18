document.addEventListener('DOMContentLoaded', function () {
    const inicio = document.getElementById('inicio');
    const productos = document.getElementById('productos');
    const detalleProducto = document.getElementById('detalleProducto');

    function mostrarProductos() {
        inicio.classList.remove('visible');
        inicio.classList.add('hidden');
        productos.classList.remove('hidden');
        productos.classList.add('visible');
    }

    function mostrarDetalleProducto(titulo, imagen, descripcion) {
        productos.classList.add('hidden');
        detalleProducto.classList.remove('hidden');

        document.getElementById('detalleTitulo').textContent = titulo;
        document.getElementById('detalleImagen').src = imagen;
        document.getElementById('detalleDescripcion').textContent = descripcion;
    }

    setTimeout(mostrarProductos, 2000);

    inicio.addEventListener('click', mostrarProductos);
});
