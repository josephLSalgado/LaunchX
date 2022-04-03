<template>
  <div class="sucursales">
    <h1>Todas nuestras sucursales</h1>
    <InformacionPasteleria/>
  </div>
</template>

<script>
import InformacionPasteleria from '@/components/InformacionPasteleria.vue';

export default {
  name: 'SucursalesView',
  components: {
    InformacionPasteleria
  }
}
</script>