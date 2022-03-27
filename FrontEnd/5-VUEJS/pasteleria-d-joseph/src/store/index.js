import { createStore } from 'vuex'

export default createStore({
  state: {
    sucursal: 'San Luis Potosí',
    direccion: 'Av. Huasteca 295 Col. Lomas de San Luis Potosí Mpo San Luis Potosí CP 78210',
    telefono: '444 833 6496',
    horarios: 'Lun a Dom de 08:30 a 20:30 h',
    productos: {
      0: {
        nombre: 'Pastel Pingüino',
        foto: 'https://cdn.shopify.com/s/files/1/0262/5080/5306/products/497982-1_600x.jpg?v=1618602708',
        precio: '$418.00'
      },
      1: {
        nombre: 'Salón intenso individual',
        foto: 'https://cdn.shopify.com/s/files/1/0262/5080/5306/products/27167-1_600x.jpg?v=1618602784',
        precio: '$42.00'
      },
      2: {
        nombre: 'Pastel Durazno',
        foto: 'https://cdn.shopify.com/s/files/1/0262/5080/5306/products/497131-1_600x.jpg?v=1618602666',
        precio: '$618.00'
      },
      3: {
        nombre: 'Pastel Baileys',
        foto: 'https://cdn.shopify.com/s/files/1/0262/5080/5306/products/497440-1_600x.jpg?v=1620877558',
        precio: '$518.00'
      }
    }
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
    },
    obtenerProductos(state) {
      return state.productos;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
