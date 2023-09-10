<template>
  <div id="game">
    <NavBar />
    <RandomNumberDisplay :randomNumber="randomNumber" @mousedown="onMouseDown" @transition="transitionChanged"
      ref="randomNumberDisplayRef" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import RandomNumberDisplay from '@/components/RandomNumberDisplay.vue';
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'GameView',
  components: {
    NavBar,
    RandomNumberDisplay,
  },
  setup() {
    const randomNumberDisplayRef = ref<InstanceType<typeof RandomNumberDisplay> | null>(null);
    return {
      randomNumberDisplayRef,
    };
  },
  data() {
    return {
      randomNumber: 1000,
      isTransitioning: false,
    };
  },
  methods: {
    onMouseDown() {
      if (!this.isTransitioning) {
        this.randomNumber = Math.floor(Math.random() * 1000);

        if (this.randomNumberDisplayRef) {
          this.randomNumberDisplayRef.handleChange();
        }
      }
    },
    transitionChanged(e: boolean) {
      this.isTransitioning = e;
    },
  },
});
</script>

<style lang="stylus" scoped>
</style>
