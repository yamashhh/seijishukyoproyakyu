<template>
  <div class="main mt-16 md:my-24 mb-32">
    <div v-parallax.absY="0.3" class="parallax">
      <header></header>
      <nuxt />
      <footer class="mt-32 text-center text-xs">
        COPYRIGHTS ALLRIGHTS RESERVED© seijishukyoproyakyu.
      </footer>
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #0078cf;

  background-position-x: center;
  background-image: url('~assets/img/background/sp.png');
  background-attachment: scroll;
  background-size: 100% auto;
  color: #fffce0;
  background-repeat: repeat-y;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  color: inherit;
}

@screen md {
  html {
    font-size: 18px;
    background-image: url('~assets/img/background/tablet.png');
  }
}

@screen lg {
  html {
    font-size: 22px;
    background-image: url('~assets/img/background/pc.png');
    background-size: 1440px auto;
  }
}
</style>
