// Cree un programa que calcule el promedio de 10 números.

const numero = [ 1, 100, 3, 5, 5 ,6 ,20, 8 , 15,10];


// Sumar todos los números del arreglo
let num = 0;

for(i = 0; i < numero.length; i++){

    num += numero[i];
}

// Calcular el promedio
let divi = num / numero.length;

// Mostrar el resultado
console.log(`el promedio de los 10 numeros es ${divi}`);

