import { createStore } from 'vuex'

export default createStore({
  state: {
    sucursal: 'San Luis Potosí',
    direccion: 'Av. Huasteca 295 Col. Lomas de San Luis Potosí Mpo San Luis Potosí CP 78210',
    telefono: '444 833 6496',
    horarios: 'Lun a Dom de 08:30 a 20:30 h'
  },
  getters: {
    obtenerSucursal(state) {
      return state.sucursal;
    },
    obtenerDireccion(state) {
      return state.direccion;
    },
    obtenerTelefono(state) {
      return state.telefono;
    },
    obtenerHorarios(state) {
      return state.horarios;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
