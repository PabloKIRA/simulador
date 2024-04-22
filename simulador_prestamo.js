// Definición de la clase Prestamo
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

// Crear una instancia de la clase Prestamo y ejecutar el simulador
const prestamo = new Prestamo(
    parseFloat(prompt("Ingrese el monto del préstamo:")),
    parseFloat(prompt("Ingrese la tasa de interés anual (%):")),
    parseInt(prompt("Ingrese el número de años del préstamo:"))
);
prestamo.ejecutarSimulador();
