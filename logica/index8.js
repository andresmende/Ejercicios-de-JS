const porsentaje = 10/100;

let producto = parseInt(prompt("valor del producto"));

let iva = producto * porsentaje ;

let total = producto - iva ;




alert  (`el valor del producto es ${producto},
    el 10% de descuento es ${iva},
    total del producto es ${total}`)