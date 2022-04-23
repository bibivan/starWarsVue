import API_BASE_URL from '@/config';
import axios from 'axios';

export default {
  state() {
    return {
      flimsList: false,
      productItem: null,
    };
  },
  mutations: {
    updateFilmsList(state, data) {
      state.productItem = data;
    },
  },
  actions: {
    async loadFilmsList(context, id) {
      try {
        const response = await axios.get(API_BASE_URL + '/api/products/' + id);
        context.commit('updateProductItem', response.data);
      } catch {
        context.commit('setProductLoadingFailed', 'Не удалось загрузить список фильмов');
      }
    },
  },
  getters: {
    productLoadingFailed(state) {
      return state.productLoadingFailed;
    },
    productItem(state) {
      return state.productItem;
    },
  },
};
