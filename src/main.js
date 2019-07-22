import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations:{
    getCount(state,data){
      state.count += data;
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
