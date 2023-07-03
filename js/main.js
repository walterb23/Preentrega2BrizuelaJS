




/* Titulo */

let titulo = document.getElementById("titulo");  
titulo.innerHTML = "<h1>Tercera Pre-entrega JS  </h1>";
titulo.className = "Courier1";
/* Titulo de la Pagina*/
let titulo2 = document.getElementById("titulo2");
titulo2.innerHTML = "<h1>Vida-Productos</h1>";
titulo2.className = "bannerMixin";


/* Arreglo para crear las etiquetas de los productos */
let contenedor = document.getElementById("contenedor");
contenedor.className = 'productosDentrocontenedor' 
traerProductos()

.then((response) => {

  response.forEach(producto =>{
     let div = document.createElement("div");
  
  div.innerHTML = `
  <div class = "contenedorProducto">
  <h3 >ID : ${producto.id}</h3>
 <p> Nombre : ${producto.nombre}</p>
 <p> Precio : ${producto.precio}</p>
 <img class="carousel-img" src= ${producto.img} class="d-block w-100" alt=${producto.descripcion}>
 <button id="botonElegir${producto.id}">Seleccionar</button>
  `;
 
contenedor.appendChild(div);

let botonElegir = document.getElementById(`botonElegir${producto.id}`)
botonElegir.addEventListener('click', ()=>{
  console.log(`Elegido ${producto.nombre}`);
  Toastify({
   text: `Agregaste ${producto.nombre} a tu carrito con exito`,
   duration: 1500,
   destination: "https://github.com/apvarun/toastify-js",
   newWindow: true,
   close: true,
   gravity: "botton",
   position : "right",
   stopOnFocus: true,
   style: {
    background: "linear-gradient(to rigth, #8a2be2, #d87093)"
   },
   onClick: function(){}
}) .showToast()
})

  });
} )
.catch((error) => console.log (error))
// productos.forEach(item => {
 

//   
// });
/* Boton de registro */
let boton = document.getElementById("boton1");


let usuarioNombre;
let Nombre = localStorage.getItem("usuario");
let usuarioApellido;
let Apellido = localStorage.getItem("usuarioApellido");
/* Formulario */
let formulario = document.getElementById("form");

formulario.addEventListener("submit", (e) =>{
e.preventDefault ();
let inputs =e.target.children;

  console.log(inputs[2].value);
  console.log(inputs[4].value);
  console.log(inputs[6].value);
  console.log(inputs[10].value);
  console.log(inputs[13].value);
  console.log(inputs[17].value);
  console.log(inputs[19].value);
 

Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Formulario enviado',
  showConfirmButton: false,
  timer: 1500
});
})
formulario.addEventListener("reset", () =>{
 Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'Formulario borrado',
    showConfirmButton: false,
    timer: 1500});
});

