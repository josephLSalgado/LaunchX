import { createRouter, createWebHashHistory } from 'vue-router';
import InicioView from '../views/InicioView.vue';
import NosotrosView from "../views/NosotrosView.vue";
import SucursalesView from "../views/SucursalesView.vue";
import PromocionesView from "../views/PromocionesView.vue";
import SitioPasteleroView from "../views/SitioPasteleroView.vue";
import OrdenView from "../views/OrdenView.vue";


const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: NosotrosView
  },
  {
    path: '/sucursales',
    name: 'sucursales',
    component: SucursalesView
  },
  {
    path: '/promociones',
    name: 'promociones',
    component: PromocionesView
  },
  {
    path: '/sitio-pastelero',
    name: 'sitio-pastelero',
    component: SitioPasteleroView
  },
  {
    path: '/orden',
    name: 'orden',
    component: OrdenView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
