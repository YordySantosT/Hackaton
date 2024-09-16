const MiBoton = document.getElementById("mibotn");
const carrito = document.getElementById("carrito");
const eliminar = document.getElementById("eliminarbtn");


const modalElement = document.getElementById('miModal');
const modal = new bootstrap.Modal(modalElement);

MiBoton.addEventListener("click", function(){
    const nuevoProducto = document.createElement("img");
    nuevoProducto.src = "https://www.shutterstock.com/image-vector/goldfish-isolated-on-white-background-260nw-2479774033.jpg";

    carrito.appendChild(nuevoProducto);
});

eliminar.addEventListener("click", function(){
    if(carrito.hasChildNodes()){
        carrito.removeChild(carrito.lastChild);
    }else{
        modal.show();
    }
})


