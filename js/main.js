console.log("Prueba");

const nombre = prompt("¿Cuál es tu nombre?");
const anioDeNacimiento = Number(prompt("¿En qué año naciste?"));
const mascota = prompt("¿Cómo se llama tu mascota?");
const anioActual = Number(prompt("¿En qué año estamos?"));

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
alert(mensaje);
