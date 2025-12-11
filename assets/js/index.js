
function calcularPropina(montoTotal, porcentajePropina) {
    let propina = montoTotal * (porcentajePropina / 100);
    return propina;
}

let monto = parseFloat(prompt("Ingresa el monto total de la cuenta:"));
let porcentaje = parseFloat(prompt("Ingresa el porcentaje de propina que deseas dejar:"));

let montoPropina = calcularPropina(monto, porcentaje);

let totalPagar = monto + montoPropina;

console.log("--- Resumen de la Cuenta ---");
console.log("Monto de la cuenta: $" + monto);
console.log("Propina (" + porcentaje + "%): $" + montoPropina);
console.log("Total a pagar: $" + totalPagar);
