<template>
  <div class="main">
    <section class="section">
      <div class="container">
        <h1 class="h2">Episodes</h1>
        <div class="flex-grid wrap">
          <div class="col w-33" v-for="film in films" :key="film.id">
            <FilmCard :film="film"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import FilmCard from '../components/FilmsCard/FilmCard.vue';

export default {
  name: 'MainPage',
  components: { FilmCard },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      films: 'getFilmsList',
    }),
  },
  methods: {
    ...mapActions([
      'loadFilmsList',
    ]),
  },
  created() {
    this.loadFilmsList();
  },
};
</script>

<style scoped>

</style>
