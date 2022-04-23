<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <a class="site-logo" href="#">
          star wars
        </a>
      </div>
    </header>
    <router-view/>

    <div class="stars"></div>
    <div class="twinkling"></div>
  </div>
</template>

<script>
</script>

<style lang="scss">

@font-face {
  font-family: 'AnakinmonoRegular';
  src: url('./assets/fonts/AnakinmonoRegular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'StarJedi';
  src: url('./assets/fonts/StarJedi.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'StarJediHollow';
  src: url('./assets/fonts/StarJediHollow.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@import "./assets/scss/style";
</style>
