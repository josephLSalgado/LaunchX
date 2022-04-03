<template>
  <div class="nosotros">
    <h1>Aquí te explicamos quiénes somos</h1>
    <InformacionPasteleria/>
  </div>
</template>

<script>
import InformacionPasteleria from '@/components/InformacionPasteleria.vue';

export default {
  name: 'NosotrosView',
  components: {
    InformacionPasteleria
  }
}
</script>