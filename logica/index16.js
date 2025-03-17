let a = parseInt(prompt("Ingrese a"))
let b = parseInt(prompt("Ingrese b"))
let c = parseInt(prompt("Ingrese c"))



let raiz = b**2;
let raiz2 = 4*a*c;
let division = 2*a;
let raizSuma= raiz-raiz2;
let solucionRaiz = Math.sqrt(raizSuma);

let solucionSum = -b+solucionRaiz;
let resultado = solucionSum/division;

let formulaPositiva = (-b+Math.sqrt((b**2)-(4*a*c)))/(2*a);

let formulaNegativa = (-b-Math.sqrt((b**2)-(4*a*c)))/(2*a);

//-b2+b*2-4*c*/2*a

alert(`Formula positiva ${formulaPositiva} Formula negativa ${formulaNegativa}`);
