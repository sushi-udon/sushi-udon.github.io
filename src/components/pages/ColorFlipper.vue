<template>
  <div class="layout">
    <GlobalHeader />
    <div class="layout__main">
      <ColorFlipperEditButton
        :color-value="あいうえお"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import GlobalHeader from '@/components/organisms/GlobalHeader.vue';
import ColorFlipperEditButton from '@/components/atoms/ColorFlipperEditButton.vue';

@Options({
  components: {
    GlobalHeader,
    ColorFlipperEditButton,
  },
})

export default class ColorFlipper extends Vue {
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  display: flex;

  &__main {
    width: 75%;
    padding-top: 2.4rem;
    padding-left: 3.6rem;
  }
}
</style>
