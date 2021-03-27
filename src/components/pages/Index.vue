<template>
  <div class="layout">
    <GlobalHeader />
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

export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;

  &__main {

  }
}
</style>