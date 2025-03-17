// Dado el siguiente arreglo [1, 2, 3, 4, 500, 420, -100] elimine el elemento de índice 4 usando splice,
// elimine el último elemento usando pop, agregue el elemento 520 usando push. Finalmente, haga una
// copia “independiente del arreglo” usando slice

let arreglo = [1, 2, 3, 4 , 500, 420 , -100];

 arreglo.splice(3,1);
 arreglo.pop();
 arreglo.push(520);
 let arreglo2 = arreglo.slice();

console.log (arreglo);
console.log (arreglo2);

