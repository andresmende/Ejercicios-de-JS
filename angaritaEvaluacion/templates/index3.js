// Dado el siguiente arreglo: let arreglo = [ [1,2,3], [4,5,6,7,8,9], [10] ];
// a) Use ciclos for para recorrer cada elemento interno del arreglo e imprimirlo

let arreglo = [ [1,2,3], [4,5,6,7,8,9], [10] ];

for (i = 0 ; i < arreglo.length ; i++){
    console.log (`--------------`)
    for(j = 0 ; j < arreglo[i].length ; j++ ){

        console.log(arreglo [i] [j]);
    }
}

console.log(`-----------------------`);

let arreglo2 = [ [1,2,3], [4,5,6,7,8,9], [10] ];

arreglo2.forEach ((a) => {console.log(`${a} `)});
