<template>
  <div :style="style" class="doc-layout">
    <Nav />
    <div class="doc-main doc-scrollbar">
      <router-view v-slot="{ Component }">
        <transition>
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
      <Demo />
    </div>
  </div>
</template>

<script setup lang="ts">
import 'highlight.js/styles/solarized-light.css';
import '../../style/common.scss';

import Nav from './components/docNav.vue';
import Demo from './components/demo.vue';

const bodyHeight = document.body.clientHeight;
const navHeight: any = document.querySelector('.doc-navbar')?.clientHeight;
const style = {
  height: `${bodyHeight - navHeight}px`
};

</script>

<style lang="scss" scoped>
.doc-layout {
  display: flex;
  min-width: 1500px;
  height: 0;
  flex: 1 1;
}

.doc-main {
  overflow-y: auto;
  padding: 30px 415px 70px 30px;
  height: 100vh;
  flex-grow: 1;
  background: #f7f8fa;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  display: none;
}
</style>
