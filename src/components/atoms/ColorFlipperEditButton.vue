<template>
  <div class="colorFlipperEditButton">
    <h2 class="colorFlipperEditButton__title">background color<span class="colorValue">{{ colorValue }}</span></h2>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class colorFlipperEditButton extends Vue {
  colorValue!: string;
}
</script>

<style lang="scss" scoped>
.colorFlipperEditButton {
  background: #333;
  border-radius: 3rem;
  padding: 3rem;

  &__title {
    color: white;
    font-size: 1.6rem;

    &:after {
      content: ':';
      margin: 0 1rem;
    }
  }
}
</style>
