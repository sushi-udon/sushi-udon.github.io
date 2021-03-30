<template>
  <div class="layout">
    <GlobalHeader />
    <div class="layout__main"
      :style="{backgroundColor: this.colorValue}"
    >
      <div class="colorFlipperBlock">
        <h2 class="colorFlipperBlock__title">
          background color
          <span class="colorValue">{{ this.colorValue }}</span>
        </h2>
      </div>

      <div class="colorFlipperEditButton" @click="getBackgroundColor()">
        <span class="colorFlipperEditButton__contents">CLICK ME</span>
      </div>
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

export default class ColorFlipper extends Vue {
  private colorValue?: string = '#FFF';

  // カラーコードをランダムに取得する
  private getBackgroundColor() {
    // カラーコードをランダムに取得する
    // 参考URL：https://qiita.com/frost_star/items/9b39be94101b1fe58592
    let r = (0 + Math.floor(Math.random() * 255).toString(16)).slice(-2);
    let g = ('0' + Math.floor(Math.random() * 255).toString(16)).slice(-2);
    let b = ('0' + Math.floor(Math.random() * 255).toString(16)).slice(-2);

    return this.colorValue = '#' + r + g + b;
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;

  .globalHeader {
    width: 30rem;
    height: 100vh;
  }

  &__main {
    width: 100%;
    padding: 2.4rem 3.6rem 0;
  }
}

.colorFlipper {
  &Block {
    background: #333;
    border-radius: 3rem;
    margin: 0 auto 2.4rem;
    padding: 3rem;
    box-shadow: 0 0 1rem rgba(#888, 10);

    &__title {
      color: white;
      font-size: 1.6rem;

      > .colorValue:before {
        content: ':';
        margin: 0 1rem;
      }
    }
  }

  &EditButton {
    width: fit-content;
    margin: 0 auto;
    padding: .8rem 1.6rem;
    border: .1rem solid #000;
    border-radius: .8rem;
    cursor: pointer;

    &:hover {
      opacity: .6;
      transition: .3s ease;
    }

    &__contents {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
}
</style>
