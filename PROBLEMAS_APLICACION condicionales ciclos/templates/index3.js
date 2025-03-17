let triangulo = parseInt(prompt(`  ingrese el total de los numeros inferioes de un triangulo`));
let triangulo2 = parseInt(prompt(`ingrese el total de los numeros inferioes de un triangulo`));
let triangulo3 = parseInt(prompt(`ingrese el total de los numeros inferioes de un triangulo`));
let valor = triangulo+triangulo2+triangulo3;
 


switch (valor) {
    case 180: alert(`los triangulos ingresados son corecto`)
        
        break;
 
    default:
        alert(`no es valido el total de los triangulos`)
        break;
}