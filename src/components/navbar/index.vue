<template>
  <div class="doc-navbar">
    <div class="doc-navbar-inner">
      <router-link to="/">
        <div class="doc-brand">
          <img src="https://fezz.che300.com/pics/h5/topic-detail/topic_logo@3x.png" alt="">
          <span class="doc-brand__name">C300-MOBILE-UI-V3</span>
        </div>
        <!-- <span class="version">v{{ require('../../../package.json').version }}</span> -->
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.doc-navbar {
  min-width: 1500px;
  flex: 0 0 70px;
  border-bottom: 1px solid #f1f4f8;

  .doc-navbar-inner {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin: 0 auto;
    padding: 0 20px;
    width: 1500px;
    height: 100%;

    .doc-brand {
      display: flex;
      align-items: center;

      img {
        margin-bottom: 2px;
        width: 20px;
        height: 20px;
      }

      .doc-brand__name {
        position: relative;
        top: 1px;
        margin-left: 10px;
        font-size: 20px;
        font-family: Arial, Helvetica, sans-serif;
        color: #333;
        vertical-align: middle;
      }
    }

    .version {
      position: absolute;
      bottom: 24px;
      left: 210px;
      font-size: 14px;
      font-family: Arial;
      color: #999;
    }
  }
}
</style>
