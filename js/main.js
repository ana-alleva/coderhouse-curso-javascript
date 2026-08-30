/* Ejercicio Simulador de Compra */

const Tomate = 40;
const JabonLiquido = 30;
const Perfume = 69;

function calcularProducto(nombre, cantidad) {
  let subtotal;

  if (nombre === "Tomate") {
    subtotal = Tomate * cantidad;
  } else if (nombre === "JabonLiquido") {
    subtotal = JabonLiquido * cantidad;
  } else if (nombre === "Perfume") {
    subtotal = Perfume * cantidad;
  } else {
    alert("No tenemos ese producto");
    subtotal = 0;
  }

  return subtotal;
}

function calcularDescuento(total) {
  let precioFinal = total;

  if (total >= 50000) {
    const descuento = (total * 10) / 100;
    precioFinal = total - descuento;
  }

  return precioFinal;
}

function mostrarResultado(resultado) {
  alert("El total de la compra es: $" + resultado);
}

let totalCompra = 0;
let continuar = "si";

while (continuar === "si") {
  const producto = prompt(
    "Qué producto vas a comprar? Tomate, JabonLiquido o Perfume",
  );

  const cantidad = Number(prompt("Cuántos " + producto + " vas a comprar?"));

  const subtotal = calcularProducto(producto, cantidad);

  totalCompra = totalCompra + subtotal;

  continuar = prompt("Querés agregar otro producto? si o no");
}

const totalConDescuento = calcularDescuento(totalCompra);

mostrarResultado(totalConDescuento);
