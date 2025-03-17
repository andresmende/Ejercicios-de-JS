let valor = parseInt(prompt(`escribe un numero para saber si es dividendo de 5`));
let total = valor % 5;

switch (total) {
    case 0: alert(`es dividendo de 5`)
        
        break; 

    default:
        alert(`no es dividendo de 5`);
        break;
}