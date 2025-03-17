// Dado el siguiente arreglo: let arreglo = [1,2,3,4,5,6,7,8,9,10];
// a) Usando ciclo for recorra el arreglo imprimiendo cada uno de sus elementos.
// b) Usando forEach recorra el arreglo imprimiendo cada uno de sus elementos.

let arreglo = [1,2,3,4,5,6,7,8,9,10];

for (i = 1 ; i <= arreglo.length ;i++){
  console.log (i)
}

console.log(`-----------------------`);

let arreglo2 = [1,2,3,4,5,6,7,8,9,10];

function dad(element){
    console.log(element)
}
arreglo2.forEach(dad);

console.log(`-------------------`)

// forEach con funcion flecha

let bar = [1,2,3,4,5,6,7,8,9,10];

bar.forEach(car => {console.log(car)});




