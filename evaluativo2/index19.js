// Una función que reciba dos números y retorne el mayor si lo hay

let numero = parseInt(prompt(`ingrese el primer numero  `));
let number = parseInt(prompt(`ingrese el segundo numero `));



function valor(numero,number) {

    
   if(numero > number){
    return numero;
   } else if ( numero == number){
    return `son iguales`;
}
return number;
}

    

console.log (valor(numero,number));     

