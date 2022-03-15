/* ***********FUNCIONES************** */
console.log("\n********** Funciones **********\n");
const cuadrado = function(x) {
    return x * x;
}
let numero = 4;
console.log(cuadrado(numero));

const ruido = function() {
    console.log("kataplum!");
}
ruido();

const exponencial = function(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}
console.log(exponencial(4,3));

/*También se puede llamar la función sin haberla definido antes*/
console.log(sumar(2,2));
function sumar(x, y) {
    return x + y;
}

const restar = (a, b) => {
    return a - b;
}
console.log(restar(40, 8));

function saludar(quien) {
    console.log("Hola " + quien);
    /* Return limpia la memoria, buena práctica */
    return;
}
saludar("Explorer");
console.log("Bye");

/* ***********Excepciones************** */
console.log("\n********** Excepciones **********\n");
function preguntaDireccion(pregunta) {
    let result = prompt(pregunta);
    if (result.toLowerCase() == "izquierda") return "I";
    if (result.toLowerCase() == "derecha") return "D";
    throw new Error("Dirección inválida: " + result);
}

function mirar() {
    if (preguntaDireccion("¿A qué lado?") == "I") {
        return "una casa";
    } else {
        return "2 osos hambrientos";
    }
}

try {
    console.log("Mira a ", mirar());
} catch (error) {
    console.log("Hubo un error: " + error);
}