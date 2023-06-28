<script setup lang="ts">
import { useCommonStore } from '@/stores/common'
import { reactive, ref } from 'vue'
const common_store = useCommonStore()
// 解决方案hover事件
// function solution_mouseenter(id: string) {
//   common_store.change_show_solution_tab(true)
//   nav_item_hover.value = id
// }
// function solution_mouseleave() {
//   common_store.change_show_solution_tab(false)
//   nav_item_hover.value = '-1'
// }

const emit =  defineEmits(['navClick', 'navHover'])

interface navItem {
  id: string,
  title: string,
  path: string
}

// 头部导航列表
const navList = reactive([
  {
    id: '1',
    title: '最新活动',
    path: '/solution'
  },
  {
    id: '2',
    title: '产品',
    path: '/solution'
  },
  {
    id: '3',
    title: '解决方案',
    path: '/solution'
  },
  {
    id: '4',
    title: '定价',
    path: '/solution'
  },
  {
    id: '5',
    title: '企业中心',
    path: '/solution'
  },
  {
    id: '6',
    title: '云市场',
    path: '/solution'
  },
  {
    id: '7',
    title: '开发者',
    path: '/solution'
  },
  {
    id: '8',
    title: '客户支持',
    path: '/solution'
  },
  {
    id: '9',
    title: '合作与生态',
    path: '/solution'
  },
  {
    id: '10',
    title: '了解腾云',
    path: '/solution'
  }
])
const nav_item_hover = ref('-1')

function nav_click(item: navItem) {
  emit('navClick', item)
}

function nav_hover(item: navItem) {
  emit('navHover', item)
}

</script>

<template>
  <div class="nav_list">
    <div @mouseenter="nav_hover(navItem)" @click="nav_click(navItem)" class="nav_item nav" v-for="navItem in navList" :key="navItem.title">
      <!-- <a href="javascript:;">{{ navItem.title }}</a> -->
      {{ navItem.title }}
    </div>
  </div>
</template>

<style scoped>
.nav_list {
  display: flex;
  align-items: center;

  overflow: hidden;
  flex-wrap: wrap;
}

.nav_list .nav_item {
  padding: 0 8px;
}

.nav_item--hover {
  background: #456bdb;
  height: 2px;
}
</style>
