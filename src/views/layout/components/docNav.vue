<template>
  <div class="doc-nav c3-scrollbar">
    <ul v-for="item in navList">
      <li class="title">{{ item.name }}</li>
      <ol v-if="item.packages.length">
        <li v-for="nav in item.packages">
          <router-link class="nav-tag" :to="nav.path.toLowerCase()">
            {{ nav.name }}
          </router-link>
        </li>
      </ol>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { navList } from "@/config.json";
</script>

<style lang="scss" scoped>
.doc-nav {
  overflow-y: auto;
  padding: 30px 0;
  height: 100%;
  border-right: 1px solid #f1f4f8;
  flex: 0 0 230px;
  box-sizing: border-box;

  h3 {
    font-size: 20px;
    font-weight: 300;
    color: #6a7b83;
  }

  .title {
    padding: 10px 0 10px 20px;
    font-size: 20px;
    font-weight: 300;
    color: #6a7b83;
  }

  .nav-tag {
    display: block;
    padding: 10px 0 10px 30px;
    font-size: 14px;
    font-weight: 450;
    color: #455a64;

    &.router-link-active {
      color: #F60;
      background: #FFE6D8;
    }
  }
}
</style>