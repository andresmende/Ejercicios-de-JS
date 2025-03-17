// Cree una función que reciba como argumentos dos números y retorne el mayor 
// de estos números, luego haga el llamado a la función y guarde su valor de
//  retorno en una variable e imprima ese valor por consola.


let num = parseInt(prompt(`ingrese el primer valor `));
let num2 = parseInt(prompt(`ingrese el primer valor `));


function numero (num,num2){
    if (num > num2 ){
       return `el numero mayor es ${num}`;
    } else if (num < num2){
        return `el numero mayor es ${num2}`;
    }
    return `son iguales`; 
}


console.log(numero(num,num2));
