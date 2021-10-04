function calcular(params) {
    numero1 = parseInt( document.getElementById("numero1").value);
    numero2 = parseInt( document.getElementById("numero2").value);
    suma = numero1 * numero2
    mensaje (`La multiplicacion de ${numero1} y ${numero2} es = ${suma}`);
}

const mensaje = (mensaje) => document.getElementById("textResultado").value = mensaje;



function concatenar(params) {
    nombre =  document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    mensajeNombre (`Tu nombre concatenado es ${nombre} ${apellido}`);
}
const mensajeNombre = (mensajeNombre) => document.getElementById("textConcatenado").value = mensajeNombre;


contador = 0

function incrementar(params) {
    document.getElementById("conteo").innerHTML = ++contador
}