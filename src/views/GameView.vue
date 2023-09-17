<template>
  <div id="game">
    <NavBar />
    <RandomNumberDisplay :randomNumber="randomNumber" @mousedown="onRandomNumberClick" @transition="transitionChanged"
      ref="randomNumberDisplayRef" />

    <div class="sorted-field-container">
      <div class="sortable-fields">
        <SortedField v-for="(value, index) in sortedNumbers.slice(0, 5)" :key="index" :index="index" :value="value"
          :alignLeft="true" @onMouseDown="onSordetFieldClick" />
      </div>
      <div class="sortable-fields">
        <SortedField v-for="(value, index) in sortedNumbers.slice(5, 10)" :key="index" :index="index + 5" :value="value"
          @onMouseDown="onSordetFieldClick" />
      </div>
    </div>
    <MessageBox
      v-if="gameState === GameStates.Lost"
      title="You lost!"
      message="You lost the game. Try again!"
      messageType="2"
      :buttons="gameButtons.gameLostButtons"
    />
    <MessageBox
      v-if="gameState === GameStates.Won"
      title="You won!"
      message="You won the game. Congratulations!"
      messageType="3"
      :buttons="gameButtons.gameWonButtons"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import RandomNumberDisplay from '@/components/RandomNumberDisplay.vue';
import NavBar from '@/components/NavBar.vue';
import SortedField from '@/components/SortedField.vue';
import MessageBox, { CustomButton } from '@/components/MessageBox.vue';

// eslint-disable-next-line no-shadow
enum GameStates {
  Shuffling,
  Sorting,
  Won,
  Lost,
}

export default defineComponent({
  name: 'GameView',
  components: {
    NavBar,
    RandomNumberDisplay,
    SortedField,
    MessageBox,
  },
  setup() {
    const randomNumberDisplayRef = ref<InstanceType<typeof RandomNumberDisplay> | null>(null);
    return {
      randomNumberDisplayRef,
      GameStates,
    };
  },
  data() {
    return {
      randomNumber: 1000,
      isTransitioning: false,
      sortedNumbers: Array.from(Array(10)).fill(-1),
      gameState: GameStates.Shuffling,
      gameButtons: {
        gameWonButtons: [
          new CustomButton('Play again!', () => {
            this.$router.push('/');
          }),
        ],
        gameLostButtons: [
          new CustomButton('Try again!', () => {
            this.$router.push('/');
          }),
        ],
      },
    };
  },
  methods: {
    onRandomNumberClick() {
      if (!this.isTransitioning && this.gameState === GameStates.Shuffling) {
        this.randomNumber = Math.floor(Math.random() * 1000);
        this.gameState = GameStates.Sorting;
        if (this.randomNumberDisplayRef) {
          this.randomNumberDisplayRef.handleChange();
        }
      }
    },
    transitionChanged(e: boolean) {
      this.isTransitioning = e;
    },
    onSordetFieldClick(a: number) {
      if (!this.canSelectNumber(a)) {
        return;
      }

      this.sortedNumbers[a] = this.randomNumber;
      this.gameState = GameStates.Shuffling;

      if (!this.validateIfNumbersAreSorted()) {
        this.gameState = GameStates.Lost;
      }
    },
    validateIfNumbersAreSorted() {
      const numbers = this.sortedNumbers.filter((n) => n > 0);

      for (let i = 0; i < numbers.length - 1; i += 1) {
        if (numbers[i] > numbers[i + 1]) {
          return false;
        }
      }

      return true;
    },
    canSelectNumber(index: number) {
      if (this.sortedNumbers[index] > 0) {
        return false;
      }

      if (this.isTransitioning) {
        return false;
      }

      return this.gameState === GameStates.Sorting;
    },
  },
});
</script>

<style lang="stylus" scoped>
.sorted-field-container
  display flex
  justify-content space-between
  margin-top 20px
  margin-bottom 20px
  margin-left auto;
  margin-right auto;
  .sortable-fields
    display flex
    flex-direction column
    justify-content space-between
  @media (max-width: 600px)
    width: 100%
  @media (min-width: 600px)
    width: 100%
  @media (min-width: 768px)
    width: 90%
  @media (min-width 922px)
    width: 75%
  @media (min-width: 1200px)
    width: 60%
</style>
