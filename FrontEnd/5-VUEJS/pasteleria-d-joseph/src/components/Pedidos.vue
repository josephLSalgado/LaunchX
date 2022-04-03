<template>
    <div class="pedidos">
        <h2>Pedidos</h2>
        <table>
            <tr class="encabezados">
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>E-mail</th>
                <th v-for="(producto, index) in $store.getters.obtenerPasteles"
                    v-bind:key="index">{{ producto.nombre }}</th>
            </tr>
            <tr v-for="(pedido, index) in $store.getters.obtenerPedidos"
                v-bind:key="index" class="datos">
                <td>{{ pedido.nombre }}</td>
                <td>{{ pedido.telefono }}</td>
                <td>{{ pedido.email }}</td>
                <td v-for="(orden, index) in pedido.orden.pasteles" 
                    v-bind:key="index">
                    {{ orden.cantidad }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Pedidos'
}
</script>

<style scoped>
h2 {
    font-weight: 900;
}

table, td, th {
    border: 1px solid;
}

table {
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;
    border-collapse: collapse;
}

.encabezados th {
    font-weight: 900;
    padding: 3px 20px;
}

.datos td {
    padding: 10px;
}
</style>