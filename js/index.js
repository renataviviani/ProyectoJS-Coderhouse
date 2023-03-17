const productos = [
  {
    id: "pizza-muzzarella",
    nombre: "Pizza de Muzzarella",
    descripción: "Masa con salsa de tomate y MUCHO queso muzzarella",
    precio: 1500,
    imagen: "./img/pizza-muzzarella.jpg",
  },
  {
    id: "pizza-napolitana",
    nombre: "Pizza Napolitana",
    descripción: "A la Muzzarella le agregamos tomates frescos y ajo",
    precio: 1700,
    imagen: "./img/pizza-napolitana.jpg",
  },
  {
    id: "pizza-jamonymorrones",
    nombre: "Pizza de Jamón y Morrones",
    descripción: "A la Muzzarella le agregamos jamón y morrones",
    precio: 1800,
    imagen: "./img/pizza-jamonymorrones.jpg",
  },
];

const container = document.querySelector("#container");
let botonesComprar = document.querySelectorAll(".b-comprar");

function comprar() {
  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img src=${producto.imagen} class="pizza-imagen" alt="${producto.nombre}" />
        <div id="informacion">
            <h2 class="pizza-nombre">${producto.nombre}</h2>
            <p class="pizza-descripcion">${producto.descripción}</p>
            <h3 class="pizza-precio">$${producto.precio}</h3>  
          <button class="b-comprar" id=${producto.id}>Comprar</button>
        </div>`;

    container.append(div);
  });
  aBotonesComprar();
  console.log(botonesComprar);
}

comprar();

function aBotonesComprar() {
  botonesComprar = document.querySelectorAll(".b-comprar");

  botonesComprar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

const productosCarrito = [];

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;

  const productoAgregado = productos.find(
    (producto) => producto.id === idBoton
  );

  if (productosCarrito.some((producto) => producto.id === idBoton)) {
  } else {
    productoAgregado.cantidad = 1;
    productosCarrito.push(productoAgregado);
  }
}
