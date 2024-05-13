class Prestamo {
    constructor(monto, tasa, años) {
        this.monto = monto;
        this.tasa = tasa;
        this.años = años;
    }

    // Método para calcular el pago mensual del préstamo
    calcularPagoMensual() {
        const meses = this.años * 12;
        const tasaMensual = this.tasa / 12 / 100;
        const pagoMensual = this.monto * (tasaMensual / (1 - Math.pow(1 + tasaMensual, -meses)));
        return pagoMensual.toFixed(2);
    }
}

// Función para manejar el cálculo del préstamo y mostrar el resultado en un cuadro emergente
function calcularYMostrar() {
    const montoPrestamo = parseFloat(document.getElementById("monto").value);
    const tasaInteres = parseFloat(document.getElementById("tasa").value);
    const añosPrestamo = parseInt(document.getElementById("años").value);

    const prestamo = new Prestamo(montoPrestamo, tasaInteres, añosPrestamo);
    const pagoMensual = prestamo.calcularPagoMensual();
    mostrarResultado(pagoMensual);
}

// Función para mostrar el resultado en un cuadro emergente
function mostrarResultado(pagoMensual) {
    alert(`El pago mensual será de: $${pagoMensual}`);
}

// Agregar el evento de clic al botón "Calcular Pago Mensual"
const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', calcularYMostrar);
