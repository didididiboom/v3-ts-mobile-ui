<template>
  <button ref="c3ButtonRef" class="c3-button">
    <img ref="c3LocalImgRef" v-if="showLocalLoading" class="local-loading" :src="loadingUrl" alt="" />
    <slot></slot>
    <div v-if="disabled || showLocalLoading || showGloabalLoading" class="c3-button-disabled"></div>
    <transition name="c3-loading">
      <!-- 全局loading -->
      <div ref="loadingRef" class="c3-loading-wrapper" v-if="showGloabalLoading">
        <div class="c3-button-loading" @touchmove.prevent>
          <img class="c3-loading-pic" :src="loadingUrl" alt="" />
          <div class="c3-loading-text">{{ loadingText }}</div>
        </div>
        <div class="c3-button-shadow" @touchmove.prevent></div>
      </div>
    </transition>
  </button>


</template>
<script>
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
export default {
  name: 'CButton',
  props: {
    buttonType: {
      // 1.throttle 节流;  2.debounce 防抖; 3.loading 加载; 4.primary
      type: String,
      default: 'primary',
    },
    delay: {
      // 防抖节流延时时间
      type: Number,
      default: 1000,
    },
    controlOption: {
      // type为throttle或debounce，可选的防抖节流配置，参考防抖节流源码option
      type: Object,
      default: () => {
        return {
          leading: true,
          trailing: false,
        };
      },
    },
    loadingType: {
      // loading方式
      type: String,
      default: 'global', // global全局loading , local局部loading
    },
    loading: {
      type: Boolean,
      default: false,
    },
    loadingText: {
      type: String,
      default: '加载中',
    },
    loadingUrl: {
      type: String,
      default: 'https://assets.che300.com/feimg/h5pages/bapp/temp/load_circle.png',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      c3Button: null,
      bodyDom: null,
    };
  },
  computed: {
    showGloabalLoading() {
      return this.buttonType === 'loading' && this.loadingType === 'global' && this.loading;
    },
    showLocalLoading() {
      return this.buttonType === 'loading' && this.loadingType === 'local' && this.loading;
    },
  },
  watch: {
    // 设置全局loading的样式
    showGloabalLoading(newValue) {
      this.$nextTick(() => {
        if (newValue) {
          this.bodyDom.append(this.$refs.loadingRef);
          this.$refs.loadingRef.style.display = 'block';
        } else {
          if (this.$refs.loadingRef) {
            this.bodyDom && this.bodyDom.removeChild(this.$refs.loadingRef);
            this.$refs.loadingRef.style.display = 'none';
          }
        }
      })
    },
    // 设置局部loading的样式
    showLocalLoading: {
      handler(newValue) {
        if (newValue) {
          const domInfo = this.c3Button && this.c3Button.getBoundingClientRect();
          this.$nextTick(() => {
            this.$refs.c3LocalImgRef.style.width = parseInt(domInfo.height * 0.4) + 'px';
            this.$refs.c3LocalImgRef.style.height = parseInt(domInfo.height * 0.4) + 'px';
          });
        }
      },
    },
  },
  mounted() {
    this.c3Button = this.$refs.c3ButtonRef;
    this.bodyDom = document.body;
    this.initEvent();
  },
  unmounted() {
    this.c3Button && this.c3Button.removeEventListener(this.submit, null);
  },
  methods: {
    submit() {
      if (this.disabled) return;
      if (
        (this.buttonType === 'loading' && !this.loading) ||
        ['primary', 'throttle', 'debounce'].includes(this.buttonType)
      ) {
        this.$emit('submit');
      }
    },
    initEvent() {
      if (this.buttonType === 'debounce') {
        this.c3Button.addEventListener(
          'click',
          debounce(this.submit, this.delay, this.controlOption)
        );
      } else if (this.buttonType === 'throttle') {
        this.c3Button.addEventListener(
          'click',
          throttle(this.submit, this.delay, this.controlOption)
        );
      } else {
        this.c3Button.addEventListener('click', this.submit);
      }
    },
  },
};
</script>
