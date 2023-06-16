//Pido nombre de Usuario
function nombreApellido (){
   nombreUsuario = prompt("Bienvenido!VIDA-Indumentaria ¿Como te llamas?");
   apellidoUsuario = prompt("Ingresa tu apellido");
  localStorage.setItem("usuario",nombreUsuario);
  localStorage.setItem("usuarioApellido",apellidoUsuario);
   validarUsuario();
   comfirmacionUsuario ();
}
//Valido Nombre que no sea un strem vacio
function validarUsuario(){
  while (nombreUsuario == "" && apellidoUsuario == "" || nombreUsuario != "" && apellidoUsuario == "" || nombreUsuario == "" && apellidoUsuario != ""  ){
  alert ("No ingresaste ningun usuario");
  nombreApellido ();
}
}
//Compruevo que sea mayor de edad
function mayorEdad (){
  edadUsuario = parseInt(prompt("Solo ingresaras si eres mayor de edad! ¿Cuantos años tienes?"));

}
function comfirmacionUsuario (){

  let confirmaUsuario = prompt(`El nombre ingresado es ${nombreUsuario} ${apellidoUsuario} responde Y/N`);

  if (confirmaUsuario == "Y") {
  alert (`Bienvenido ${nombreUsuario} ${apellidoUsuario}`);

  }else{
  alert ("Usuario incorrecto");
}
}


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
const productos = [
{id: 1 , nombre: "Top Mujer", precio: 3500 ,direccion: "../productos/producto1.jpg" , descripcion:"Calsa corta mujer"},
{id: 2 , nombre: "Calsa corta Mujer", precio: 2800 ,direccion: "../productos/producto2.jpg" , descripcion:"Calsa corta mujer"},
{id: 3 , nombre: "Musculosas Mujer", precio: 3000 ,direccion: "../productos/producto3.jpg" , descripcion:"Calsa corta mujer"},
{id: 4 , nombre: "Short/Top Mujer", precio: 2900 ,direccion: "../productos/producto4.jpg" , descripcion:"Calsa corta mujer"},
{id: 5 , nombre: "Short Hombre", precio: 5600 ,direccion: "../productos/producto5.jpg" , descripcion:"Calsa corta mujer"},   
];
productos.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = `
  <h3 class="">ID : ${item.id}</h3>
 <p> Nombre : ${item.nombre}</p>
 <p> Precio : ${item.precio}</p>
 <img class="carousel-img" src= ${item.direccion} class="d-block w-100" alt=${item.descripcion}>
  `
  contenedor.append(div);
});
/* Boton de registro */
let boton = document.getElementById("boton1");

boton.addEventListener("click", nombreApellido);
// boton.addEventListener("click",() =>{
//   Swal.fire(
//     'Good job!',
//     'You clicked the button!',
//     'success'
//   )
// } );
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
 
  // Swal.fire(
  //   'Gracias!',
  //   'A la brevedad nos contactaremos contigo!',
  //   'success');
//   let div = document.createElement("mensaje");
//   mensaje.innerHTML = `
//   <h3> GRACIAS!! A la brevedad nos contactaremos contigo</h3>
//   `
// mensaje.append(div);
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Formulario enviado',
  showConfirmButton: false,
  timer: 1500
});})
formulario.addEventListener("reset", () =>{
 Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'Formulario borrado',
    showConfirmButton: false,
    timer: 1500});
});
