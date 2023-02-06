## 悬浮顶部下载

> 按需加载方法

``` javascript
import '@c300/vue-mobile-ui/lib/theme/index.css'
import { CDownload } from '@c300/vue-mobile-ui';

Vue.use(CDownload);
```
### 个人版

```html
<c-download
  :downLoadNav="downLoadNavPer"
  @download-click="appDownloadHandler"
></c-download>
```

```javascript
<script>
const CAPP_DOWNLOAD_URL = "http://k.cheyitao.com/app_direct?source=che300duobao";

export default {
  data() {
    return {
      downLoadNavPer: {
        downLoadIcon: "https://fezz.che300.com/pics/h5/topic-detail/topic_logo@3x.png",
        appType: "per",
        descTitle: "",
        subTitle: "",
        subImg: 'https://fezz.che300.com/pics/h5/topic-detail/topic_name@3x.png',
        clickText: "打开"
      }
    }
  },
  methods: {
    appDownloadHandler() {
      window.location.replace(CAPP_DOWNLOAD_URL)
    }
  }
}
</script>
```

### 专业版

```html
<c-download
  :downLoadNav="downLoadNavPro"
  @download-click="appDownloadHandler"
></c-download>
```

```javascript
<script>
const CAPP_DOWNLOAD_URL = "http://k.cheyitao.com/app_direct?source=che300duobao";

// https://ssl-assets.che300.com/feimg/bapp/card/icon-logo.png

export default {
  data() {
    return {
      downLoadNavPro: {
        downLoadIcon: "https://ssl-assets.che300.com/feimg/bapp/card/icon-logo.png",
        appType: "pro",
        descTitle: "车300专业版",
        subTitle: "80%业内同行都在用的经营神器",
        clickText: "立即下载"
      }
    }
  },
  methods: {
    appDownloadHandler() {
      window.location.replace(CAPP_DOWNLOAD_URL)
    }
  }
}
</script>
```

#### 使用说明
##### Attributes
| 参数         | 说明           | 类型   | 默认值 | 可否存在及必传                                                                       |
|--------------|--------------|--------|--------|------------------------------------------------------------------------------------|
| downLoadIcon | 下载条业务icon | String | ""     | 不必传；不想传递该，可从对象中移除该字段，将会展示组件icon缺省图；传递空字符串，将会隐藏; |
| appType      | 业务类型       | String | ""     | 必传                                                                                 |
| descTitle    | 展示主标题     | String | ""     | 不必传                                                                               |
| subTitle     | 展示副标题     | String | ""     | 不必传                                                                               |
| subImg       | 副标题img      | String | ""     | 不必传；不传递该字段或传递空字符串，该模块会隐藏                                       |
| clickText    | 按钮文案       | String | ""     | 不必传；不传递该字段或传递空字符串，会展示默认文案"打开"                               |

##### Events
| 事件名         | 说明           | 参数                                                                       |
|--------------|--------------|------------------------------------------------------------------------------------|
|download-click|当下载按钮被点击时会触发该事件|-|