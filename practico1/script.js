document.getElementById("calcular").addEventListener("click", function() {
   // esperamos el click en el botón de calcular
    const operando1 = parseFloat(document.getElementById("operando1").value);
    const operando2 = parseFloat(document.getElementById("operando2").value);
    const operador = document.getElementById("operador").value;
    let resultado;

    // verificamos si los operandos son números validos, incluyendo decimales
    if (isNaN(operando1) || isNaN(operando2)) {
        resultado = "Error: Ingrese números válidos";
    } else {
        // realizamos las operaciones correspondientes
        if (operador === "sumar") {
            resultado = operando1 + operando2;
        } else if (operador === "restar") {
            resultado = operando1 - operando2;
        } else if (operador === "multiplicar") {
            resultado = operando1 * operando2;
        } else if (operador === "dividir") {
            if (operando2 !== 0) {
                resultado = operando1 / operando2;
            } else {
                resultado = "Error: División por cero";
            }
        }
    }
// mostramos el resultado
    document.getElementById("resultado").textContent = resultado;
});

