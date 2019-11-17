<template>
  <div class="mb-5</div>">
    <div class="movie">
      <iframe
        title="youtube"
        width="560"
        height="315"
        :src="src"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>
    <p class="tracking-wide">{{ title }} <br />(directed by {{ author }})</p>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    title: String,
    author: String,
    src: String
  }
}
</script>

<style scoped>
.movie {
  position: relative;
  padding-top: 55%;
}
.movie iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
