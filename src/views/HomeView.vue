<template>
  <div class="home">
    <StartButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StartButton from '@/components/StartButton.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    StartButton,
  },
});
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
