const Total = () => {
  let total = 0;
  carrito.forEach((el) => {
    total += el.precio;
  });
  alert("TOTAL: $" + total);
};

const verCarrito = () => {
  let mensaje = `Está comprando: 
     `;
  carrito.forEach((el, index) => {
    mensaje += `
                ${index + 1}- ${el.nombre} $${el.precio}
                `;
  });
  alert(mensaje);
};

const comprar = () => {
  let mensaje = `Seleccione que va a comprar de la siguiente lista: 
    `;
  productos.forEach((el, index) => {
    mensaje += ` 
                ${index + 1}- ${el.nombre}: ${el.descripcion}= $${el.precio}
                `;
  });
  let bienvenido = parseInt(prompt(mensaje));
  carrito.push(productos[bienvenido - 1]);
};

const carrito = [];

class producto {
  constructor(nombre, descripcion, precio) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}

const muzzarella = new producto(
  "PIZZA MUZZARELLA",
  "Masa con salsa de tomate y MUCHO queso muzzarella",
  1500
);
const napolitana = new producto(
  "PIZZA NAPOLITANA",
  "A la Muzzarella le agregamos tomates frescos y ajo",
  1600
);
const jamonYmorrones = new producto(
  "PIZZA JAMÓN Y MORRONES",
  "A la Muzzarella le agregamos jamón y morrones",
  1700
);

const productos = [muzzarella, napolitana, jamonYmorrones];

let bienvenido = parseInt(
  prompt(
    "Bienvenido, ¿que desea hacer? \n \n 1- Comprar \n 2- Ver carrito \n 3- Ver total \n 4- Salir"
  )
);

while (bienvenido != 4) {
  switch (bienvenido) {
    case 1:
      comprar();
      break;
    case 2:
      verCarrito();
      break;
    case 3:
      Total();
      break;
    default:
      break;
  }
  bienvenido = parseInt(
    prompt(
      "Bienvenido, ¿que desea hacer? \n \n 1- Comprar \n 2- Ver carrito \n 3- Ver total \n 4- Salir"
    )
  );
}

if (bienvenido == 4) {
  alert("No se quede sin probar nuestras pizzas!");
}
