<template>
  <div class="orden">
    <h1>¿Qué vas a ordenar?</h1>
    <DatosCliente/>
    <InformacionPasteleria/>
  </div>
</template>

<script>
import DatosCliente from '@/components/DatosCliente.vue';
import InformacionPasteleria from '@/components/InformacionPasteleria.vue';

export default {
  name: 'OrdenView',
  components: {
    DatosCliente,
    InformacionPasteleria
  }
}
</script>