<template>
  <div class="home">
    <StartButton />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import StartButton from '@/components/StartButton.vue';

@Options({
  components: {
    StartButton,
  },
})
export default class HomeView extends Vue { }
</script>

<style lang="stylus" scoped>
.home
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  box-sizing: border-box
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
</style>
