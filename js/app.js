/* Titulo */

let titulo = document.getElementById("titulo");  
titulo.innerHTML = "<h1 class= Courier1 >Tercera Pre-entrega JS  </h1>";

//Titulo de la Pagina
let titulo2 = document.getElementById("titulo2");
titulo2.innerHTML = "<h1 class=  bannerMixin>Vida-Productos</h1>";
titulo2.className= 'cajabannertitulo';
// Variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody'); //donde se vaciara el carrito
const listaProducto = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let carritoArray = [];

document.addEventListener("DOMContentLoaded", () => {
    carritoArray = JSON.parse(localStorage.getItem("carrito")) ?? [];
    elementoHtml();
})

//Creacion del evento click
listaProducto.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')) {
        //Se realiza traversing a fin de llegar al container del curso para poder leer los datos 
        const agregaCurso = e.target.parentElement.parentElement;
        // console.log(agregaCurso);
        leerDatos(agregaCurso);

        // Producto agregado Sweed Alert
 Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Agredado!!',
            text: "Procucto agregado correctamente a carrito",
            showConfirmButton: false,
            timer: 1500,
        
          })
    };
})

carrito.addEventListener("click", eliminarCurso);

function eliminarCurso (e) {
    // console.log(e.target.classList.contains("borrar-curso"));
    if (e.target.classList.contains("borrar-curso")) {
        // console.log(e.target.getAttribute("data-id"));
        const elimina = e.target.getAttribute("data-id");

        // carritoArray = carritoArray.filter(agregaCurso => agregaCurso.id !== elimina)

        carritoArray = carritoArray.filter(curso => {
            if(curso.id === elimina) {
                curso.cantidad--;
                if (curso.cantidad < 1) {
                    delete curso;

              // Producto Eliminado Sweed Alert       
             Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Eliminado!!',
                        text: "Procucto eliminado correctamente del carrito",
                        showConfirmButton: false,
                        timer: 1500,
                    
                      })
                         
                }else {
                    return curso;
                }
            }
            else {
                return curso;
            }
        })
        elementoHtml();   
    }
}

vaciarCarritoBtn.addEventListener('click', () => {
    carritoArray = [];
    limpiarHtml();

// Producto Eliminado Sweed Alert  
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Carrito vacio!!',
        text: "Procuctos eliminado correctamente del carrito",
        showConfirmButton: false,
        timer: 2000,
    
      })
})

//leer los datos del curso

function leerDatos(agregaCurso) {
    console.log(agregaCurso);
    //construyo un objeto con los datos leidos al precionar el boton agregar carrito
    const cursoSleccionado = {
        imagen: agregaCurso.querySelector('img').src,
        nombre: agregaCurso.querySelector('h4').textContent,
        precio: agregaCurso.querySelector('span').textContent,
        id: agregaCurso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }
    // console.log(cursoSleccionado);
    //Se revisa si el elemento existe
    const existe = carritoArray.some((agregaCurso) => agregaCurso.id === cursoSleccionado.id)
    if(existe) {
        carritoArray.forEach(agregaCurso => {
            if (agregaCurso.id === cursoSleccionado.id) {
                agregaCurso.cantidad++;
                return agregaCurso
            }
        })
    }else {
        carritoArray = [...carritoArray, cursoSleccionado]; 
    }
    // console.log(existe);
    //Se crea y se agrega en el array el curso seleccionado. 
    // carritoArray = [...carritoArray, cursoSleccionado];
    console.log(carritoArray);
    elementoHtml();
}

//Crear el elemento a donde vamos a agregar el curso

function elementoHtml() {
    //Se llama a laa funcion limpiar thml para limpiar el duplicado de los cursos
    limpiarHtml();
    //Se itera por cada curso seleccionado y se crea el elemento donde se agregara
    carritoArray.forEach(curso => {
        const tablet = document.createElement('tr');
        tablet.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="150">
            </td>
            <td>
                ${curso.nombre}
            </td>
            <td>
                ${curso.precio}
            </td>
            <td>
                ${curso.cantidad}
            </td>
            <td>
                <a href"#" class="borrar-curso" data-id="${curso.id}"> X </a>
            </td>
        `;
        contenedorCarrito.appendChild(tablet);
    })

    sincronizarStorage();
    //Se agrega en el contenedor el elemento creado y el curso seleccionado
    // console.log('contenedorCarrito');
}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(carritoArray));
}

//Se crea la funcion para limpiar el contenedor porque se duplicaban los cursos.
function limpiarHtml() {
    contenedorCarrito.innerHTML = "";
}
