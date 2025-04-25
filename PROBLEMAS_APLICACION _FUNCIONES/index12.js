// Escriba una función la cual reciba 5 notas de un estudiante y
//  genere un mensaje informando si el estudiante aprobó o no la materia,
//  para que la materia se de como aprobada el promedio del estudiante debe ser mayor o igual a 3,0.

let nota = parseFloat(prompt(`ingrese la primera nota`));
let nota2 = parseFloat(prompt(`ingrese la segunda nota`));
let nota3 = parseFloat(prompt(`ingrese la tercer nota`));
let nota4 = parseFloat(prompt(`ingrese la cuarta nota`));
let nota5 = parseFloat(prompt(`ingrese la quinta nota`));

let total = nota + nota2 + nota3 + nota4 + nota5 ;

let promedio = total / 5;

function estudiantes (promedio) {

    let pro = 3.0

    if (promedio >= pro){
        return `aprobo la materia`;
    }else{
   
        return `no aprobo la materia`;
   }
    

}

console.log ( estudiantes(promedio));