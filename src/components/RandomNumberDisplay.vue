<template>
  <div id="random-number-display">
    <span @mousedown="handleClick">{{ displayNumber }}</span>
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
      displayNumber: this.randomNumber,
      isTransitioning: false,
      cycles: 26,
      currentCycle: 0,
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
      if (this.currentCycle < this.cycles) {
        this.currentCycle += 1;
        this.displayNumber = this.limitByRange(this.randomNumber - this.animationFunction(this.currentCycle), 0, 1000);
        setTimeout(this.transition, (this.currentCycle * this.currentCycle * 1.08));
      } else {
        this.isTransitioning = false;
        this.currentCycle = 0;
        this.displayNumber = this.randomNumber;
        this.$emit('transition', this.isTransitioning);
      }
    },
    handleChange() {
      this.transition();
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
#random-number-display
  text-align: center
  span
    font-weight: bold
    @media (max-width: 600px)
      font-size: 100px
    @media (min-width: 600px)
      font-size: 150px
    @media (min-width: 768px)
      font-size: 200px
    @media (min-width 922px)
      font-size: 250px
    @media (min-width: 1200px)
      font-size: 300px

.isTransitioning
  color: black
</style>
