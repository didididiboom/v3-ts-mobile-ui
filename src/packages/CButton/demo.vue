<template>
  <div class="demo">

    <div class="item">
      <h3 class="title">基础用法</h3>
      <c-button class="button-item" @submit="primaryHandle">确定</c-button>
    </div>
  
    <div class="item">
      <h3 class="title">按钮类型</h3>
      <h4 class="sub-title">按钮类型包含：普通、加载、防抖、节流。</h4>
      <div>
        <h5>1、loading</h5>
        <div class="item-content">
          <c-button class="button-item large" buttonType="loading" @submit="changeHandle" :loading="loading"
            loadingType="local">局部
          </c-button>
          <c-button class="button-item" buttonType="loading" @submit="changeGlobalHandle" :loading="globalLoading"
            loadingType="global">全局
          </c-button>
        </div>
      </div>

      <div>
        <h5>2、防抖、节流</h5>
        <div class="item-content">
          <c-button class="button-item" @submit="debounceHandle" buttonType="debounce">防抖</c-button>
          <c-button class="button-item" @submit="throttleHandle" buttonType="throttle">节流</c-button>
        </div>
      </div>
    </div>

    <div class="item">
      <h3 class="title">loading图片</h3>
      <h4 class="sub-title">该版本使用图片，因此图片可能不是产品想要的</h4>
      <div class="item-content">
        <c-button class="button-item1" buttonType="loading" :loading="urlLoading" loadingType="local"
          loadingUrl="https://assets.che300.com/feimg/h5pages/bapp/v2.8.8/b-2855/gou_2@3x.png">局部</c-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      globalLoading: false,
      urlLoading: true
    };
  },
  methods: {
    primaryHandle() {
      window.alert('primary')
    },
    changeHandle() {
      this.loading = !this.loading
      setTimeout(() => {
        this.loading = !this.loading
      }, 3000);
    },
    changeGlobalHandle() {
      this.globalLoading = !this.globalLoading
      setTimeout(() => {
        this.globalLoading = !this.globalLoading
      }, 3000);
    },
    debounceHandle() {
      console.log('防抖');
    },
    throttleHandle() {
      console.log('节流');
    }
  },
};
</script>

<style scoped>
.demo {
  margin: 10px;
  padding: 20px;
  background-color: #fff;
  box-sizing: border-box;
}

.title {
  margin: 20px 0 10px;
  font-size: 16px;
}

.item-content {
  padding: 20px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
}

.button-item {
  /* text-align: center; */
  margin-right: 20px;
  width: 75px;
  height: 30px;
  border: 1px solid #ccc;
}

.button-item1 {
  width: 100px;
  border: 1px solid #ccc;
}

</style>
