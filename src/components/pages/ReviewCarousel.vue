<template>
  <div class="layout">
    <GlobalHeader />
    <div class="layout__main reviewCarousel">
      <h2 class="reviewCarousel__title">Our Reviews</h2>
      <div class="background">
        <div class="block">
          <figure class="reviewCarousel__image">
            <img :src="members[num].imageFilePath" alt="">
          </figure>
          <div class="reviewCarousel__profile">
            <h3 class="name">{{ members[num].firstName }}{{ members[num].lastName }}</h3>
            <p class="position">{{ members[num].position }}</p>
            <p class="text">{{ members[num].text }}</p>
          </div>
          <div class="reviewCarousel__button">
            <span class="arrow -left" @click="goPrev()">&lt;</span>
            <span class="arrow -right" @click="goNext()">&gt;</span>
          </div>
          {{ this.num + 1 }}
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
  private num = 0;

  // 「<」をクリックしたときに、前の情報を表示させる
  private goPrev() {
    // 今見ている情報が「最初」だったとき
    if (this.num === 0) {
      return this.num = this.members.length - 1;
    } else {
      return this.num = this.num -1;
    }
  }

  // 「＞」をクリックしたときに、次の情報を表示させる
  private goNext() {
    // 今見ている情報が「最後」だったとき
    if (this.num === this.members.length - 1) {
      return this.num = 0;
    } else {
      return this.num = this.num + 1;
    }
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
    background: rgba(#2AAB9F, .5);
  }
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
  }

  &__image {
    width: 8rem;
    height: 10rem;
    margin: 0 auto 1rem;
  }

  &__profile {
    min-height: 10rem;
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
