<template>
  <div class="main mt-16 md:mt-24">
    <div v-parallax.absY="0.3" class="parallax">
      <header></header>
      <nuxt />
      <footer class="mt-16 md:mt-32 text-center text-xs">
        &copy; 2021 seijishukyoproyakyu.
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

.main {
  margin-bottom: 100px;
}

a {
  color: inherit;
  text-decoration: none;
}

_::-webkit-full-page-media,
_:future,
:root .main {
  margin-bottom: calc(400px - 12vw);
}

@screen md {
  html {
    font-size: 18px;
    background-image: url('~assets/img/background/tablet.png');
  }
  _::-webkit-full-page-media,
  _:future,
  :root .main {
    margin-bottom: calc(550px - 12vw);
  }
}

@screen lg {
  html {
    font-size: 22px;
    background-image: url('~assets/img/background/pc.png');
    background-size: 1440px auto;
  }

  _::-webkit-full-page-media,
  _:future,
  :root .main {
    margin-bottom: calc(950px - 15vw);
  }
}
</style>
