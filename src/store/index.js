import Vue from 'vue'
import Vuex from 'vuex'
import workers from '@/store/workers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    workers
  }
})
