const iva = 19/100;

let producto = parseInt(prompt("valor del producto"))


let valor = producto * iva ;

let total = producto + valor ;

alert (`el valor del producto es ${producto},
    el19% del producto es ${valor}, 
   total del producto es ${total} `)
