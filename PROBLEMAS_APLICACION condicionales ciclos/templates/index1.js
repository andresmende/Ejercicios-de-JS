let iva = parseInt(prompt(`
    elije 1 para lentejas 
    elije 2 para arroz
    elije 3 para la crema 
    elije 4 para el vino
         `));


switch (iva) {
    case 1: alert(`las lentejas no paga iva `)
        
        break;

        case 2: alert(`el arroz no paga iva`)
        break;

        case 3: alert(`la crema si paga el 19% iva`)

        break;

        case 4: alert (`el vino paga iva paga el 19% iva `)
        break;
    default :
        alert(`no existe`)
        break;
}

