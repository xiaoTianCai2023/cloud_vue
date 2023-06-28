<!--
 * @Author: chenyx
 * @Date: 2023-03-10 21:43:21
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-10 23:45:55
 * @FilePath: /vue-9jian/src/components/home_view/QCodeCard/components/BubbleCard.vue
-->
<template>
  <div class="bubble-card" :style="{ opacity: props.isShow ? 1 : 0 }">
    <img
      src="https://qcloudimg.tencent-cloud.cn/raw/42c198dbc0b57ae490e57f89aa01ec23.png"
      class="card-left"
    />
    <div class="card-right">
      <div class="card-title">{{ state.object.title }}</div>
      <div class="list-title">{{ (state, object.listTitle) }}</div>
      <item-list mode="column" :data-list="state.object.list"></item-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import ItemList from './ItemList.vue'

const props = defineProps({
  object: {
    type: Object,
    default: {}
  },
  isShow: {
    type: Boolean,
    default: false
  }
})
const state = reactive({
  object: props.object
})
</script>
<style scoped>
.bubble-card {
  position: absolute;
  top: -220px;
  right: -2px;
  background: linear-gradient(180deg, #f3f5f8, #fff);
  border: 2px solid #fff;
  box-shadow: 8px 8px 20px rgb(55 99 170 / 10%), -8px -8px 20px #fff;
  border-radius: 4px;
  padding: 16px;
  padding-right: 60px;
  box-sizing: border-box;
  display: -ms-flexbox;
  display: flex;
  transition: all 0.3s ease-in-out;
  -webkit-transform-origin: right bottom;
  transform-origin: right bottom;
}
.bubble-card:before {
  position: absolute;
  content: '';
  display: inline-block;
  bottom: -16px;
  right: 32px;
  border: 8px solid transparent;
  border-top-color: #fff;
}
.card-left {
  width: 126px;
  height: 126px;
  margin-right: 16px;
}
.card-right {
  flex: 1;
}
.card-title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #181818;
}
.list-title {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  margin-top: 4px;
  color: #97a3b7;
}
</style>
