
const valorTicket = 200;



let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;



const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoriaSelect');
const botonCalcular = document.querySelector('#calcular');
const botonReset = document.querySelector('#reset');
const parrafo = document.querySelector('#parrafo');


function totalPagar() {
    
    let totalValor = parseInt(cantidad.value) * valorTicket;

    
    if (categoria.value == 1) {
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    }
    else if (categoria.value == 2) {
        totalValor = totalValor - (totalValor * descuentoTrainee);
    }
    else if (categoria.value == 3) {
        totalValor = totalValor - (totalValor * descuentoJunior);
    }

    parrafo.innerHTML = `Total a pagar : $ ${totalValor}`;

}

document.querySelector("form").addEventListener('click', function(event) {
    event.preventDefault();
});

botonCalcular.addEventListener('click', totalPagar);





botonReset.addEventListener('click', () => {
    parrafo.innerHTML = 'Total a pagar : '
    cantidad.value = "";
    categoria.value ="";
    nombre.value ="";
    apellido.value="";
    correo.value="";
})

