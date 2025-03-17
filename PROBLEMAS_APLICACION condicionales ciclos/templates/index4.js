let numero = parseInt(prompt(`por facor ingrese el numeero`));

let total = numero % 2 ;
//let valor = total == 0 ;

switch (total){

    case 0: 
    alert(`numero par`);

    break;

    default:
        alert(`es inpar`);
        break;
}

