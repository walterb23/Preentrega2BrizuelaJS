const BD = [
    {id: 1, nombre: "Top", precio: 2500, cantidad: 5, descripcion : "hhdfgh", img : "../productos/producto1.jpg"},    
    {id: 2, nombre: "Short Animal Print Mujer", precio: 2500, cantidad: 5, descripcion : "fgh", img : "../productos/producto2.jpg"},
    {id: 3, nombre: "Musculosa Mujer", precio: 2000, cantidad: 5, descripcion : "fgh", img : "../productos/producto3.jpg"},
    {id: 4, nombre: "Conjunto Cordo Mujer", precio: 4500, cantidad: 2, descripcion : "fgh", img : "../productos/producto4.jpg"},
    {id: 5, nombre: "Short Hombre", precio: 3500, cantidad: 5, descripcion : "fgh", img : "../productos/producto5.jpg"},
    {id: 6, nombre: "Short dos colores Mujer ", precio: 2500, cantidad: 5, descripcion : "dfgh", img : "../productos/producto6.jpg"},
    {id: 7, nombre: "Calsa Corta Mujer", precio: 2500, cantidad: 5, descripcion : "dfgh", img : "../productos/producto7.jpg"},
    {id: 8, nombre: "Conjunto Animal Print Mujer", precio: 4500, cantidad: 5, descripcion : "gfh", img : "../productos/producto8.jpg"},
    {id: 9, nombre: "Musculosa Canguro Hombre", precio: 4000, cantidad: 5, descripcion : "dfgh", img : "../productos/producto9.jpg"},
      
    ];

 const traerProductos = () => {
        return new Promise((resolve, reject) => {
             setTimeout(() => {
 resolve(BD);
             },500) ;
        });
    };

    


const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos

let allProducts = [];

// const valorTotal = document.querySelector('.total-pagar');

// const countProducts = document.querySelector('#contador-productos');

// const cartEmpty = document.querySelector('.cart-empty');
// const cartTotal = document.querySelector('.cart-total');

//   productsList.addEventListener('click', e => {
// 	if (e.target.añadir-carrito.contains('botonElegir2')) {
//  		const producto = e.target.parentElement;

//         console.log(producto.querySelector('id').innert)
    
//     }});
//     // 		const infoProduct = {
// 			quantity: 1,
// 			title: product.querySelector('h2').textContent,
// 			price: product.querySelector('p').textContent,
// 		};

// 		const exits = allProducts.some(
// 			product => product.title === infoProduct.title
// 		);

// 		if (exits) {
// 			const products = allProducts.map(product => {
// 				if (product.title === infoProduct.title) {
// 					product.quantity++;
// 					return product;
// 				} else {
// 					return product;
// 				}
// 			});
// 			allProducts = [...products];
// 		} else {
// 			allProducts = [...allProducts, infoProduct];
// 		}

// 		showHTML();
// 	}
// });

// rowProduct.addEventListener('click', e => {
// 	if (e.target.classList.contains('icon-close')) {
// 		const product = e.target.parentElement;
// 		const title = product.querySelector('p').textContent;

// 		allProducts = allProducts.filter(
// 			product => product.title !== title
// 		);

// 		console.log(allProducts);

// 		showHTML();
// 	}
// });

// // Funcion para mostrar  HTML
 //const showHTML = () => {
    // 	if (!allProducts.length) {
    // 		cartEmpty.classList.remove('hidden');
    // 		rowProduct.classList.add('hidden');
    // 		cartTotal.classList.add('hidden');
    // 	} else {
    // 		cartEmpty.classList.add('hidden');
    // 		rowProduct.classList.remove('hidden');
    // 		cartTotal.classList.remove('hidden');
    // 	}
    
    // 	// Limpiar HTML
    // 	rowProduct.innerHTML = '';
    
    // 	let total = 0;
    // 	let totalOfProducts = 0;
    
    // 	allProducts.forEach(product => {
    // 		const containerProduct = document.createElement('div');
    // 		containerProduct.classList.add('cart-product');
    
    // 		containerProduct.innerHTML = `
    //             <div class="info-cart-product">
    //                 <span class="cantidad-producto-carrito">${product.quantity}</span>
    //                 <p class="titulo-producto-carrito">${product.title}</p>
    //                 <span class="precio-producto-carrito">${product.price}</span>
    //             </div>
    //             <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke-width="1.5"
    //                 stroke="currentColor"
    //                 class="icon-close"
    //             >
    //                 <path
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     d="M6 18L18 6M6 6l12 12"
    //                 />
    //             </svg>
    //         `;
    
    // 		rowProduct.append(containerProduct);
    
    // 		total =
    // 			total + parseInt(product.quantity * product.price.slice(1));
    // 		totalOfProducts = totalOfProducts + product.quantity;
    // 	});
    
    // 	valorTotal.innerText = `$${total}`;
    // 	countProducts.innerText = totalOfProducts;
    // };