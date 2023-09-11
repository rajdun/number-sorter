<template>
  <div id="start-button">
    <button @click="$router.push('/game')">START</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StartButton',
});
</script>
<style lang="stylus" scoped>
#start-button
  text-align: center
  button
    background: #242424
    color: #e8eaed
    border: 1px solid #e8eaed
    border-radius: 20em
    padding: 1em 2em
    cursor: pointer
    transition: all 0.3s ease
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5)
    &:hover
      background: #e8eaed
      color: #242424
    &:active
      box-shadow: none

    // font size based on screen size
    @media (max-width: 600px)
      font-size: 25px
    @media (min-width: 600px)
      font-size: 30px
    @media (min-width: 768px)
      font-size: 35px
    @media (min-width 922px)
      font-size: 40px
    @media (min-width: 1200px)
      font-size: 50px
</style>
