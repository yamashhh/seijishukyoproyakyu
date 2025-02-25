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
        <img class="hidden lg:block" :src="profile_pc" alt="profile" />
        <img
          class="hidden md:block lg:hidden"
          :src="profile_tablet"
          alt="profile"
        />
        <img class="block md:hidden" :src="profile_sp" alt="profile" />
      </div>
    </div>
    <div class="section">
      <span class="title">Tweets</span>
      <div class="w-full">
        <a
          data-height="500"
          class="twitter-timeline"
          href="https://twitter.com/seijishukyo_?ref_src=twsrc%5Etfw"
        >
          Tweets by seijishukyo_
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </div>
    </div>
    <div class="section">
      <span class="title">Movies</span>
      <div class="movie_outer w-full">
        <client-only>
          <movie
            v-for="movie in movies"
            :key="movie.src"
            :title="movie.title"
            :author="movie.author"
            :src="movie.src"
          />
        </client-only>
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
    <div class="section">
      <span class="title">Merchandise</span>
      <div>
        <a href="https://store.line.me/stickershop/product/10663855">
          <div class="flex flex-row justify-between w-full">
            <v-lazy-image
              class="w-1/3 h-auto self-start"
              :src="require('~/assets/img/merchandise/stamp1.jpg')"
              :src-placeholder="placeholder"
            />
            <v-lazy-image
              class="w-1/3 h-auto self-start"
              :src="require('~/assets/img/merchandise/stamp2.jpg')"
              :src-placeholder="placeholder"
            />
            <v-lazy-image
              class="w-1/3 h-auto self-start"
              :src="require('~/assets/img/merchandise/stamp3.jpg')"
              :src-placeholder="placeholder"
            />
          </div>
          <div>公式LINEスタンプ</div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import VLazyImage from 'v-lazy-image'
import movie from '../components/movie'

export default {
  comments: {
    movie
  },
  components: { movie, VLazyImage },
  data: function() {
    const placeholder =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=='
    return {
      placeholder: placeholder,
      profile_sp: placeholder,
      profile_tablet: placeholder,
      profile_pc: placeholder,
      movies: []
    }
  },
  async mounted() {
    this.profile_pc = await this.$fireStorage
      .ref('profile/pc.png')
      .getDownloadURL()
    this.profile_tablet = await this.$fireStorage
      .ref('profile/tablet.png')
      .getDownloadURL()
    this.profile_sp = await this.$fireStorage
      .ref('profile/sp.png')
      .getDownloadURL()

    const snapshot = await this.$fireStore
      .collection('movies')
      .orderBy('timestamp', 'desc')
      .get()
    snapshot.forEach(doc => {
      this.movies.push(doc.data())
    })
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
