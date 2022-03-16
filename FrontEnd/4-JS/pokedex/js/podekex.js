/* Para consultar API */
const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

    /* .then -> promesa | ejecutar hilos de forma paralela */
    fetch(url).then((res) => {
        /* Obtiene respuesta pero sigue siendo una promesa */
        //console.log(res);
        if (res.status != "200") {
            //console.log(res);
            pokeImage("../assets/gif/pikachu-sad.gif");
        } else {
            return res.json();
        }
        // Así que utilizamos otro then
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other['official-artwork'].front_default;
            console.log(pokeImg);
            pokeImage(pokeImg);
        }
    })
}

//fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png");

/*const imprimir = () => {
    console.log(pokeInput);
}*/