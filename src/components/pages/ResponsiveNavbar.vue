<template>
  <div class="layout">
    <GlobalHeader />
    <div class="layout__main">
      <div class="responsiveNavbar">
        <header
          class="header"
          :class="{ '-active': this.navigationStatus }"
        >
          <nav>
            <ul class="header__nav">
              <li class="item"
                :class="{ '-active': this.navigationStatus }"
                v-for="item in navMenu"
                :key="item.name"
              >{{ item.name }}</li>
            </ul>
          </nav>

          <ul class="header__hamburger"
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
        <ul class="responsiveNavbar__contents"
          :class="{ '-active': this.navigationStatus }"
        >
          <li class="item"
            :class="{ '-active': this.navigationStatus }"
            v-for="item in navMenu"
            :key="item.name"
          >{{ item.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import GlobalHeader from '@/components/organisms/GlobalHeader.vue';
import menuData from '@/json/ResponsiveNavbar/menuData.json';

@Options({
  components: {
    GlobalHeader,
  },
})

export default class ResponsiveNavbar extends Vue {
  private navigationStatus = false;
  private navMenu = menuData;

  // SP版・ハンバーガーメニューの開閉処理
  private openNavigation() {
    if (this.navigationStatus === false) {
      console.log(this.navMenu);
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
    position: relative;
  }
}

.responsiveNavbar {
  position: relative;

  .header {
    background: white;
    padding: 2.4rem 1.6rem;
    box-shadow: .4rem 0 .4rem rgba(#000, .6);
    transition: .3s ease;

    @media screen and (max-width: 767px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &.-active {
      @media screen and (max-width: 767px) {
        padding-bottom: 17.4rem;
      }
    }

    &__nav {
      display: none;

      @media screen and (min-width: 768px) {
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      > .item {
        font-size: 1.6rem;
        cursor: pointer;

        &:hover {
          opacity: .6;
          transition: .3s ease;
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

  &__contents {
    width: 100%;
    visibility: hidden;
    transition: .6s ease;
    position: absolute;
    top: 8.6rem;

    @media screen and (min-width: 768px) {
      display: none;
    }

    &.-active {
      visibility: visible;
    }

    > .item {
      height: 4.8rem;
      line-height: 4.8rem;
      font-size: 1.6rem;
      padding: 0 1.6rem;
      visibility: hidden;
      display: block;
      transition: .1s ease;
      cursor: pointer;


      &:not(:last-child) {
        border-bottom: .1rem dotted #CCC;
      }

      &:hover {
        opacity: .6;
        background: #CCC;
      }

      &.-active {
        visibility: visible;
      }
    }
  }
}
</style>
