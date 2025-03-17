// Cree un programa que muestre el promedio de n números, 
// dejándose de solicitar números cuando se introduzca el cero.



let num = 0;
 let suma;

do {

    suma = parseInt(prompt(`de el nunmero 0 para dejar de imprimir `));
    num += suma ;

     divi = num / suma ;
    
} while (suma !== 0 || suma != suma );
let divi;
console.log (`su promedio es ${divi}`)

console.log(`no se imprime porque tiene  ${suma} `)


/*function calcularPromedio() {
    let numeros = [];
    while (true) {
        let input = prompt("Introduce un número (0 para finalizar):");
        let num = parseFloat(input);
        
        if (isNaN(num)) {
            alert("Entrada no válida. Por favor, introduce un número válido.");
            continue;
        }
        
        if (num === 0) {
            break;
        }
        
        numeros.push(num);
    }
    
    if (numeros.length === 0) {
        console.log("No se ingresaron números válidos.");
    } else {
        let suma = numeros.reduce((acc, val) => acc + val, 0);
        let promedio = suma / numeros.length;
        console.log(`El promedio de los números ingresados es: ${promedio.toFixed(2)}`);
    }
}

// Ejecutar la función
calcularPromedio();*/