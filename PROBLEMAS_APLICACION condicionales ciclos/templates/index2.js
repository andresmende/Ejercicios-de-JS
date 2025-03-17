let a = parseInt(prompt(`ingrese un numero`));
let b = parseInt(prompt(`ingrese el otro valor`));

if (a > b) {
    alert( `el numero mayor es ${a}`);
    
} else if (a < b) {
    alert(`el numero mayor es ${b}`);
    
} else if ( a == b ) {
    alert ( `los numeros son iguales a es ${a} y el numero de b es ${b}`);
} else {
    alert(`no es valido`)
}