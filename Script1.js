var segundoTexto = false;
var operador = "";
function Sumar() {
    segundoTexto = true;
    operador = "+";
}
function Restar() {
    segundoTexto = true;
    operador = "-";
   }
function Multiplicar() {
    segundoTexto = true;
    operador = "*";
}
function Dividir() {
    segundoTexto = true;
    operador = "/";
  }
function Escribir(numBoton) {
    if (!segundoTexto) {
        txtNum1.value += numBoton;
    }
    if (segundoTexto) {
        txtNum2.value += numBoton;
    }
    
}
function Operacion() {
    switch (operador) {
        case "+":
            alert("El  resultado es = " + (Number(txtNum1.value) + Number(txtNum2.value)));
            break;
        case "-":
            alert("El  resultado es = " + (Number(txtNum1.value) - Number(txtNum2.value)));
            break;
        case "*":
            alert("El  resultado es = " + (Number(txtNum1.value) * Number(txtNum2.value)));
            break;
        case "/":
            alert("El  resultado es = " + (Number(txtNum1.value) / Number(txtNum2.value)));
            break;
        default:
            break;
    }

}
function Borrar() {
    txtNum1.value = "";
    txtNum2.value = "";
    segundoTexto = false;
    operador = "";
}