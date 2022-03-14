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