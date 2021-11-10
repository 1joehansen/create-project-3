import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import players from './mock-data.js'
import players2 from './mock-data.js'

let data = {
  players: players,
  players_og: players2,
  cart: [],
  team_a : [],
  team_b : [],
  featured: 18 
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')