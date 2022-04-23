<template>
  <div class="film">
    <div class="film_name body-17 no-margin">
      {{ film.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmCard',
  props: ['film'],
};
</script>
