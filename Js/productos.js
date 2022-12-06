let ceramicos = [ {nombre:"Ceramico simil madera", precio: "$980", medida: "2,02m", stock: "20", imgUrl: "../Imagenes/Ceramico-1.jpg"},
{nombre:"Ceramico blanco y negro", precio: "$980", medida: "2,61m", stock: "10", imgUrl: "../Imagenes/Ceramico-2.jpg"},
{nombre:"Ceramico en mandala", precio: "$980", medida: "2,02m", stock: "15", imgUrl: "../Imagenes/Ceramico-3.jpg"},
]

let contCeramicos = document.getElementById ("contCeramicos")

for (const ceramico of ceramicos) {
    
let tarjetaCeramico = document.createElement ("div")
tarjetaCeramico.className ="ceramicos"
tarjetaCeramico.innerHTML = `
    <h3>${ceramico.nombre}</h3> 
    <img src=${ceramico.imgUrl}>
    <h4>${ceramico.precio}<h/4> 
    <p>La caja contiene ${ceramico.medida}</p>
`

contCeramicos.appendChild(tarjetaCeramico)

}

let alacenaybajos = [
    {nombre: "Melamina negro", precio:"$5000", medida:"1,20m ", stock:"10", imgUrl:"../Imagenes/Alacenas y bajom.jpg"},
    {nombre: "Melamina blanco", precio:"$5500", medida:"1,20m", stock:"15", imgUrl:"../Imagenes/Alacenas y bajome.jpg"}
]

let contAlybajo = document.getElementById ("contAlybajo")

for (const alacenaybajo of alacenaybajos) {
    
    let tarjetaAlybajo = document.createElement ("div")
    tarjetaAlybajo.className ="alacenaybajo"
    tarjetaAlybajo.innerHTML = `
        <h3>${alacenaybajo.nombre}</h3> 
        <img src=${alacenaybajo.imgUrl}>
        <h4>${alacenaybajo.precio}<h/4> 
        <p> La medida es de ${alacenaybajo.medida}</p>
    `
    
    contAlybajo.appendChild(tarjetaAlybajo)
}

let griferias = [
    {nombre:"Juego romano", precio:"$4500", stock:"5", imgUrl:"../Imagenes/griferia1.jpg"},
    {nombre:"Juego italiano", precio:"$6000", stock:"3", imgUrl:"../Imagenes/griferia2.jpg"},
    {nombre:"Juego FV", precio:"$5000", stock:"4", imgUrl:"../Imagenes/griferia5.webp"},
    {nombre:"Juego Escoces", precio:"$3600", stock:"12", imgUrl:"../Imagenes/griferia3.jpg"},
    {nombre:"Juego economico", precio:"$2000", stock:"35", imgUrl:"../Imagenes/griferia4.jpg"},
]

let contGriferia = document.getElementById ("contGriferia")

for (const griferia of griferias) {
    
    let griferias = document.createElement ("div")
    tarjetaGriferia.className ="griferia"
    tarjetaGriferia.innerHTML = `
        <h3>${griferia.nombre}</h3> 
        <img src=${griferia.imgUrl}>
        <h4>${griferia.precio}<h/4> 
        
    `
    
    contGriferia.appendChild(griferia)

}

const carrito=document.querySelector("#carrito");

const listaCarrito=document.querySelector("#lista-carrito tbody");
const vaciarCarrito=document.querySelector ("#boton-vaciar");
const confirmarCompra=document.querySelector ("#boton-confirmarCompra");
const botonAgregar= document.querySelector (".btn-primary");
const listaProductos=document.querySelector (".producto")


let articulosdelcarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    listaProductos.addEventListener("click", agregarProducto);
    
    carrito.addEventListener("click", sacarProductos)
    
    vaciarCarrito.addEventListener("click",() => {articulosdelcarrito=[];
        limpiarHTML(); });

     
}
function agregarProducto(e) {
    e.preventDefault()

    if (e.target.classList.contains("btn-primary")) {
        const productoSeleccionado = e.target.parentElement;
        leerDatosProducto(productoSeleccionado);

    }
}

function leerDatosProducto(productos){
    const infoProduct={
        imagen: productos.querySelectorAll("img").src,
        titulo: productos.querySelectorAll(".card-title").innerText,
        precio: productos.querySelectorAll(".card-text").innerText,
        id: productos.querySelector("a").getAttribute("id"),
        cantidad: 1,
    
    }

    const existe = articulosdelcarrito.some((productos) => productos.id === infoProduct.id);
    if (existe){
        const producto = articulosdelcarrito.map((productos) => {
            if (productos.id === infoProduct.id){
                productos.cantidad++;
                return productos;
            }
            else{ return productos}
        })

        
        articulosdelcarrito = [...producto]
    }
    else{ articulosdelcarrito = [...articulosdelcarrito, infoProduct]}
 carritoHTML()  
}




function carritoHTML(){
    limpiarHTML()

    articulosdelcarrito.forEach((productos)=> {
    const row= document.createElement("tr");
    row.innerHTML = `<td>${productos.titulo}</td> 
    <td>${productos.precio}</td> 
    <td>${productos.cantidad}</td> 
    <td> <a href="" class="quitar-producto" id=${productos.id}>x<a/>  </td> 
    `
    listaCarrito.appendChild(row)

    })
}

function sacarProductos(e){
    e.preventDefault();

    if (e.target.classlist.contains("quitar-producto")){
        const productoID = e.target.getAttribute("id");

        articulosdelcarrito = articulosdelcarrito.filter((productos) => productos.id !== productoID);

        carritoHTML();
    }
}

function limpiarHTML(){
    listaCarrito.innerHTML = "";
}

//FORMULARIO 
let formlarioDeContacto = document.getElementById(formulario);
formularioDeContacto.addEventListener("submit", enviarFormulario) 

function enviarFormulario(e){ 
    e.preventDefault()
    prompt (`Se envio de forma exitosa tu contacto. Nos comunicaremos cuanto antes dentro de 24hs habiles `)
}

