/* Ejercicio Adopcion de Gatos */

let gato = Number(prompt("¿Cuántos años tiene el gato?"));
let permiso = prompt("¿Tenés permiso? Escribí si o no");

if (gato <= 5 && permiso === "si") {
  alert("Podés adoptar un gatito bebé");
} else if (gato > 5 && permiso === "si") {
  alert("Podés adoptar un gato mayor");
} else {
  alert("Necesitás permiso para adoptar");
}

/* const nombre = prompt("¿Cuál es tu nombre?");
const anioDeNacimiento = Number(prompt("¿En qué año naciste?"));
const mascota = prompt("¿Cómo se llama tu mascota?");
const anioActual = Number(prompt("¿En qué año estamos?"));
 */

/*
const edad = anioActual - anioDeNacimiento;

const mensaje =
  "Hola " +
  nombre +
  ". Naciste en el año " +
  anioDeNacimiento +
  ", tu mascota se llama " +
  mascota +
  " y tenés aproximadamente " +
  edad +
  " años.";

console.log(mensaje);
alert(mensaje);*/

/*
 EJERCICIO 2: SISTEMA DE DESCUENTOS (10 minutos)
Vamos a crear un sistema que calcule descuentos según la cantidad comprada
REGLAS:
- Si compra más de 100 unidades → 20% descuento
- Si compra más de 50 unidades → 15% descuento  
- Si compra más de 20 unidades → 10% descuento
- Si compra menos → sin descuento

let cantidadComprada =  Number(prompt("decime cuanto compraste en numero"));
let precioUnitario = 50;
let descuentoPorcentaje = 0;
let descuento = 0

if(cantidadComprada > 100) {
    console.log("usted tiene un 20% de descuento")
    descuento = 0.20
}
else if (cantidadComprada > 50){
    console.log("usted tiene 15% de descuento")
    descuento = 0.15
}
else if (cantidadComprada > 20){
    console.log ("usted tiene 10% de descuento")
    descuento = 0.10
}else{
    console.log("sin descuento")
}

let total = cantidadComprada * precioUnitario
let totalConDescuento = total - (total * descuento)
console.log("el total del valor con descuento es de ",totalConDescuento)

*/

/*
console.log("calculadora rustica")
let numero1 = Number(prompt("decime el numero 1 al operar"));
let numero2 = Number(prompt("decime el numero 2 al operar"));;
let operacion = prompt("decime la operacion a realizar + , - , / , *")
let resultado = 0


switch (operacion) {
    case "+":
        resultado = numero1+ numero2;
         console.log("el resultado es de",resultado);
        break;
    case "-":
        resultado = numero1 - numero2;
        console.log("el resultado es de",resultado);
        break;
    case "/":
        resultado = numero1 / numero2;
        console.log("el resultado es de",resultado);
        break;
    case "*":
        resultado = numero1 * numero2
        console.log("el resultado es de",resultado);
        break;
    default:
        console.log("operacion no lograda error en el sistema")

}

*/
