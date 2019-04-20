<template>
  <section
    v-parallax="0.2"
    v-parallax.absY="0.2"
    class="container mx-auto px-8 md:px-16"
  >
    <img
      class="block mx-auto w-64 md:w-2/3 md:mt-16 mt-8"
      src="~assets/img/logo.png"
      decoding="async"
    />
    <p class="mt-4 text-white text-base tracking-wide leading-tight">
      seijishukyoproyakyu is a band from<br class="md:hidden" />
      TOKYO, Japan.
    </p>
    <p class="text-2xl md:text-3xl tracking-wide leading-tight">
      Inspired by post-punk, <br class="md:hidden" />
      new wave and <br />
      <u><a href="mailto:seijishukyoproyakyu@gmail.com">your voice.</a></u>
    </p>
    <div class="sns flex mt-8">
      <a href="https://twitter.com/seijishukyo_">
        <img src="~assets/img/icon/twitter.svg" />
      </a>
      <a href="https://instagram.com/seijishukyoproyakyu">
        <img src="~assets/img/icon/insta.svg" />
      </a>
      <a
        href="https://itunes.apple.com/jp/artist/seijishukyoproyakyu/1378521781"
      >
        <img src="~assets/img/icon/applemusic.svg" />
      </a>
      <a href="https://open.spotify.com/artist/60ozgs7oTx67caQnZizM95">
        <img src="~assets/img/icon/spotify.svg" />
      </a>
      <a href="mailto:seijishukyoproyakyu@gmail.com">
        <img src="~assets/img/icon/mail.svg" />
      </a>
    </div>
    <div class="section">
      <span class="title">Profile</span>
      <div class="profile">
        <img class="hidden lg:block" src="~assets/img/profile/pc.png" />
        <img
          class="hidden md:block lg:hidden"
          src="~assets/img/profile/tablet.png"
        />
        <img class="block md:hidden" src="~assets/img/profile/sp.png" />
      </div>
    </div>
    <div class="section">
      <span class="title">Movies</span>
      <div class="youtube_outer w-full">
        <div class="youtube">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xBlXirmJWGc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </div>
        <p class="tracking-wide">Yagi ~ An Awesome Guy ~</p>
      </div>
    </div>
    <div class="section">
      <span class="title">Sounds</span>
      <div class="spotify_outer w-full">
        <div class="spotify">
          <iframe
            src="https://open.spotify.com/embed/artist/60ozgs7oTx67caQnZizM95"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          >
          </iframe>
        </div>
      </div>
    </div>
    <footer class="mt-32 text-center text-xs">
      COPYRIGHTS ALLRIGHTS RESERVED© seijishukyoproyakyu.
    </footer>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
p {
  font-family: 'DIN Alternate Bold';
}

footer {
  font-family: 'DIN Alternate Regular';
}

.sns img {
  @apply mr-4;
  @apply w-8;
}

.title {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  @apply text-2xl;
  @apply mr-0;
  @apply text-right;
  @apply font-semibold;
}

.section {
  @apply mt-10;
  @apply flex;
}

@screen md {
  .title {
    @apply text-4xl;
    @apply mr-4;
  }
  .section {
    @apply mt-20;
  }
}

.profile img {
  @apply max-w-full;
  @apply h-auto;
  box-sizing: border-box;
}

.youtube {
  position: relative;
  padding-top: 55%;
}
.youtube iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.spotify {
  position: relative;
  padding-top: 30%;
}
.spotify iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
