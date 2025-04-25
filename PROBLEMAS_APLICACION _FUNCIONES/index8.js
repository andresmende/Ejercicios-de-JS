// Escriba una función llamada obtenerPrimeraLetra() que reciba un nombre y devuelva la primera letra del nombre.

let nombre = prompt( `escribe tu nombre`)

function letra(nombre){
    for (i = 0; i <= nombre.length ; i++){
    return nombre [i];
    }
}

console.log (letra(nombre));