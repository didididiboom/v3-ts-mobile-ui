## 按钮

> 按需加载方法

``` javascript
import '@c300/vue-mobile-ui/lib/theme/index.css'
import { CButton } from '@c300/vue-mobile-ui';

Vue.use(CButton);
```

### 基础用法

```html
 <c-button @submit="primaryHandle">确定</c-button>
```



### 按钮类型
按钮类型包含：普通、加载、防抖、节流。
>buttonType  `loading`：加载 ； `throttle`：节流 ； `debounce`：防抖 ；  `primary`：普通（默认）

#### 1、loading

loading分全局和局部两种，由`loadingType`控制。`inner`：局部，`global`：全局

###### 局部loading
```html
 <c-button 
  class="button-item large" 
  buttonType="loading"
  @submit="changeHandle" 
  :loading="loading" 
  loadingType="local">局部</c-button>
```
##### 全局loading

```html
<c-button 
  class="button-item" 
  buttonType="loading"
  @submit="changeGlobalHandle" 
  :loading="globalLoading" 
  loadingType="global">全局</c-button>
```

#### 2、防抖、节流
防抖、节流操作，默认点击时直接触发一次，如需修改触发时机，请参考`controlOption`
```html
 <c-button 
  class="button-item" 
  @submit="debounceHandle" 
  buttonType="debounce">防抖</c-button>
```
```html
 <c-button 
  class="button-item" 
  @submit="throttleHandle" 
  buttonType="throttle">节流</c-button>
```



### loading图片
```html
 <c-button 
  class="button-item" 
  buttonType="loading"
  :loading="urlLoading" 
  loadingType="local"
  loadingUrl="https://assets.che300.com/feimg/h5pages/bapp/v2.8.8/b-2855/gou_2@3x.png">局部</c-button>
```

#### 使用说明
##### Prop
| 参数         | 说明           | 类型  | 可选值                     | 默认|
|--------------|--------------|--------|--------|------------------------------------------------------------------------------------|
| buttonType       | 按钮类型 | string     | `loading|throttle|debounce|primary`  |`primary`
| disabled       | 禁用 | boolean     | `true|fasle`   | `false`
| delay     | 延时，type是防抖节流时可用     | number | -   | `1000  `                                                                         |
| loadingType  | loading方式  | string | `local|global`   |`global`                                |
| loading    | loading显示       | boolean | `true|fasle`    |  `false`                              |
| loadingText    | 全局loading文案       | string | -     | `加载中    `                |
| controlOption    | type是防抖节流时生效       | object | -     | `leading: true, trailing: false `             |


##### Event
| 事件名称         | 说明           |参数|
|--------------|--------------|--------|
| submit       |  提交   |  -|


##### controlOption
参考 `throttle|debounce`源码配置。lodash/debounce、lodash/throttle文件

| 事件名称         | 说明           |参数|
|--------------|--------------|--------|
| leading       |  是否在超时的前沿调用   |  `true`|
| trailing       |  是否在超时的后缘调用   | `false` |
| maximum       |  在被调用之前允许延迟的最大时间。    | `1000`|
