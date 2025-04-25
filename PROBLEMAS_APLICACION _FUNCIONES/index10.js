// Escriba una función la cual reciba una cadena como parámetro y ésta retorne la misma cadena pero sin sus vocales.

let cadena = prompt (`ingrese una plabra`);

function vocales (cadena){
    let vocal = cadena.replace(/[aeiou]/g, '')
    return vocal;
}


console.log(vocales(cadena));