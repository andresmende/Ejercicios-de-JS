// Escriba una función la cual permita o no la entrada a un parque de atracciones, 
// dicha función recibe la edad, estatura y permiso parental como parámetros.
//  Para permitir el acceso el usuario deberá de ser mayor de edad y medir más de 150 cm,
//  en caso de ser menor de edad debe contar con un permiso parental para que sea concedido el acceso.

let edad = parseInt(prompt(`ingresa la edad`));
let estatura = parseFloat(prompt(`ingresa la estatura`));


function permiso(edad, estatura, parental) {
    let edad2 = 18 ;
    let estatura2 = 1.50;
    let parental2 = 1;


    if (edad >= edad2 && estatura >= estatura2) {
        return `puedes acceder`;
    }parental = prompt(`ingrese si 1. tiene el perimo parental
        o 2 si no tiene el permiso parental`)
if (parental == parental2 ) {
         return `puedes acceder`;
    }else {
        return `no puedes acceder`;
    }
}

console.log(permiso(edad, estatura ));


