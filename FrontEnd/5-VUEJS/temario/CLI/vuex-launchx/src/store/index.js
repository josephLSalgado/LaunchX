import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0
  },
  getters: {
    // Obtener información de los estados
    cuadrado(state) {
      return state.contador * state.contador;
    }
  },
  mutations: {
    // Cambiar estados - commit
    subirContador(state, random) {
      state.contador+=random;
    },
    /*bajarContador(state) {
      state.contador--;
    }*/
    bajarContador(state, random) {
      state.contador-=random;
    }
  },
  actions: {
    // Se puede utilizar código asíncrono y llamarse directamente de los
    // componentes - dispatch
    async subirContador({ commit }) {
      const res = await fetch("https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new");
      const results = await res.json();
      console.log(results);
      commit("subirContador", results);
    },

    async bajarContador({ commit }) {
      const res = await fetch("https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new");
      const results = await res.json();
      console.log(results);
      commit("bajarContador", results);
    }
  },
  modules: {
  }
})
