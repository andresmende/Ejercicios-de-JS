// Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use funciones.

function calcular ( nota, nota2, nota3 ) {
return (nota + nota2+ nota3) / 3;
}

let n = parseInt(prompt(`ingrese el numero de estudiantes`));

for (let i = 0 ; i < n ; i++){
    
    let nota = parseFloat(prompt(`ingrese la primer nota`));
    let nota2 = parseFloat(prompt(`ingrese la segunda nota`));
    let nota3 = parseFloat(prompt(`ingrese la cuarta nota`));
    
    let promedio = calcular(nota , nota2 , nota3 )

    console.table ( `el promedio del estuadiante ${i+1} es ${promedio}`)  
}






