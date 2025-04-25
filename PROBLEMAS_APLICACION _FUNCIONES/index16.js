// Escriba una función que se llame facturacion() La función tiene que recibir como parámetro el monto de un producto , y el medio de pago : C (tarjeta de crédito), E(efectivo) y D (tarjeta de débito). Si el monto del producto es menor a $200 no se aplicará ningún descuento. Si el monto a pagar es entre $200 y $400 se aplicará un descuento del 30% si el medio de pago es efectivo, 20% si se realiza con débito y 10% con tarjeta de crédito. Para montos mayores a $400, el descuento es del 40% sin importar el medio de pago La función deberá retornar el monto final a pagar.

let monto = prompt(`
    ingresa  C (tarjeta de crédito)
             E(efectivo)
             D (tarjeta de débito) `);
 
 let dinero = parseInt(prompt(`ingresa el valor del producto`)); 
 
 let valor = 200;
 let descuento = 400;

 const por = (10/100)/10;

function factura(monto) {

    for(i = 0 ; i < monto.length ; i++){
        if(monto[i] === `C` && dinero >= valor && dinero <= descuento ){
             dinero = dinero  / por; 
            return dinero;
        }
    }

}

console.log(factura(monto));