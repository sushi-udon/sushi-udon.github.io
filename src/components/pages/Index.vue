<template>
  <div class="layout">
    <GlobalHeader />
    <div class="layout__main main">
      <p>作成中</p>
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

export default class Index extends Vue {}
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
</style>
