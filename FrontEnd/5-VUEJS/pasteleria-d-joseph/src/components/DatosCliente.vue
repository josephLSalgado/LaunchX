<template>
    <section class="datos-cliente">
        <div class="datos">
            <h2>Datos</h2>
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre">
            <label for="telefono">Télefono</label>
            <input type="tel" name="telefono" id="telefono">
            <label for="correo">Correo Electrónico</label>
            <input type="email" name="correo" id="correo">
        </div>
        <div class="orden">
            <Pasteles/>
        </div>
        <div class="pedido">
            <button v-on:click="$store.commit('ordenarPedido')">Ordenar</button>
        </div>
    </section>
</template>

<script>
import Pasteles from '@/components/Pasteles.vue';

export default {
    name: 'DatosCliente',
    components: {
        Pasteles
    }
}
</script>

<style scoped>
h2 {
    font-weight: 900;
}

.datos {
    float: left;
    width: 30%;
    display: inline-flex;
    flex-direction: column;
}

.orden {
    float: left;
    width: 70%;
}

input {
    margin: 10px 15px;
    border: 2px solid #9c7157;
    border-radius: 4px;
    width: 80%;
    font-size: 18px;
}

label {
    text-align: left;
    margin: 0px 25px;
    font-weight: bold;
}

section::after {
    content: "";
    display: table;
    clear: both;
}

button {
    border: 2px solid #9c7157;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
    padding: 5px 20px;
    cursor: pointer;
}

@media (max-width: 900px) {
    .datos,
    .orden {
        width: 100%;
    }
}
</style>