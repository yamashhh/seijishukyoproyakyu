<template>
  <section class="container mx-auto px-8 md:px-16 h-full">
    <picture class="block mx-auto w-64 md:w-2/3">
      <source
        :srcset="require('~/assets/img/logo.png?webp')"
        type="image/webp"
      />
      <source :srcset="require('~/assets/img/logo.png')" type="image/png" />
      <img :src="require('~/assets/img/logo.png')" alt="logo" />
    </picture>
    <p class="mt-4 text-base tracking-wide leading-tight">
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
        <div v-html="require('~/assets/img/icon/twitter.svg?include')"></div>
      </a>
      <a href="https://instagram.com/seijishukyoproyakyu">
        <div v-html="require('~/assets/img/icon/insta.svg?include')"></div>
      </a>
      <a
        href="https://itunes.apple.com/jp/artist/seijishukyoproyakyu/1378521781"
      >
        <div v-html="require('~/assets/img/icon/applemusic.svg?include')"></div>
      </a>
      <a href="https://open.spotify.com/artist/60ozgs7oTx67caQnZizM95">
        <div v-html="require('~/assets/img/icon/spotify.svg?include')"></div>
      </a>
      <a href="mailto:seijishukyoproyakyu@gmail.com">
        <div v-html="require('~/assets/img/icon/mail.svg?include')"></div>
      </a>
    </div>
    <div class="section">
      <span class="title">Profile</span>
      <div class="profile">
        <img
          class="hidden lg:block"
          src="~/assets/img/profile/pc.png"
          alt="profile"
        />
        <img
          class="hidden md:block lg:hidden"
          src="~assets/img/profile/tablet.png"
          alt="profile"
        />
        <img
          class="block md:hidden"
          src="~assets/img/profile/sp.png"
          alt="profile"
        />
      </div>
    </div>
    <div class="section">
      <span class="title">Movies</span>
      <div class="movie_outer w-full">
        <movie
          title="LIVE MOVIE (October 22nd, 2019)"
          author="Yasuyuki Nagano"
          src="https://www.youtube.com/embed/ejJSFNYeUyw"
        />
        <movie
          title="Sex with 感情"
          author="Yasuyuki Nagano"
          src="https://www.youtube.com/embed/ZxQy_M0SFzY"
        />
      </div>
    </div>
    <div class="section">
      <span class="title">Sounds</span>
      <div class="music_outer w-full">
        <div class="music">
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/625362000&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          >
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import movie from '../components/movie'
export default {
  components: { movie },
  comments: {
    movie
  }
}
</script>

<style scoped>
p {
  font-family: 'DIN Alternate Bold';
  font-display: swap;
}

footer {
  font-family: 'DIN Alternate Regular';
  font-display: swap;
}

.sns svg {
  @apply w-8;
}

.sns div {
  @apply mr-4;
}

.title {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  @apply text-2xl;
  @apply mr-2;
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

.music {
  position: relative;
  padding-top: 45%;
}
.music iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
