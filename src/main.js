import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    addUser(state, user) {
      state.users.push(user);
    },
  },
  getters: {
    getTopUsers: state => {
      return state.users.slice(1, 5);
    }
  },
});

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
