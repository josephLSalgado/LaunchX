<template>
    <div class="informacion-pasteleria">
        <table>
            <tr class="encabezados">
                <th>Sucursal</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Horarios</th>
                <th>Síguenos</th>
            </tr>
            <tr class="datos">
                <td>{{ $store.getters.obtenerSucursal }}</td>
                <td>{{ $store.getters.obtenerDireccion }}</td>
                <td>{{ $store.getters.obtenerTelefono }}</td>
                <td>{{ $store.getters.obtenerHorarios }}</td>
                <td class="redes">
                    <img src="../assets/facebook.png" alt="Facebook">
                    <img src="../assets/gorjeo.png" alt="Twitter">
                    <img src="../assets/youtube.png" alt="Youtube">
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'InformacionPasteleria'
}
</script>

<style scoped>
.informacion-pasteleria {
    background-color: #a17f6a;
}

table {
    margin-right: auto;
    margin-left: auto;
}

.encabezados th {
    font-weight: 900;
}

.datos td {
    padding: 10px;
}

.redes img {
    padding-right: 5px;
    padding-left: 5px;
}
</style>