<template>
  <div class="layout">
    <GlobalHeader />
    <div class="layout__main">
      <header class="responsiveNavbar"
        :class="{ '-active': this.navigationStatus }"
      >
        <nav>
          <ul class="responsiveNavbar__nav">
            <li class="item">about</li>
            <li class="item">test</li>
            <li class="item">test2</li>
            <li class="item">test3</li>
          </ul>
        </nav>

        <ul class="responsiveNavbar__hamburger"
            :class="{ '-active': this.navigationStatus }"
            @click="openNavigation()"
        >
          <li class="item"
            v-for="n in 3"
            :key="n"
            :class="{ '-active': this.navigationStatus }"
          />
        </ul>
      </header>
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

export default class ResponsiveNavbar extends Vue {
  private navigationStatus = false;

  // SP版・ハンバーガーメニューの開閉処理
  private openNavigation() {
    if (this.navigationStatus === false) {
      return this.navigationStatus = true;
    } else {
      return this.navigationStatus = false;
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
    background: rgba(#a5ee39, .8);
  }
}

.responsiveNavbar {
  background: white;
  box-shadow: .4rem 0 .4rem rgba(#000, .6);
  padding: 2.4rem 1.6rem;

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &.-active {
    padding-bottom: 50rem;
    transition: .3s ease;
  }

  &__nav {
    @media screen and (max-width: 767px) {
      display: flex;
      justify-content: space-between;
    }

    > .item {
      font-size: 1.6rem;
      cursor: pointer;

      &:hover {
        opacity: .6;
        transition: .3s ease;
      }

      &:not(:last-child) {
        @media screen and (max-width: 767px) {
          margin-right: 2rem;
        }

        @media screen and (min-width: 768px) {
          margin-bottom: 1.6rem;
        }
      }
    }
  }

  &__hamburger {
    width: 3.2rem;
    height: 3.2rem;
    transform: rotate(0deg);
    transition: .3s ease;
    position: relative;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 767px) {
      display: block;
    }

    &.-active {
      transform: rotate(450deg);
    }

    > .item {
      width: 100%;
      height: .5rem;
      background: #a5ee39;
      position: absolute;

      &.-active {
        background: #7ac011;
      }

      &:first-child {
        top: 0;
      }

      &:nth-child(2) {
        top: 0;
        bottom: 0;
        margin: auto;
      }

      &:last-child {
        bottom: 0;
      }
    }
  }
}
</style>
