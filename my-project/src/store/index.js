import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京'
  },
  actions: {
    change (ctx, city1) {
      ctx.commit('cc', city1)
      console.log(city1)
    }
  },
  mutations: {
    cc (state, city1) {
      state.city = city1
    }
  }
})
