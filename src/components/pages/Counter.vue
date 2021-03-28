<template>
  <div class="layout">
    <GlobalHeader />
    <div class="layout__main counter">
      <h2 class="counter__title">Counter</h2>
      <p class="counter__number">{{ this.counterNumber }}</p>

      <ul class="counter__list">
        <li class="item" @click="numberDecrase()">DECREASE</li>
        <li class="item" @click="numberReset()">RESET</li>
        <li class="item" @click="numberIncrease()">INCREASE</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import GlobalHeader from '@/components/organisms/GlobalHeader.vue';

@Options({
  components: {
    GlobalHeader,
  },
})

export default class Counter extends Vue {
  private counterNumber = 0;

  // counterNumber の数を1つ減らす
  private numberDecrase() {
    // counterNumber が0以上の時に、作動する
    if (this.counterNumber > 0) {
      return this.counterNumber--;
    }
  }

  // counterNumber をリセットする
  private numberReset() {
    return this.counterNumber = 0;
  }

  // counterNumber の数を1つ増やす
  private numberIncrease() {
    return this.counterNumber++;
  }
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  display: flex;

  &__main {
    width: 75%;
    padding: 2.4rem 3.6rem 0;
    background: #f0f8ff;
  }
}

.globalHeader {
  width: 25%;
}

.counter {
  &__title {
    font-size: 4.8rem;
    text-align: center;
    margin-bottom: 1.6rem;
  }

  &__number {
    font-size: 6rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1.8rem;
  }

  &__list {
    width: 40rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    cursor: pointer;

    > .item {
      font-weight: bold;
      letter-spacing: .4rem;
      border: .2rem solid black;
      border-radius: .8rem;
      padding: .8rem 1.6rem;
      background: #CCC;

      &:hover {
        opacity: .6;
      }
    }
  }
}
</style>
