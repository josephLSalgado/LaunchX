<template>
    <div class="bebidas">
        <h2>Bebidas</h2>
        <ul class="imagen detalles">
            <!-- Renderizado de una lista con un objeto-->
            <li v-for="(producto, key, index) in $store.getters.obtenerBebidas"
                v-bind:key="index">
                <img v-bind:src="producto.foto" v-bind:alt="producto.nombre"
                    class="imagen">
                <div class="acomodo-detalles">
                    <div class="detalles-producto">
                        <p>{{ producto.nombre }}</p>
                        <span>{{ producto.precio }}</span>
                    </div>
                    <div class="compra-producto">
                        <button>
                            <img src="@/assets/carro-de-la-carretilla.png" 
                                alt="Carrito" class="compra">
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Bebidas'
}
</script>

<style scoped>
h2 {
    font-weight: 900;
}

ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style-type: none;
    padding: 0;
    margin-right: 20px;
    margin-left: 20px;
}

li {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
    padding-left: 10px;
}

img.imagen{
    width: 250px;
    margin-top: 10px;
}

img.compra {
    width: 16px;
}

.detalles li p {
    margin: 8px 0px;
}

span {
    font-weight: bold;
}

.acomodo-detalles {
    display: inline-flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    width: 100%;
}

button {
    border: 2px solid #9c7157;
    background-color: white;
    border-radius: 4px;
    padding: 5px 20px;
    cursor: pointer;
}
</style>