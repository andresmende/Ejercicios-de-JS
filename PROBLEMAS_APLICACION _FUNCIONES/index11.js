// Escriba una función que al llamarla retorne un número entero aleatorio entre 1 y 20.

let n = parseInt(prompt(`ingrese un numero`))

function numero (n) {
    n = Math.floor(Math.random()*n)+1;

    return n;
}

console.log ( numero(n));



