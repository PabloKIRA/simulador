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
    const cuotasInput = document.getElementById('cuotas');
    cuotasInput.value = pagoMensual;
    Toastify({
        text: `El pago mensual será de: $${pagoMensual}`,
        duration: 5000, // Duración de la notificación en milisegundos
        close: true,    // Mostrar botón de cierre
        gravity: "top", // Posición de la notificación
        position: "right", // Alineación de la notificación
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        stopOnFocus: true, // Detener el temporizador cuando se pase el ratón sobre la notificación
    }).showToast();
}

// Agregar el evento de clic al botón "Calcular Pago Mensual"
const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', calcularYMostrar);
Toastify({
    text: "Conoce las cotizaciones de todas las divisas online",
    duration: 5000,
    destination: "https://es.investing.com/currencies/://example.com",
    newWindow: true, // Abrir el enlace en una nueva ventana
    close: true,
    gravity: "top", 
    position: "left",
    backgroundColor:
        "linear-gradient(to right, #00b09b, #96c93d)",
    stopOnFocus: true, // Mantener el toast visible mientras el mouse esté sobre él
    onClick: function() {
        console.log("Toast clicked!");
    }
}).showToast();
