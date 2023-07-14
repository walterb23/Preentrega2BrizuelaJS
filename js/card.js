const BD = [
    {id: 1, nombre: "Top", span: 1500, precio: 2500, cantidad: 5, descripcion : "hhdfgh", img : "../productos/producto1.jpg"},    
    {id: 2, nombre: "Short Animal Print Mujer", span: 1500, precio: 2500, cantidad: 5, descripcion : "fgh", img : "../productos/producto2.jpg"},
    {id: 3, nombre: "Musculosa Mujer", span: 1000, precio: 2000, cantidad: 5, descripcion : "fgh", img : "../productos/producto3.jpg"},
    {id: 4, nombre: "Conjunto Cordo Mujer", span: 3500, precio: 4500, cantidad: 2, descripcion : "fgh", img : "../productos/producto4.jpg"},
    {id: 5, nombre: "Short Hombre", span: 2500, precio: 3500, cantidad: 5, descripcion : "fgh", img : "../productos/producto5.jpg"},
    {id: 6, nombre: "Short dos colores Mujer ", span: 1200, precio: 2500, cantidad: 5, descripcion : "dfgh", img : "../productos/producto6.jpg"},
    {id: 7, nombre: "Calsa Corta Mujer", span: 1500, precio: 2500, cantidad: 5, descripcion : "dfgh", img : "../productos/producto7.jpg"},
    {id: 8, nombre: "Conjunto Animal Print Mujer", span: 3500, precio: 4500, cantidad: 5, descripcion : "gfh", img : "../productos/producto8.jpg"},
    {id: 9, nombre: "Musculosa Canguro Hombre", span: 3500, precio: 4000, cantidad: 5, descripcion : "dfgh", img : "../productos/producto9.jpg"},
      
    ];
    const traerProductos = () => {
        return new Promise((resolve, reject) => {
             setTimeout(() => {
 resolve(BD);
             },500) ;
        });
    };

    /* Arreglo para crear las etiquetas de los productos */
let contenedor = document.getElementById("contenedor");
contenedor.className = '' 
traerProductos()

.then((response) => {

   response.forEach(producto =>{
     let div = document.createElement("div");
   div.className= 'contenedorProducto'
   
   div.innerHTML = `
   <div class = "card">
    <img class="imagen-curso u-full-width" src= ${producto.img} alt=${producto.descripcion}>
    <div class = "info-card">
  <h4 >Producto N° : ${producto.id}</h4>
 <p> Nombre : ${producto.nombre}</p>
 <p class="precio"> Precio : $${producto.precio} <span class="u-pull-right ">$${producto.span}</span></p>


 <a href="#"  class="u-full-width button-primary button input agregar-carrito" data-id="${producto.id}">Agregar Al Carrito</a>
  `;

contenedor.appendChild(div);  
}) })
  // Producto agregado
