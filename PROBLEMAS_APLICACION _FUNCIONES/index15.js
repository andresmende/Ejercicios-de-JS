// Escriba una función generarContraseña la cual reciba n como parámetro y esta cree una contraseña de n caracteres aleatorios.
//  (Los caracteres pueden ser números, letras o signos).

let n = parseInt(prompt(`ingrese de cuantos caracteres quiere la contraseña  `));

 

function generarContraseña (n){
    let contraseña = "";
    let nu = `jdnnjdsiu$()=?¿¡56hdienchqoweirfnd`
 for (i = 0 ; i < n ; i++){
  contraseña += nu.charAt(Math.floor(Math.random()*nu.length));


    
 }
    
console.log(contraseña)

}

generarContraseña(n);