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

const cCarrito = document.querySelector(".c-carrito");
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
    const index = productosCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosCarrito.push(productoAgregado);
  }
  localStorage.setItem("p-en-carrito", JSON.stringify(productosCarrito));
}

const productosEnCarrito = JSON.parse(localStorage.getItem("p-en-carrito"));
const botonCarrito = document.querySelector("#b-carrito");

function bcarrito(botonCarrito) {
  if (productosEnCarrito) {
    productosEnCarrito.forEach((producto) => {
      const div2 = document.createElement("div");
      div2.classList.add("carrito-producto");
      cCarrito.innerHTML += `<div id="carrito-imagen>
        <img src=${producto.imagen} class="carrito-pizza-imagen" alt="${
        producto.nombre
      }" /></div>
        <div id="carrito-nombre">
        <h2 class="carrito-pizza-nombre">${producto.nombre}</h2>
        <p>${producto.cantidad}</p>
        <h3 class="pizza-precio">$${producto.precio * producto.cantidad}</h3>  
        </div>`;
    });
    if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
      const index = productosEnCarrito.findIndex(
        (producto) => producto.id === idBoton
      );
      productosEnCarrito[index].cantidad++;
    }
  }
}
botonCarrito.addEventListener("click", bcarrito);
