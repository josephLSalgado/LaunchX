<template>
  <div class="inicio">
    <Eslogan/>
    <Bebidas/>
    <section class="personalizado">
      <h2>Personaliza tu pastel</h2>
      <Sabores class="sabores"/>
      <Adornos class="adornos"/>
    </section>
    <InformacionPasteleria/>
  </div>
</template>

<script>
// @ is an alias to /src
import Eslogan from '@/components/Eslogan.vue';
import InformacionPasteleria from '@/components/InformacionPasteleria.vue';
import Bebidas from '@/components/Bebidas.vue';
import Sabores from '@/components/Sabores.vue';
import Adornos from '@/components/Adornos.vue';

export default {
  name: 'InicioView',
  components: {
    Eslogan,
    Bebidas,
    Sabores,
    Adornos,
    InformacionPasteleria
  }
}
</script>

<style scoped>
h2 {
    font-weight: 900;
    text-decoration: underline;
}

.sabores {
  float: left;
  width: 50%;
}

.adornos {
  float: left;
  width: 50%;
}

.personalizado::after {
  content: "";
  display: table;
  clear: both;
}

@media (max-width: 900px) {
  .sabores,
  .adornos {
    width: 100%;
  }
}
</style>