<template>
  <div class="mobile-home">
    <h1 class="title"><img src="https://fezz.che300.com/pics/h5/topic-detail/topic_logo@3x.png" alt="logo" class="logo">
    </h1>
    <p class="desc">c300前端H5组件库</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
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
}
</style>