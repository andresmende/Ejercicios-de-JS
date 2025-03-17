let primos = parseInt(prompt(`ingrese un numero de 1 a 15 para saber si es numero primo`));

let total = primos % 2 ;

switch (total) {
    case 0:
        alert(`es un numero primo`)
        break;

    default:
        alert(`no es un numero primo`)
        break;
}