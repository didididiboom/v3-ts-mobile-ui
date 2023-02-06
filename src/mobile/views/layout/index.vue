<template>
  <div class="demo-wrp">
    <div v-if="frame" class="nav">
      <div class="nav-bar__left" @click="goBack">
        <img src="../../../assets/images/back.png" alt="" srcset="">
      </div>
      <div class="nav-bar__title">
        {{ name }}
      </div>
    </div>
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

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';

const name = ref('');
const frame = ref(window.self.name === 'demo-content' ? true : false);
const route = useRoute();
const router = useRouter();

onBeforeRouteUpdate((to) => {
  name.value = String(to.name);
});

onMounted(() => {
  name.value = String(route.name);
});

const goBack = () => {
  router.go(-1)
}

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


    .nav-bar__left,
    .nav-bar__right {
      img {
        width: 20px;
        opacity: 0.8;
      }

      &:active {
        opacity: 0.5;
      }
    }

    .nav-bar__left {
      position: absolute;
      top: 0;
      left: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%
    }

    .nav-bar__right {
      position: absolute;
      top: 0;
      right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    .nav-bar__title {
      margin: 0 auto;
      max-width: 50%;
      height: 50px;
      font-size: 16px;
      text-align: center;
      color: #34495e;
      line-height: 50px;
    }
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
