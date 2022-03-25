<template>
  <nav>
    <router-link to="/">
      <img src="./assets/logo.png" alt="Logo D'Joseph" class="logo">
    </router-link> 
    <router-link to="/nosotros">Nosotros</router-link> |
    <router-link to="/sucursales">Sucursales</router-link> |
    <router-link to="/promociones">Promociones</router-link> |
    <router-link to="/sitio-pastelero">Sitio para el pastelero</router-link> |
    <router-link to="/orden">Ordena aquí</router-link> |
    <img src="./assets/lupa.png" alt="Lupa" class="accesos">
    <img src="./assets/usuario-de-perfil.png" alt="Perfil" class="accesos">
    <img src="./assets/carro-de-la-carretilla.png" alt="Carrito" class="accesos">
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #151718;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #151718;
}

nav a.router-link-exact-active {
  color: #9c7157;
}

img.logo {
  width: 75px;
  margin-left: 10px;
  margin-right: 10px;
}

img.accesos {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
