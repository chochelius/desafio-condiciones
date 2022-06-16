let cantidad1 = 0;
let cantidad2 = 0;
let cantidad3 = 0;
const boton = document.getElementById('boton');
const resultado = document.getElementById('resultado1');
let total = 0;

boton.addEventListener('click', function() {
    cantidad1 = parseInt(document.getElementById('cantidad1').value);
    cantidad2 = parseInt(document.getElementById('cantidad2').value);
    cantidad3 = parseInt(document.getElementById('cantidad3').value);
    total = cantidad1 + cantidad2 + cantidad3;
     console.log(total);


    if (total < 11) {
        resultado.innerHTML = '<h2>Gracias por llevar  ' + total + ' stickers</h2>';
        }
    else if (total > 10) {
        resultado.innerHTML = '<h2>No puedes llevar mas de 10 stickers</h2>';
        }
    else {
        resultado.innerHTML = '<h2>Ingresa un número valido en cada celda</h2>';
    }
});
