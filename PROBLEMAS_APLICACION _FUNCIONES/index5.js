// Escriba una función que reciba un número n como parámetro y genere su factorial.
// let factorial = 5;

// let n = prompt("Introduzca el número del cual se quiere obtener el factorial:");
let n = 5;
    do {
        let total = 1; 
        for (i=1; i<=n; i++) {
            total = total * i; 
        }
        console.log("Factorial de " + n + ": " + total);
      n--;
      } while (n > 0);


      console.log(`----------------------------------------`)

let numero = 1 ;    
      function facto (n){
        for( i = 1 ; i <= n ; i++){
            numero = numero * i;
          
        }
        
      }  

      facto(5);


      console.log(`----------------`);

      let num= 5 ;
      let fac = 1 ;

      for (i = 1 ; i <= num ; i++){
          fac *= i;
        
      }console.log(fac)