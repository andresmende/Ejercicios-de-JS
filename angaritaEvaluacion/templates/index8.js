//En una empresa se requiere un sistema de información que registre sus nuevos usuarios. Cada vez
//que un usuario se registra debe introducir los siguientes datos: documento, nombres, apellidos, edad,
//peso, estatura. Cree un sistema de información que reciba los datos de registro de cada cliente por
//teclado, luego de realizado el registro el sistema debe mostrar al usuario el mensaje “Registro exitoso”. Si
//el usuario desea consultar su registro debe poder hacerlo a través de su documento. Use funciones.

alert(`para poderse registrar ingrese los siguientes datos`)


let documento = prompt(`documento  `);
let nombres = prompt(` nombres   `);
let apellidos = prompt(` apellidos  `);
let edad = parseInt(prompt(`  edad  `));
let peso = parseInt(prompt(`  peso  `));
let estatura =parseFloat(prompt(` estatura `));


let persona = { documento:documento,
    nombres: nombres,
    apellidos: apellidos,
    edad: edad, 
    peso: peso ,
    estatura: estatura,
};


function documento2(){
    let datos = persona ;
    return datos;
}


documento2();


function registro (){
    let registro2 = prompt(`ingrese el documento para mostrar tus datos `);

    if (registro2 == documento){
  registro2 = persona ;
  return (registro2 (alert(
    `su documento es ${documento}
    su nombre es ${nombres}
    sus apellidos son ${apellidos}
    su edad es ${edad}
    su peso es de ${peso}
    su estatura es ${estatura}`
  )));

    }else {
        alert(`digite bien su numero de documento`)
    }
};

let num = registro();

console.log(num)


