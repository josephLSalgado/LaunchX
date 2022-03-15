console.log("\n********** Variables **********\n");
var numero1 = 4;
var numero2 = 2;
console.log("Número 1: " + numero1 + " Número 2: " + numero2);

console.log("\n********** Cadenas **********\n");
var frase1 = "Ejemplo comillas dobles";
var frase2 = 'Ejemplo comillas simples';
var frase3 = `Ejemplo comillas ${numero2} invertidas`;
console.log(frase1 + "\n" + frase2 + "\n" + frase3);

console.log("\n********** Condicionales **********\n");
console.log(numero1 > numero2);

console.log("\n********** Operador lógico AND **********\n");
console.log(true && false);

console.log("\n********** Operador lógico OR **********\n");
console.log(true || false);

console.log("\n********** Arreglos **********\n");
//'let' se utiliza dentro de un bloque de código
let listaDeNumeros = [2, 3, 5, 7, 11, 234];
console.log(listaDeNumeros[3]);
listaDeNumeros.push(16);
listaDeNumeros.push(939);
console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

let listaDePalabras = ["Explorer", "MisionCommander", "LaunchX", "Innovaccion"];
console.log(listaDePalabras);
console.log(listaDePalabras.length);

let palabra = "Explorer";
console.log(palabra[2]);
console.log(palabra.length);

console.log("\n********** Objetos **********\n");
let explorer = {
    nombre : "Nombre del explorer",
    email: "email@innovaccion.mx",
    numReg: "123456",
    mision: "FrontEnd",
    proyectos: ["Abogabot", "Taquería", "Pastelería", "Vacunación"],
    proyectoPersonal: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio"
    }
};
console.log(explorer);
console.log(explorer.email);
console.log(explorer.proyectoPersonal);

console.log("\n********** Flujo condicional **********\n");
let number1 = 4;
let number2 = 2;
if (number1 > number2) {
    console.log("El número 1 es mayor que el número 2");
}
else if (number1 == number2) {
    console.log("Los números son iguales");
}
else {
    console.log("El número 2 es mayor que el número 1");
}

console.log("\n********** Ciclo condicional **********\n");
let numberWhile = 0;
while (numberWhile <= 12) {
    console.log(numberWhile);
    numberWhile = numberWhile + 2;
}
console.log("Aquí ya salió del while " + numberWhile);

console.log("\n********** Ciclo condicional de una iteración mínimo **********\n");
let numeroDoWhile = 20;
do {
    numeroDoWhile = numeroDoWhile + 2;
    console.log(numeroDoWhile);
} while (numeroDoWhile < 20);
console.log("Aquí ya salió del do while " + numeroDoWhile);

console.log("\n********** Ciclo for con interación controlada **********\n");
let numeroFor;
for (numeroFor = 0; numeroFor <= 12; numeroFor = numeroFor + 1){
    console.log(numeroFor);
}
console.log("Aquí ya salió del for " + numeroFor);

console.log("\n********** Opciones para evitar anidar condiciones **********\n");
switch (prompt("¿Cómo está el clima?")) {
    case "lluvioso":
        console.log("No te vayas a mojar.");
        break;
    case "soleado":
        console.log("Ponte bloqueador.");
        break;
    case "nublado":
        console.log("Tápate bien.");
        break;
    default:
        console.log("No sé cómo está el clima");
        break;
}
console.log("Aquí ya salío del switch");