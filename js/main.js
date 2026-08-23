/* Ejercicio Simulador de Calificaciones */

const cantidadNotas = Number(prompt("¿Cuántas notas querés cargar?"));

for (let i = 1; i <= cantidadNotas; i++) {
  const nota = Number(prompt(`Ingresá la nota número ${i}`));

  if (nota >= 8) {
    alert("Muy buen resultado");
  } else if (nota >= 6) {
    alert("Aprobado");
  } else {
    alert("Desaprobado");
  }
}

console.log("Todas las notas fueron evaluadas");
