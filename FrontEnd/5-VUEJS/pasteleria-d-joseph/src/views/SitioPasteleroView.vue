<template>
  <div class="sitio-pastelero">
    <h1>Checa tu inventario pastelero</h1>
    <Pedidos/>
    <InformacionPasteleria/>
  </div>
</template>

<script>
import Pedidos from '@/components/Pedidos.vue';
import InformacionPasteleria from '@/components/InformacionPasteleria.vue';

export default {
  name: 'SitioPasteleroView',
  components: {
    Pedidos,
    InformacionPasteleria
  }
}
</script>