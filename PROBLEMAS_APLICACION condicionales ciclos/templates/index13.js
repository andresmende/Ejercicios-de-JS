// Cree un programa que calcula la suma de los primeros n números naturales.

function calcular (n){
    let suma=0;

    for (let i = 0 ; i <= n ; i++) {
        
        suma+=i;
        
    }
    console.log(`los primeros numeros naturales es ${n} y la suma es ${suma} `)
}

calcular(6)