<template>
  <div class="simplified_version_wrap">
    <div class="simplified_version_main" @click="logoClick">
      <div class="simplified_version_search logo-btn-icon" data-logo="search"></div>
      <div class="simplified_version_user logo-btn-icon" data-logo="user"></div>
      <div class="simplified_version_menu logo-btn-icon" data-logo="menu">
        <span v-for="i in 3" :key="i"></span>
      </div>
    </div>
    <drawer v-model:visible="is_show_drawer">
      <component :is="componentDoms[componentSelectName]"></component>
    </drawer>
  </div>
</template>

<script setup lang="ts">
import Drawer from './Drawer.vue'
import { defineComponent, ref, shallowReactive } from 'vue'
import HeaderSearch from '../../HeaderSearch.vue'
import User from './User.vue'
import Menu from './Menu.vue'

const componentDoms = shallowReactive({
  search: HeaderSearch,
  user: User,
  menu: Menu
})

const componentSelectName = ref('')
const is_show_drawer = ref(false)

function logoClick(event: HTMLElement) {
  is_show_drawer.value = true
  componentSelectName.value = event?.target?.dataset?.logo
}
</script>

<style scoped>
/* 当视口宽度小于770时，显示简化版的功能以logo形式展示*/
.simplified_version_main {
  display: flex;
  gap: 16px;
}
.simplified_version_search {
  background-image: url(https://cloudcache.tencent-cloud.com/qcloud/portal/kit/images/slice/icon-search.7d9dda70.svg);
}
.simplified_version_user {
  background-image: url(https://cloudcache.tencent-cloud.com/qcloud/portal/kit/images/slice/icon-user.842c01ef.svg);
  background-size: cover;
}
.simplified_version_menu {
  box-sizing: border-box;
  padding-top: 4px;
}
.simplified_version_menu span {
  display: block;
  width: 20px;
  height: 2px;
  margin: 0 auto 5px;
  position: relative;
  background: #253554;
  border-radius: 3px;
  z-index: 1;
  -webkit-transform-origin: 20px;
  transform-origin: 20px;
}
.logo-btn-icon {
  display: block;
  width: 24px;
  height: 24px;
}
</style>
