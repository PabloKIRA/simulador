class Prestamo {
    constructor(monto, tasa, años) {
        if (isNaN(monto) || isNaN(tasa) || isNaN(años)) {
            throw new Error("Todos los valores deben ser números.");
        }
        if (monto <= 0 || tasa <= 0 || años <= 0) {
            throw new Error("Todos los valores deben ser mayores a cero.");
        }

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
    try {
        const montoPrestamo = parseFloat(document.getElementById("monto").value);
        const tasaInteres = parseFloat(document.getElementById("tasa").value);
        const añosPrestamo = parseInt(document.getElementById("años").value);

        const prestamo = new Prestamo(montoPrestamo, tasaInteres, añosPrestamo);
        const pagoMensual = prestamo.calcularPagoMensual();
        mostrarResultado(pagoMensual);
    } catch (error) {
        mostrarError(error.message);
    } finally {
        
    }
}

// Función para mostrar el resultado en un cuadro emergente
function mostrarResultado(pagoMensual) {
    const cuotasInput = document.getElementById('cuotas');
    cuotasInput.value = pagoMensual;
    Toastify({
        text: `El pago mensual será de: $${pagoMensual}`,
        duration: 5000, 
        close: true,    
        gravity: "top", 
        position: "right", 
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        stopOnFocus: true, 
    }).showToast();
}

// Función para mostrar un error en un cuadro emergente
function mostrarError(mensaje) {
    Toastify({
        text: `Error: ${mensaje}`,
        duration: 5000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
        stopOnFocus: true,
    }).showToast();
}

//Evento de clic al botón "Calcular Pago Mensual"
const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', calcularYMostrar);
