<template>
  <div :class="{ 'align-left': alignLeft, 'align-right': !alignLeft }" id="sorted-field" @mousedown="onClick">
    <div class="index-field" :class="{ 'available': value < 0, 'picked': value > 0 }">{{ index + 1 }}</div>
    <div class="value-field" :class="{ 'enter-from-left': alignLeft, 'enter-from-right': !alignLeft }" v-if="value > 0">{{ value }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SortedField',
  setup() {
    return {
    };
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    alignLeft: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  emits: ['onMouseDown'],
  methods: {
    onClick() {
      this.$emit('onMouseDown', this.index);
    },
  },
});
</script>

<style lang="stylus" scoped>
@keyframes fromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
@keyframes fromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}

#sorted-field
  display: flex
  margin: 0.5rem 0
  align-items: center
  justify-content: space-between
  cursor: pointer
  width: 100%
.index-field
  width: 2rem
  height: 2rem
  padding: 0.2rem
  display: flex
  justify-content: center
  align-items: center
  border-radius: 0.7rem
  font-size: 1.5rem
  font-weight: bold
  z-index 2
  box-shadow 0 0 10px 0 rgba(0, 0, 0, 0.5)
  transition: transform 0.2s ease-out
  background: #242424
  &:hover
    transform: scale(1.1)
    box-shadow 0 0 12px 0 rgba(0, 0, 0, 0.5)
.value-field
  line-height: 2rem
  z-index 0
  border-top 1px solid #e8eaed
  border-bottom 1px solid #e8eaed
  padding: 0 0.5rem
  &.enter-from-left
    animation: fromLeft 0.2s ease-out
  &.enter-from-right
    animation: fromRight 0.2s ease-out
.available
  background-color: #fff
  color: #000
.picked
  border: 1px solid #fff
  -webkit-box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.75);
  box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.75);
.align-right
  flex-direction: row-reverse
  justify-content: flex-start
  text-align: left
  &>.value-field
    border-left 1px solid #e8eaed
    border-top-left-radius 0.7rem
    border-bottom-left-radius 0.7rem
    box-shadow inset 0px 0px 5px 0px rgba(0,0,0,0.75);
.align-left
  flex-direction: row
  justify-content: flex-end
  &>.value-field
    border-right 1px solid #e8eaed
    border-top-right-radius 0.7rem
    border-bottom-right-radius 0.7rem
    box-shadow inset 0px 0px 5px 0px rgba(0,0,0,0.75);
</style>
