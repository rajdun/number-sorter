<template>
  <div id="app">
    <HomeView />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HomeView from './views/HomeView.vue';

@Options({
  components: {
    HomeView,
  },
})

export default class App extends Vue { }
</script>

<style lang="stylus">
// variables
$background = #242424
$text = #e8eaed

body
  font-family: 'Lato', sans-serif
  background: $background
  color: $text
  overflow hidden
</style>
