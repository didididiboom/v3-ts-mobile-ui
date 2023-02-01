<template>
  <div class="demo-wrp">
    <div v-if="frame" class="nav">{{ name }}</div>
    <div :class="frame ? 'router-view frame' : 'router-view'">
      <router-view v-slot="{ Component }">
        <transition>
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

export default defineComponent({
  name: 'Layout',
  setup: () => {
    const name = ref('');

    onBeforeRouteUpdate((to) => {
      name.value = String(to.name);
    });

    const route = useRoute();
    onMounted(() => {
      name.value = String(route.name);
    });

    const frame = ref(window.self.name === 'demo-content' ? true : false);
    return {
      frame,
      name
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-wrp {
  position: relative;
  width: 100%;
  height: 100%;

  .router-view {
    overflow-y: auto;
    padding-bottom: 0;
    width: 100%;
    height: 100%;
    background: #F8F8F8;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    }

    &.frame {
      padding-top: 50px;
    }
  }

  .nav {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 44px;
    font-size: 16px;
    font-weight: bold;
    background: #fff;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 7%);
  }
}
</style>

<style lang="scss">
.demo-padding {
  padding: 0 20px 20px 20px;
}

h4 {
  padding: 20px 0 10px 0;
  color: #BABACE;
}

.demo-row {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}

.demo-row2 {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}

.not-padding {
  padding-bottom: 20px;

  h4 {
    padding-left: 20px;
  }
}
</style>
