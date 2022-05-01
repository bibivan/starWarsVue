import axios from 'axios';

export default {
  state() {
    return {
      filmsData: [],
    };
  },
  mutations: {
    updateFilmsList(state, data) {
      state.filmsData = data;
    },
  },
  actions: {
    async loadFilmsList(context) {
      context.root.commit('loadingOn');
      try {
        const response = await axios.get('films/');
        context.commit('updateFilmsList', response.data);
      } catch {
        console.log('ошибка');
      }
      context.root.commit('loadingOff');
    },
  },
  getters: {
    getFilmsList(state) {
      return state.filmsData.results;
    },
  },
};
