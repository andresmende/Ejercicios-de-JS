// Escriba una función que reciba un número entero y dicha función pueda determinar si el número enviado es positivo o negativo.

let numero = parseInt(prompt(`ingrese el numero posito y negativo`));

function total(numero) {
    let positivo = 0;
    if ( numero >= positivo ) {
        return `el numero es positivo ${numero}`;
    }else {
        return `el numero es negativo ${numero}`;
    }
}

console.log(total(numero));