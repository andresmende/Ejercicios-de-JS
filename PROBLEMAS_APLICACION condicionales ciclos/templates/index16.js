// Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, 
// si el usuario teclea la letra S el programa se detendrá, de lo contrario continuará ejecután

let letra = prompt(`ingrese la letra "s" para salir 
    ingrese la letra "n" para no salir `);




    while (letra != "s" && letra != "S" && letra != "n" && letra != "N"){

        alert(`ingrese la letra correcta`);

        letra = prompt(`ingrese la letra S/N`)
       
    }   
    
    if(letra == "s" || letra == "S"){
        window.location.replace (`https://chatgpt.com/`);
        alert(`seguir en la pagina`)
    } else if (letra == "n" || letra == "N"){
        let n = parseInt(prompt(`escriba un numero natural para poder que muestre los impares `));
        for(  i = 1 ; i <= n ; i++){ 
              if ( i % 2 ) {
                  
                  alert(i);
              }
              break;
             }
    }


    
   
      // window.location.replace (`https://web.whatsapp.com/`);
        