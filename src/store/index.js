import { createStore } from 'vuex'

export default createStore({
  state: {
    info: null
  },
  getters: {
  },
  mutations: {
    setInfo (state, data) {
      state.info = data
      localStorage.setItem('INFO', JSON.stringify(data))
    }
  },
  actions: {
  },
  modules: {
  }
})
