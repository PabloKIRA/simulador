class Prestamo {
    constructor(monto, tasa, años) {
        this.monto = monto;
        this.tasa = tasa;
        this.años = años;
    }

    // Método para calcular el pago mensual del préstamo
    calcularPagoMensual() {
        const tasaMensual = this.tasa / 12 / 100;
        const meses = this.años * 12;
        const pagoMensual = this.monto * (tasaMensual / (1 - Math.pow(1 + tasaMensual, -meses)));
        return pagoMensual.toFixed(2);
    }

    // Método para ejecutar el simulador de préstamo
    ejecutarSimulador() {
        const pagoMensual = this.calcularPagoMensual();
        console.log("El pago mensual del préstamo será de: $" + pagoMensual);
        alert("El pago mensual del préstamo será de: $" + pagoMensual);
    }
}

function obtenerNumero(mensaje) {
    let valor;
    do {
        valor = parseFloat(prompt(mensaje));
    } while (isNaN(valor));
    return valor;
}

function obtenerEntero(mensaje) {
    let valor;
    do {
        valor = parseInt(prompt(mensaje));
    } while (isNaN(valor) || valor <= 0);
    return valor;
}

function confirmarEjecucion() {
    return confirm("¿Desea ejecutar el simulador de préstamo?");
}

function mostrarMensajeConsola(mensaje) {
    console.log(mensaje);
}

// Lógica principal
const ejecutar = confirmarEjecucion();
if (ejecutar) {
    const montoPrestamo = obtenerNumero("Ingrese el monto del préstamo:");
    const tasaInteres = obtenerNumero("Ingrese la tasa de interés anual (%):");
    const añosPrestamo = obtenerEntero("Ingrese el número de años del préstamo:");

    const prestamo = new Prestamo(montoPrestamo, tasaInteres, añosPrestamo);
    prestamo.ejecutarSimulador();
} else {
    mostrarMensajeConsola("El simulador de préstamo no se ha ejecutado.");
}
