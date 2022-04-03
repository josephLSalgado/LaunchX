import { createStore } from 'vuex'

export default createStore({
  state: {
    sucursal: 'San Luis Potosí',
    direccion: 'Av. Huasteca 295 Col. Lomas de San Luis Potosí Mpo San Luis Potosí CP 78210',
    telefono: '444 833 6496',
    horarios: 'Lun a Dom de 08:30 a 20:30 h',
    productos: {
      pasteles: {
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
      },
      bebidas: {
        0: {
          nombre: 'Chocolate',
          foto: 'https://cdn.shopify.com/s/files/1/0262/5080/5306/products/chocolate-1_600x.jpg?v=1618807049',
          precio: '$48.00'
        },
        1: {
          nombre: 'Tisana Relax',
          foto: 'https://cdn.shopify.com/s/files/1/0262/5080/5306/products/tisana-relax-1_600x.jpg?v=1618807881',
          precio: '$43.00'
        },
        2: {
          nombre: 'Cappuccino',
          foto: 'https://cdn.shopify.com/s/files/1/0262/5080/5306/products/cappuccino-1_600x.jpg?v=1618806745',
          precio: '$45.00'
        },
        3: {
          nombre: 'Café Americano',
          foto: 'https://cdn.shopify.com/s/files/1/0262/5080/5306/products/americano-1_600x.jpg?v=1618806696',
          precio: '$32.00'
        }
      },
      sabores: {
        0: {
          nombre: 'Vainilla',
          foto: require('@/assets/vainilla.jpg'),
          precio: '$50.00'
        },
        1: {
          nombre: 'Nuez',
          foto: require('@/assets/nuez.jpg'),
          precio: '$45.00'
        },
        2: {
          nombre: 'Chocolate',
          foto: require('@/assets/chocolate.jpg'),
          precio: '$38.00'
        },
        3: {
          nombre: 'Almendra',
          foto: require('@/assets/almendra.jpg'),
          precio: '$65.00'
        },
        4: {
          nombre: 'Rompope',
          foto: require('@/assets/rompope.jpg'),
          precio: '$32.00'
        }
      },
      adornos: {
        0: {
          nombre: 'Cumpleaños',
          foto: require('@/assets/birthday.jpg'),
          precio: '$19.00'
        },
        1: {
          nombre: 'Chantilly',
          foto: require('@/assets/chantilly.jpg'),
          precio: '$32.00'
        },
        2: {
          nombre: 'Chocolate',
          foto: require('@/assets/choco-adorno.jpg'),
          precio: '$39.00'
        },
        3: {
          nombre: 'Navideño',
          foto: require('@/assets/navideño.jpg'),
          precio: '$25.00'
        },
        4: {
          nombre: 'Boda',
          foto: require('@/assets/boda.jpg'),
          precio: '$25.00'
        }
      }
    },
    cliente: [],
    pedido: {
      pasteles: {
        0: {
          nombre: 'Pastel Pingüino',
          cantidad: 0
        },
        1: {
          nombre: 'Salón intenso individual',
          cantidad: 0
        },
        2: {
          nombre: 'Pastel Durazno',
          cantidad: 0
        },
        3: {
          nombre: 'Pastel Baileys',
          cantidad: 0
        }
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
    obtenerPasteles(state) {
      return state.productos.pasteles;
    },
    obtenerBebidas(state) {
      return state.productos.bebidas;
    },
    obtenerSabores(state) {
      return state.productos.sabores;
    },
    obtenerAdornos(state) {
      return state.productos.adornos;
    }
  },
  mutations: {
    agregarCantidad(state, index) {
      state.pedido.pasteles[index].cantidad++;
    },
    eliminarCantidad(state, index) {
      if (state.pedido.pasteles[index].cantidad != 0) {
        state.pedido.pasteles[index].cantidad--;
      }
    },
    ordenarPedido(state) {
      let _nombre = document.getElementById("nombre").value;
      let _telefono = document.getElementById("telefono").value;
      let _correo = document.getElementById("correo").value;
      let pedido = 0;

      if (estaVacia(_nombre) || estaVacia(_telefono) || estaVacia(_correo)) {
        alert("Llena los campos");
      } else {
        for(let i = 0; i < 4; i++) {
          if (state.pedido.pasteles[i].cantidad == 0) {
            pedido++;
          }
        }

        if(pedido < 4) {
          let nuevoPedido = [{
            nombre: _nombre,
            telefono: _telefono,
            email: _correo,
            orden: {
              pasteles: {
                0: {
                  nombre: 'Pastel Pingüino',
                  cantidad: state.pedido.pasteles[0].cantidad
                },
                1: {
                  nombre: 'Salón intenso individual',
                  cantidad: state.pedido.pasteles[1].cantidad
                },
                2: {
                  nombre: 'Pastel Durazno',
                  cantidad: state.pedido.pasteles[2].cantidad
                },
                3: {
                  nombre: 'Pastel Baileys',
                  cantidad: state.pedido.pasteles[3].cantidad
                }
              }
            }
          }];

          state.cliente.push(nuevoPedido);

          for (let i = 0; i < 4; i++) {
            state.pedido.pasteles[i].cantidad = 0;
          }
        } else {
          alert("¡No has ordenado nada! :(");
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

// Función que ayuda a saber si la cadena no está vacía o solo tienes espacios
function estaVacia(str) {
  return !str.trim().length;
}