<template>
  <div id="navbar">
    <button class="navbar-button" @click="$router.push('/')">Home</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
});
</script>

<style lang="stylus" scoped>
.navbar-button
  background: #242424
  color: #e8eaed
  border: none
  cursor: pointer
  font-size: inherit
  transition color 0.3s ease
  &:hover
    color: darken(#e8eaed, 10%)
</style>
