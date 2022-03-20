const inputPokemon = document.getElementById("input_pokemon");
const imgPokemon = document.getElementById("imagen_pokemon");
const nombrePokemon = document.getElementById("nombre_pokemon");
const tipoPokemon = document.getElementById("tipo_pokemon");
const numeroPokemon = document.getElementById("numero_pokemon");
const hp = document.getElementById("hp");
const velocidad = document.getElementById("velocidad");
const ataque = document.getElementById("ataque");
const defensa = document.getElementById("defensa");
const ataqueEspecial = document.getElementById("ataque_especial");
const defensaEspecial = document.getElementById("defensa_especial");
const movimiento1 = document.getElementById("movimiento_1");
const movimiento2 = document.getElementById("movimiento_2");
const movimiento3 = document.getElementById("movimiento_3");
const movimiento4 = document.getElementById("movimiento_4");
// Para poder seleccionar a un pokémon anterior o siguiente, tomando de
// referencia el pokémon actual si es que lo hay
const pokemonAtras = document.getElementById("pokemon_atras");
const pokemonAdelante = document.getElementById("pokemon_adelante");
const seleccionAtras = document.getElementById("seleccion_atras");
const seleccionAdelante = document.getElementById("seleccion_adelante");

// Sección de la pokédex donde se ubica la imagen, el nombre, tipo y número del
// pokémon
const actualizarTarjetaPokemon = (nombre, tipo, numero, imagen) => {
    nombrePokemon.innerHTML = nombre;
    tipoPokemon.innerHTML = tipo;
    if (numero != "&nbsp") {
        numeroPokemon.innerHTML = "N.° " + numero;
    } else {
        numeroPokemon.innerHTML = numero;
    }
    imgPokemon.src = imagen;
}

// Sección de la pokédex donde se ubica las estadísticas y movimientos del
// pokémon
const actualizarDatosPokemon = (vida, vel, atq, def, atqEspecial, defEspecial, movimientos) => {
    hp.innerHTML = vida;
    velocidad.innerHTML = vel;
    ataque.innerHTML = atq;
    defensa.innerHTML = def;
    ataqueEspecial.innerHTML = atqEspecial;
    defensaEspecial.innerHTML = defEspecial;
    movimiento1.innerHTML = "&nbsp";
    movimiento2.innerHTML = "&nbsp";
    movimiento3.innerHTML = "&nbsp";
    movimiento4.innerHTML = "&nbsp";

    if (movimientos.length > 0) {
        movimiento1.innerHTML = movimientos["0"].move.name;

        if (movimientos.length > 1) {
            movimiento2.innerHTML = movimientos["1"].move.name;

            if (movimientos.length > 2) {
                movimiento3.innerHTML = movimientos["2"].move.name;

                if (movimientos.length > 3) {
                    movimiento4.innerHTML = movimientos["3"].move.name;
                }
            }
        }
    }
}

const buscarPokemon = () => {
    let nombrePokemon = inputPokemon.value.toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
    inputPokemon.value = "";
    fetchPokemon(url);
}

// Promesa para hacer una llamada a la API
const fetchPokemon = (url) => {
    fetch(url).then((respuesta) => {
        if(respuesta.status != "200") {
            actualizarTarjetaPokemon("No encontrado", "&nbsp", "&nbsp", "../assets/img/pokeball.png");
            actualizarDatosPokemon("&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp", 0);
            actualizarSeleccionPokemon(0);
        } else {
            return respuesta.json();
        }
    }).then((data) => {
        if (data) {
            let pokemon_nombre = data.name;
            let pokemon_tipo = data.types["0"].type.name;
            let pokemon_numero = data.id;
            let pokemon_imagen = data.sprites.other["official-artwork"].front_default;
            let pokemon_hp = data.stats["0"].base_stat;
            let pokemon_velocidad = data.stats["5"].base_stat;
            let pokemon_ataque = data.stats["1"].base_stat;
            let pokemon_defensa = data.stats["2"].base_stat;
            let pokemon_atq_especial = data.stats["3"].base_stat;
            let pokemon_def_especial = data.stats["4"].base_stat;
            let movimientos = data.moves;
            actualizarTarjetaPokemon(pokemon_nombre, pokemon_tipo, pokemon_numero, pokemon_imagen);
            actualizarDatosPokemon(pokemon_hp, pokemon_velocidad, pokemon_ataque, 
                pokemon_defensa, pokemon_atq_especial, pokemon_def_especial, movimientos);
            actualizarSeleccionPokemon(pokemon_numero);
        }
    })
}

// Evento al presionar la tecla ENTER dentro del input de pokémon
const teclaBuscar = (event) => {
    if (event.keyCode == 13) {
        buscarPokemon();
    }
}

// Sección para el selector del pokémon tomando como referencia al pokémon
// actual
const actualizarSeleccionPokemon = (_numeroPokemon) => {
    let num = parseInt(_numeroPokemon);
    if (num != 0) {
        seleccionAtras.style.height = "50px";
        seleccionAdelante.style.height = "50px";

        if (num > 1 && num < 898) {
            pokemonAtras.innerHTML = "N.° " + (num - 1).toString();
            pokemonAdelante.innerHTML = "N.° " + (num + 1).toString();
        } else if (num == 1) {
            pokemonAtras.innerHTML = "N.° 898";
            pokemonAdelante.innerHTML = "N.° " + (num + 1).toString();
        } else if (num == 898) {
            pokemonAtras.innerHTML = "N.° " + (num - 1).toString();
            pokemonAdelante.innerHTML = "N.° 1";
        }

    } else {
        seleccionAtras.style.height = "0";
        seleccionAdelante.style.height = "0";
        pokemonAtras.innerHTML = "";
        pokemonAdelante.innerHTML = "";
    }
}

// Función cuando se pasa el cursor sobre el div y cuando deja de pasarlo
const pasarSeleccion = (obj) => {
    obj.style.backgroundColor = "#5C5959";
}

const salirSeleccion = (obj) => {
    obj.style.backgroundColor = "#000000";
}

const seleccionPokemonAtras = () => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonAtras.innerHTML.substring(4)}`;

    fetchPokemon(url);
}

const seleccionPokemonAdelante = () => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonAdelante.innerHTML.substring(4)}`;

    fetchPokemon(url);
}

