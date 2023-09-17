<template>
  <div id="random-number-display" :class="{'animate':isTransitioning}" @mousedown="handleClick">
    <div v-for="(number, index) in randomNumberList" :key="index">{{number}}</div>
    <div>{{randomNumber}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RandomNumberDisplay',
  props: {
    randomNumber: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isTransitioning: false,
      randomNumberList: Array.from({ length: 20 }, () => Math.floor(Math.random() * 1000)),
    };
  },
  methods: {
    animationFunction(x: number) {
      const exp = Math.floor(5 * Math.exp(-0.2 * (x - 26)));
      return Math.random() ? exp : -exp;
    },
    limitByRange(value: number, min: number, max: number) {
      return Math.max(min, Math.min(max, value));
    },
    transition() {
      this.isTransitioning = false;
      this.randomNumberList = Array.from({ length: 20 }, () => Math.floor(Math.random() * 1000));
      this.randomNumberList[0] = this.randomNumber;
      this.$emit('transition', this.isTransitioning);
    },
    handleChange() {
      setTimeout(this.transition, 9001);
      this.isTransitioning = true;
      this.$emit('transition', this.isTransitioning);
    },
    handleClick() {
      this.$emit('mousedown');
    },
  },
});
</script>

<style lang="stylus" scoped>
@keyframes toLeft100
  0%
    transform translateX(0)
  100%
    transform translateX(-100vw * 20)

.animate
  animation toLeft100 9s cubic-bezier(0, 0.55, 0.45, 1) forwards

#random-number-display
  display flex
  width 100vw
  div
    text-align: center
    font-weight: bold
    flex 0 0 100vw

    @media (max-width: 600px)
      font-size: 100px

    @media (min-width: 600px)
      font-size: 150px

    @media (min-width: 768px)
      font-size: 200px

    @media (min-width: 922px)
      font-size: 250px

    @media (min-width: 1200px)
      font-size: 300px
</style>
