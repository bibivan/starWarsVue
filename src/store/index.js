import Vue from 'vue';
import Vuex from 'vuex';
import mainPage from './modules/mainPage';

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      loading: false,
    };
  },
  mutations: {
    loadingOn(state) {
      state.loading = true;
    },
    loadingOff(state) {
      state.loading = false;
    },
  },
  actions: {
  },
  getters: {
    getLoadingStatus(state) {
      return state.loading;
    },
  },
  modules: {
    mainPage,
  },
});
