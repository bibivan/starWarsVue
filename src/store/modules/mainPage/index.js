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
      try {
        const response = await axios.get('films/');
        context.commit('updateFilmsList', response.data);
      } catch {
        console.log('ошибка');
      }
    },
  },
  getters: {
    getFilmsList(state) {
      return state.filmsData.results;
    },
  },
};
