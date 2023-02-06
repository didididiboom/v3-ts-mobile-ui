<template>
    <div class="c-download">
      <div
        :class="[
          'bottom-download',
          downLoadObj.appType === 'per'
            ? 'per-top-download'
            : 'pro-top-download',
        ]"
      >
        <div class="left-logo-desc">
          <img
            v-if="downLoadObj.downLoadIcon"
            class="logo-icon"
            :src="downLoadObj.downLoadIcon"
          />
          <div class="download-desc">
            <div class="desc-title">
              {{ downLoadObj.descTitle }}
            </div>
            <div class="sub-title"> {{ downLoadObj.subTitle }} </div>
            <img v-if="downLoadObj.subImg" class="sub-img" :src="downLoadObj.subImg" />
          </div>
        </div>
        <a v-if="downLoadObj.clickText" :class="[downLoadObj.appType === 'per' ? 'per-download-btn' : 'pro-download-btn',]" @click="btnClickHandler">
          {{ downLoadObj.clickText }}
        </a>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'CDownload',
    props: {
      downLoadNav: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {}
    },
    computed: {
      downLoadObj() {
        return Object.assign(
          {
            downLoadIcon:
              'https://ssl-assets.che300.com/feimg/h5/c-311/head_portrait_user_big@3x.png',
            appType: 'per',
            descTitle: '',
            subTitle: '',
            subImg: '',
            clickText: '打开'
          },
          this.downLoadNav
        )
      }
    },
    methods: {
      btnClickHandler() {
        this.$emit('download-click')
      }
    }
  }
  </script>
  