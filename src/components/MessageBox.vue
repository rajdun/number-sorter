<template>
  <div id="message-box" :class="{
    'info': messageType == MessageType.Info,
    'warning': messageType == MessageType.Warning,
    'error': messageType == MessageType.Error,
    'success': messageType == MessageType.Success,
  }">
    <div class="info">
        <h1 class="title">{{ title }}</h1>
        <p class="message">{{ message }}</p>
    </div>
    <div class="button-list">
        <button class="custom-button" v-for="button in buttons" :key="button.text" @click="button.onClick">
            {{ button.text }}
        </button>
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

export class CustomButton {
  text: string;

  onClick: () => void;

  constructor(text: string, onClick: () => void) {
    this.text = text;
    this.onClick = onClick;
  }
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
    buttons: {
      type: Array,
      default: () => [],
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
  background: #fff
  box-shadow 0 0 10px 0 rgba(0, 0, 0, 0.5)
  z-index 9999
  display flex
  flex-direction column

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
  color: #242424

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

.left-side
  background black
  top 0
  bottom 0
  left 0
  width 1rem

.info
  &>div>.title
    color: #3498db

.warning
  &>div>.title
    color: #f1c40f

.error
  &>div>.title
    color: #e74c3c

.info
  flex: 8

.success
  &>div>.title
    color: #2ecc71

.button-list
  display: flex
  justify-content: center
  margin: 1rem 0
  flex 2
</style>
