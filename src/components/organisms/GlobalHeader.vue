<template>
  <header class="globalHeader">
    <h1 class="globalHeader__title">
      <a href="/">つれづれ</a>
    </h1>

    <nav class="navigation">
      <h3 class="navigation__title">Menu</h3>
      <ul>
        <li class="navigation__list"><a href="#color-flipper" class="link">ColorFlipper</a></li>
        <li class="navigation__list"><a href="#counter" class="link">Counter</a></li>
        <li class="navigation__list"><a href="#review-carousel" class="link">ReviewCarousel</a></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class GlobalHeader extends Vue {}
</script>

<style lang="scss" scoped>
.globalHeader {
  padding: 1.6rem;
  border-right: .1rem solid #000;

  &__title {
    font-size: 1.8rem;
    margin-bottom: 2.4rem;

    &:hover {
      opacity: .6;
    }
  }

  .navigation {
    margin-bottom: 2.4rem;

    &__title {
      font-size: 1.6rem;
      border-bottom: .1rem solid #000;
      margin-bottom: .8rem;
      padding-bottom: .6rem;
    }

    &__list {
      font-size: 1.2rem;
      cursor: pointer;

      &:not(:last-child) {
        margin-bottom: 1rem;
      }

      > .link:hover {
        opacity: .6;
      }
    }
  }
}
</style>
