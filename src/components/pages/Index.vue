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
  width: 100%;
  display: flex;

  &__main {
    width: 75%;
    padding: 2.4rem 3.6rem 0;
  }
}

.globalHeader {
  max-width: 30%;
}
</style>
