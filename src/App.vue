<template>
  <navbar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import navbar from './components/navbar/index.vue';

export default defineComponent({
  name: 'App',
  components: {
    navbar
  }
});
</script>

<style lang="scss">
html,
body,
#app {
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
</style>
