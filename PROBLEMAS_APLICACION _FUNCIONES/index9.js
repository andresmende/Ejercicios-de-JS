// Escriba una función la cual reciba una cadena como parámetro y retorne la cantidad de vocales que contiene la cadena.

let palabra = prompt (`ingrese una palabra `);
function vocal (palabra) {
    
    
    contador = 0 ;
    let vocales = [`a`,`e`,`i`,`o`,`u`,`A`,`E`,`I`,`O`,`U`];

    for ( i = 0 ; i < palabra.length; i++) {
        if (vocales.indexOf(palabra[i])>=0) {
            contador++;
        }
    }
    return contador;
}

console.log(vocal(palabra));