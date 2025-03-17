const porsentaje =5/100;

let eletro = prompt("producto");

let valor = parseInt(prompt("ingresa el valor"));

let meses = parseInt(prompt("ingresa por cuantos meses"));

let multi = valor * porsentaje + valor ;

multi = multi / meses ;

let pagar = multi * meses ;



alert( ` el nombre del producto es: ${eletro},
    el valor del eletrodomestico es: ${valor}, 
    las cuotas serian de :${meses} meses, 
    pagaras cuotas por cada mes de: ${multi},
     su total a pagar es de: ${pagar}` ) ;