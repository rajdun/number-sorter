<template>
  <div :class="{ 'align-left': alignLeft, 'align-right': !alignLeft }" id="sorted-field" @mousedown="onClick">
    <div class="index-field" :class="{ 'available': value < 0, 'picked': value > 0 }">{{ index + 1 }}</div>
    <div class="value-field" v-if="value > 0">{{ value }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

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
  margin: 0 0.5rem
.value-field
  line-height: 2rem
.available
  background-color: #fff
  color: #000
.picked
  border: 1px solid #fff
.align-right
  flex-direction: row-reverse
  justify-content: flex-start
  text-align: left
.align-left
  flex-direction: row
  justify-content: flex-end
</style>
