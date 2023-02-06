<template>
  <div class="mobile-home">
    <h1 class="title"><img src="https://fezz.che300.com/pics/h5/topic-detail/topic_logo@3x.png" alt="logo" class="logo">
    </h1>
    <p class="desc">c300前端H5组件库</p>
    <div v-for="(group, index) in baseData.navConfig" :key="index">
      <div class="mobile-nav" :class="{ 'mobile-nav--expand': baseData.expand }">
        <div class="mobile-nav__title" @click="toggleExpand">
          <span>{{ group.name }}</span>
          <img src="../../../assets/images/open.png" alt="" srcset="">
        </div>
        <div class="mobile-nav__collapse" :style="{ height: `${baseData.expand ? group.packages.length * 50 : 0}px` }">
          <div class="mobile-nav__item" v-for="nav in group.packages" @click="goTo(nav.path)">
            <span>{{ nav.name }}</span>
            <img src="../../../assets/images/view.png" alt="" srcset="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { navList } from '../../../config.json';
import { useRouter } from "vue-router";

interface BaseDataType {
  navConfig: NavConfigList[];
  expand: boolean;
}

interface NavConfigList {
  name: string;
  packages: PackagesList[];
}

interface PackagesList {
  name: string;
  path: string;
  componentPath?: string;
}

const router = useRouter()
const baseData = reactive<BaseDataType>({
  navConfig: navList.slice(1),
  expand: false
})

const toggleExpand = () => {
  baseData.expand = !baseData.expand
}

const goTo = (routePath: string) => {
  router.push(`/${routePath}`)
}

</script>

<style lang="scss" scoped>
.mobile-home {
  overflow-y: auto;
  padding: 15px;
  height: 100%;

  .title {
    margin: 50px 0 0 0;
    text-align: center;

    .logo {
      height: 130px;
    }
  }

  .desc {
    margin: 20px 0 50px 0;
    text-align: center;
  }

  .mobile-nav {
    margin-bottom: 12px;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.03);

    &.mobile-nav--expand .mobile-nav__title {
      // color: #419aff;

      i {
        transform: rotate(-180deg);
      }
    }

    &:active {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.03);
    }

    .mobile-nav__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      height: 60px;
      font-size: 16px;
      transition: color 0.3s;

      img {
        width: 20px;
        opacity: 0.8;
      }

      i {
        color: #ccc;
        transition: transform 0.3s;
      }
    }

    .mobile-nav__collapse {
      overflow: hidden;
      transition: height 0.3s ease;

      .mobile-nav__item {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        height: 50px;

        img {
          width: 20px;
          opacity: 0.8;
        }

        &:active {
          opacity: 0.5;
        }

        &::after {
          position: absolute;
          top: 0;
          right: 0;
          left: 20px;
          display: inline-block;
          height: 0;
          border-bottom: 1px solid #f1f1f1;
          content: '';
        }

        i {
          color: #ccc;
        }
      }
    }
  }
}
</style>