// Definimos algunos productos predefinidos
const productos = [
    { id: 1, nombre: "Camiseta", precio: 7000 },
    { id: 2, nombre: "Pantalones", precio: 15000 },
    { id: 3, nombre: "Zapatos", precio: 50000 },
    { id: 4, nombre: "Sombrero", precio: 3000 }
];

// Inicializamos el carrito como un array vacío
const carrito = [];

// Función para mostrar los productos disponibles
function mostrarProductosDisponibles() {
    const productosDisponibles = productos.map(producto => `${producto.id}. ${producto.nombre} - Precio: $${producto.precio}`);
    const mensaje = `Productos disponibles:\n${productosDisponibles.join('\n')}`;
    alert(mensaje);
    console.log(mensaje);
}

// Función para agregar un producto al carrito
function agregarAlCarrito() {
    mostrarProductosDisponibles();
    const idProducto = parseInt(prompt("Ingrese el ID del producto que desea agregar (o ingrese 0 para agregar un producto nuevo):"));

    if (idProducto === 0) {
        agregarProductoNuevo();
    } else {
        const productoEncontrado = productos.find(producto => producto.id === idProducto);

        if (productoEncontrado) {
            carrito.push(productoEncontrado);
            const mensaje = `${productoEncontrado.nombre} ha sido agregado al carrito.`;
            alert(mensaje);
            console.log(mensaje);
        } else {
            alert("Producto no encontrado.");
            console.log("Producto no encontrado.");
        }
    }
}

// Función para agregar un producto manualmente al carrito
function agregarProductoNuevo() {
    const nombreProducto = prompt("Ingrese el nombre del producto:");
    const precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));

    // Verificar si el precio es un número válido
    if (isNaN(precioProducto) || precioProducto <= 0) {
        alert("Precio no válido. El producto no se ha agregado al carrito.");
        console.log("Precio no válido. El producto no se ha agregado al carrito.");
        return;
    }

    const producto = { nombre: nombreProducto, precio: precioProducto };
    carrito.push(producto);

    alert(`${nombreProducto} ha sido agregado al carrito.`);
    console.log(`${nombreProducto} ha sido agregado al carrito.`);
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        console.log("El carrito está vacío.");
    } else {
        let total = 0;
        alert("Productos en el carrito:");
        console.log("Productos en el carrito:");

        carrito.forEach((producto, index) => {
            alert(`${index + 1}. ${producto.nombre} - Precio: $${producto.precio}`);
            console.log(`${index + 1}. ${producto.nombre} - Precio: $${producto.precio}`);
            total += producto.precio;
        });

        alert(`Total: $${total}`);
        console.log(`Total: $${total}`);
    }
}

// Función para buscar un producto en el carrito por nombre
function buscarProductoEnCarrito() {
    const nombreProducto = prompt("Ingrese el nombre del producto que desea buscar en el carrito:");
    const productosEncontrados = carrito.filter(producto => producto.nombre.toLowerCase().includes(nombreProducto.toLowerCase()));

    if (productosEncontrados.length > 0) {
        alert(`Productos encontrados en el carrito:`);
        console.log(`Productos encontrados en el carrito:`);

        productosEncontrados.forEach((producto, index) => {
            alert(`${index + 1}. ${producto.nombre} - Precio: $${producto.precio}`);
            console.log(`${index + 1}. ${producto.nombre} - Precio: $${producto.precio}`);
        });
    } else {
        alert("No se encontraron productos con ese nombre en el carrito.");
        console.log("No se encontraron productos con ese nombre en el carrito.");
    }
}

// Función principal para manejar las interacciones con el usuario
function interactuarConUsuario() {
    let opcion;
    do {
        opcion = parseInt(prompt(
            "Seleccione una opción:\n" +
            "1. Agregar producto al carrito\n" +
            "2. Mostrar carrito\n" +
            "3. Buscar producto en el carrito\n" +
            "4. Salir"
        ));

        switch (opcion) {
            case 1:
                agregarAlCarrito();
                break;
            case 2:
                mostrarCarrito();
                break;
            case 3:
                buscarProductoEnCarrito();
                break;
            case 4:
                alert("Gracias por usar el carrito de compras.");
                console.log("Gracias por usar el carrito de compras.");
                break;
            default:
                alert("Opción inválida. Por favor, seleccione una opción válida.");
                console.log("Opción inválida. Por favor, seleccione una opción válida.");
        }
    } while (opcion !== 4);
}

// Iniciar la interacción con el usuario
interactuarConUsuario();
