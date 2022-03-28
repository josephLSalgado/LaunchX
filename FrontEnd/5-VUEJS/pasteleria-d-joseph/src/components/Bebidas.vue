<template>
    <div class="bebidas">
        <h2>Bebidas</h2>
        <ul class="imagen detalles">
            <!-- Renderizado de una lista con un objeto-->
            <li v-for="(producto, key, index) in $store.getters.obtenerBebidas"
                v-bind:key="index">
                <img v-bind:src="producto.foto" v-bind:alt="producto.nombre">
                <p>{{ producto.nombre }}</p>
                <span>{{ producto.precio }}</span>
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

.imagen li img{
    width: 250px;
    margin-top: 10px;
}

.detalles li p {
    margin: 8px 0px;
}

span {
    font-weight: bold;
}

</style>