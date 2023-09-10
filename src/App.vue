<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
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
  @media (max-width: 600px)
    font-size: 12px
  @media (min-width: 600px)
    font-size: 12px
  @media (min-width: 768px)
    font-size: 14px
  @media (min-width 922px)
    font-size: 14px
  @media (min-width: 1200px)
    font-size: 16px
</style>
