let boton = document.getElementById('ingresa');
let resultado = document.getElementById('resultado');




boton.addEventListener('click', function() {

    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let num3 = parseInt(document.getElementById('num3').value);

    console.log(num1);
    console.log(num2);
    console.log(num3);


    if (num1 == '9' && num2 == '1' && num3 == '1') {
        resultado.innerHTML = '<h2>Password 1 correcto</h2>';
    }
    else if (num1 == '7' && num2 == '1' && num3 == '4') {
        resultado.innerHTML = '<h2>Password 2 correcto</h2>';
    }
    else {
        resultado.innerHTML = '<h2>Password incorrecto</h2>';
    }
}
);
