// Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal
//  (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.


let voc = prompt(`ingresa una vocal `)
function vocal (voc) {
    
  for( i = 0 ; i < voc.length ; i++){

    if( voc[i] === `a` || voc[i] === `A` ||
         voc[i] === `e` || voc[i] === `E`||
          voc[i] === `i` || voc[i] === `I`||
           voc[i] === `o` || voc[i] === `O`||
            voc[i] === `u` || voc[i] === `U` ){
        return true;
    }
  }
return false;
}
console.log (vocal(voc));

