// Encontrar elementos de HTML
const titulo = document.getElementById("titulo");
const parrafo = document.getElementsByTagName("p");
const links = document.getElementsByClassName("links");

//Cambiar valores de HTML
titulo.innerHTML = "Título cambiado";

document.getElementById("demo").innerHTML = "The text in first paragraph (index 0) is: " + parrafo[0].innerHTML;

links[0].href = "google.com";

// Cambiar estilos
titulo.style.color = "red";

// Eventos
function cambiarTexto(obj) {
    obj.innerHTML = "Texto clickeado";
}

function mOver(obj) {
    obj.innerHTML = "Mouse over now";
}

function mOut(obj) {
    obj.innerHTML = "Mouse out";
}

function mDown(obj) {
    obj.style.backgroundColor = "#1EC5E5";
    obj.innerHTML = "Suéltame";
}

function mUp(obj) {
    obj.style.backgroundColor = "#D94A38";
    obj.innerHTML = "Gracias";
}

// addEventListener
const boton = document.getElementById("boton");
boton.addEventListener("click", alerta);

function alerta() {
    alert("Alerta");
}