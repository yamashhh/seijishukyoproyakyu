<template>
  <div>
    <nuxt />
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
  background-attachment: fixed;
  background-size: 100% auto;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

@screen md {
  html {
    background-image: url('~assets/img/background/tablet.png');
  }
}

@screen lg {
  html {
    background-image: url('~assets/img/background/pc.png');
    background-size: 1440px auto;
  }
}
</style>
