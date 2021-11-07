var cantidadTickets = document.getElementById("cantidadTickets");
var selectorCategoria = document.getElementById("categoria");

function resultado() {
    var totalValorTickets = (cantidadTickets.value) * 200;

    if (cantidadTickets.value > 0) {
        if (selectorCategoria.value == 1)
            precio.innerHTML = "Total a pagar: $" + (totalValorTickets * 0.2);
        if (selectorCategoria.value == 2)
            precio.innerHTML = "Total a pagar: $" + (totalValorTickets * 0.5);
        if (selectorCategoria.value == 3)
            precio.innerHTML = "Total a pagar: $" + (totalValorTickets * 0.85);
    } else {
        alert("Ingrese una cantidad válida");
    }
}

function borrar() {
    precio.innerHTML = "Total a pagar: $";
}

function comprar() {
    window.location.replace("http://stackoverflow.com");
}

botonResumen.addEventListener('click', resultado);

botonBorrar.addEventListener('click', borrar);

botonComprar.addEventListener('click', comprar);