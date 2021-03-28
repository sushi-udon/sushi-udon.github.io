<template>
  <div class="layout">
    <GlobalHeader />
    <div class="layout__main reviewCarousel">
      <h2 class="reviewCarousel__title">Our Reviews</h2>
      <div class="background">
        <div
          class="block"
          v-for="m in members"
          :key="m.number"
          :class="{ isActive: '-none' }"
        >
          <figure class="reviewCarousel__image">
            <img :src="m.imageFilePath" alt="">
          </figure>
          <div class="reviewCarousel__profile">
            <h3 class="name">{{ m.firstName }}{{ m.lastName }}</h3>
            <p class="position">{{ m.position }}</p>
            <p class="text">{{ m.text }}</p>
          </div>
          <div class="reviewCarousel__button">
            <span class="arrow -left" @click="goPrev()">&lt;</span>
            <span class="arrow -right" @click="goNext()">&gt;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import GlobalHeader from '@/components/organisms/GlobalHeader.vue';
import OurData from '@/json/ReviewCarousel/members.json';

@Options({
  components: {
    GlobalHeader,
  },
})

export default class ReviewCarousel extends Vue {
  private members = OurData;
  private isActive = false;

  // 「<」をクリックしたときに、前の情報を表示させる
  private goPrev() {
    this.isActive = true;
  }

  // 「＞」をクリックしたときに、次の情報を表示させる
  private goNext() {
    this.isActive = false;
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
    background: rgba(#2AAB9F, .5);
  }
}

.globalHeader {
  width: 25%;
  height: 100vh;
}

.reviewCarousel {
  &__title {
    font-size: 3.6rem;
    text-align: center;
    margin-bottom: 2.4rem;
  }

  > .background {
    background: #FFF;
    border-radius: .8rem;
    box-shadow: 0 0 .6rem rgba(#CCC, 10);
    padding: 1.6rem;

    > .block.-none {
      display: none;
    }
  }

  &__image {
    width: 8rem;
    margin: 0 auto 1rem;
  }

  &__profile {
    text-align: center;
    margin-bottom: 2.4rem;

    > .name {
      font-size: 1.6rem;
      margin-bottom: .8rem;
    }

    > .position {
      color: #2AAB9F;
      font-size: 1.2rem;
      margin-bottom: 1.4rem;
    }

    > .text {
      font-size: 1.4rem;
      line-height: 1.7;
    }
  }

  &__button {
    color: #2AAB9F;
    text-align: center;

    > .arrow {
      font-size: 1.2rem;
      font-weight: bold;
      display: inline-block;
      cursor: pointer;

      &:hover {
        opacity: .6;
      }

      &.-left {
        margin-right: 1rem;
      }
    }
  }
}
</style>
