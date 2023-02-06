<template>
    <div class="demo">
      <mobile-block title="个人版">
        <c-download
          :downLoadNav="downLoadNavPer"
          @download-click="appDownloadHandler"
        ></c-download>
      </mobile-block>
      <mobile-block title="专业版">
        <c-download
          :downLoadNav="downLoadNavPro"
          @download-click="appDownloadHandler"
        ></c-download>
      </mobile-block>
    </div>
  </template>
  
  <script>
  const CAPP_DOWNLOAD_URL =
    "http://k.cheyitao.com/app_direct?source=che300duobao";
  export default {
    data() {
      return {
        downLoadNavPro: {
          downLoadIcon: "https://ssl-assets.che300.com/feimg/bapp/card/icon-logo.png",
          appType: "pro",
          descTitle: "车300专业版",
          subTitle: "80%业内同行都在用的经营神器",
          clickText: "立即下载"
        },
        downLoadNavPer: {
          downLoadIcon: "https://fezz.che300.com/pics/h5/topic-detail/topic_logo@3x.png",
          appType: "per",
          descTitle: "",
          subTitle: "",
          subImg: 'https://fezz.che300.com/pics/h5/topic-detail/topic_name@3x.png',
          clickText: "打开"
        },
      };
    },
    methods: {
      appDownloadHandler() {
        window.location.replace(CAPP_DOWNLOAD_URL);
      },
    },
  };
  </script>
  
  