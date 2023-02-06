<template>
  <div class="demo-wrp">
    <iframe name="demo-content" :src="`${demo}#/${path}`"> </iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

const filter = ['introduce', 'install', 'use', 'utils'];

export default defineComponent({
  name: 'Demo',
  setup() {
    const router = useRoute();
    const path = ref('');
    const demo = import.meta.env.DEV
      ? 'http://localhost:3000/mobile.html'
      : 'https://foneqinrf.github.io/mobile.html';

    const filters = (name: string) => {
      if (filter.includes(name)) {
        path.value = '';
        return;
      }
      path.value = name;
    };

    onBeforeRouteUpdate((to) => {
      filters(String(to.name));
    });

    onMounted(() => {
      filters(String(router.name));
    });

    return { demo, path };
  }
});
</script>

<style lang="scss" scoped>
.demo-wrp {
  position: fixed;
  top: 80px;
  right: 20px;
  width: 375px;
  height: 667px;
  border-radius: 10px;
  box-shadow: #ccc 0 4px 12px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
