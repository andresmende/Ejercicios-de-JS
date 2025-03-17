
let sena = prompt(`ingrese una palabra que tenga o no obtenga la letra z `)

function valor(sena){
for (i = 0 ; i < sena.length ; i++) {
    if (sena[i] === `z`){
        return true;
    }
}
return false;
}

console.log (valor(sena));
