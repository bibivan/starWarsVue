<template>
  <main class="main">
    <section class="section">
      <div class="container">
        <div class="film">
          <div class="film_image-wrapper">
            <img class="film_img" src="/img/posters/poster-2.jpg"
                 :alt="2">
          </div>
          <div class="film_description">
            <div class="film_name body-17 no-margin">
              {{ 2 }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'FilmPage',
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
