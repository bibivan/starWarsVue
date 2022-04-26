<template>
  <div class="film">
    <div class="film_image-wrapper">
      <img class="film_img" :src="itemImage"
           :alt="film.title">
    </div>
    <div class="film_description">
      <div class="film_name body-17 no-margin">
        {{ film.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmCard',
  props: ['film'],
  data() {
    return {
      posterNumber: 1,
    };
  },
  computed: {
    itemImage() {
      return `/img/posters/poster-${this.film.episode_id}.jpg`;
    },
  },
};
</script>
