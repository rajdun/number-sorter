<template>
  <div id="message-box" :class="{
    'info': messageType == MessageType.Info,
    'warning': messageType == MessageType.Warning,
    'error': messageType == MessageType.Error,
    'success': messageType == MessageType.Success,
  }">
    <div>
      <h1 class="title">{{ title }}</h1>
      <p class="message">{{ message }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// eslint-disable-next-line no-shadow
export enum MessageType {
  Info,
  Warning,
  Error,
  Success,
}

export default defineComponent({
  name: 'MessageBox',
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    messageType: {
      type: Number,
      default: MessageType.Info,
      validator: (value: number) => [MessageType.Info, MessageType.Warning, MessageType.Error].includes(value),
    },
  },
  setup() {
    return {
      MessageType,
    };
  },
  data() {
    return {};
  },
  emits: [],
  methods: {},
});
</script>

<style lang="stylus" scoped>
#message-box
  position: fixed
  top: 33%
  bottom: 33%
  border-radius: 1rem
  border: 1px solid #e8eaed
  background: rgba(36, 36, 36, 0.9)
  box-shadow 0 0 10px 0 rgba(0, 0, 0, 0.5)
  z-index 9999

  @media (max-width: 600px)
    right: 10%
    left: 10%
  @media (min-width: 600px)
    right: 20%
    left: 20%
  @media (min-width: 768px)
    right: 30%
    left: 30%
  @media (min-width 922px)
    right: 33%
    left: 33%
  @media (min-width: 1200px)
    right: 33%
    left: 33%

.title
  text-align: center
  font-size: 1.5rem
  font-weight: bold
  margin: 1rem 0

.message
  text-align: center
  font-size: 1rem
  margin: 1rem 0

.custom-button
  background: #242424
  color: #e8eaed
  border: 1px solid #e8eaed
  border-radius: 20em
  padding: 1em 2em
  cursor: pointer
  transition: all 0.3s ease
  &:hover
    background: #e8eaed
    color: #242424

.info
  &>div>.title
    color: rgba(52, 152, 219, 1)

.warning
  &>div>.title
    color: rgba(241, 196, 15, 1)

.error
  &>div>.title
    color: rgba(231, 76, 60, 1)

.success
  &>div>.title
    color: rgba(46, 204, 113, 1)
</style>
