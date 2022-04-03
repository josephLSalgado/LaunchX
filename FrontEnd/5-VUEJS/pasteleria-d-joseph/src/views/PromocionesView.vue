<template>
  <div class="promociones">
    <h1>Aprovecha nuestras promociones</h1>
    <InformacionPasteleria/>
  </div>
</template>

<script>
import InformacionPasteleria from '@/components/InformacionPasteleria.vue';

export default {
  name: 'PromocionesView',
  components: {
    InformacionPasteleria
  }
}
</script>