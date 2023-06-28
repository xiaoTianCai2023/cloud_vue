<!--
 * @Author: chenyx
 * @Date: 2023-03-10 19:39:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-10 23:24:02
 * @FilePath: /vue-9jian/src/components/home_view/QCodeCard/components/ItemList.vue
-->
<template>
  <ul :class="['list', state.mode == 'row' ? '' : 'direction-column']">
    <li
      class="list-item"
      :style="{ width: state.mode == 'row' ? 'calc(50% - 4px)' : '100%' }"
      v-for="(item, index) in state.list"
      :key="index"
    >
      <span class="list-item-text">{{ item.text }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface ListItem {
  text: string
}

const props = defineProps({
  // 数据
  dataList: {
    type: Array<ListItem>,
    default: []
  },
  // 排列方式
  mode: {
    type: String,
    default: 'row'
  }
})
const state = reactive({
  list: props.dataList,
  mode: props.mode
})
</script>

<style lang="less" scoped>
.direction-column {
  flex-direction: column;
}
.list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
  .list-item {
    width: 100%;
    padding-left: 24px;
    width: calc(50% - 4px);
    margin-bottom: 8px;
    .list-item-text {
      font-size: 14px;
      color: #495770;
      line-height: 24px;
    }
  }
  .list-item::before {
    position: absolute;
    content: '';
    display: inline-block;
    left: 0;
    top: 4px;
    width: 16px;
    height: 16px;
    background-image: url(https://cloudcache.tencentcs.cn/qcloud/ui/tea-portal-material-portal/build/Main/images/tpm1-ecology2-check_41f.svg);
  }
}
</style>
