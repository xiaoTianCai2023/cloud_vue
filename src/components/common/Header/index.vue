<script setup lang="ts">
// import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router'
import { logoutRequest } from '@/http/request'
import { onMounted, onUnmounted, reactive, ref, computed } from 'vue'
import HeaderSearch from '../HeaderSearch.vue'
import HeaderSearchInput from '../HeaderSearchInput/index.vue'
import NavList from './NavList.vue'
import RigthOperations from './RightOperations.vue'
import SimplifiedVersion from './SimplifiedVersion/Index.vue'
import { useHeaderStore } from '@/stores/header'
import { useCommonStore } from '@/stores/common'
const router = useRouter()

const common_store = useCommonStore()
// console.log(common_store)
function push(url: string) {
  router.push({
    path: url
  })
}

function logout() {
  logoutRequest()
}
// 头部背景
const headerStore = useHeaderStore()

function header__mouseenter() {
  headerStore.change_is_hover(true)
}
const viewWidth = ref(window.innerWidth)
// 使用防抖（setTimeout定时器）
const getWindwoInfo = () => {
  viewWidth.value = window.innerWidth
}
let timer!: null | number
const throttle = (fn: Function, delay: number) => {
  return () => {
    if (timer == null) {
      timer = setTimeout(() => {
        fn()
        clearTimeout(timer as number)
        timer = null
      }, delay)
    }
  }
}

// 触发事件 触发时间（指定时间内执行事件）
const cancelThrottle = throttle(getWindwoInfo, 500)
onMounted(() => {
  window.addEventListener('resize', cancelThrottle)
})
onUnmounted(() => {
  window.removeEventListener('resize', cancelThrottle)
})
// 是否显示功能简化logo
const is_show_fn_logo = computed(() => {
  return viewWidth.value < 770
})

function navClick(item: any) {
  router.push({
    path: item.path
  })
}

function navHover(item: any) {
  if(item.title === '解决方案') {
    common_store.change_show_solution_tab(true)
  }
}

function logo_click() {
  router.push({
    path: '/'
  })
}
</script>

<template>
  <div
    class="header_wrap"
    :class="[
      headerStore.is_hover ? 'header_wrap--hover' : 'header_wrap--default',
      viewWidth && 'header_wrap--width77'
    ]"
    @mouseenter="header__mouseenter"
  >
    <div @click="logo_click" class="logo_wrap">
      九剑云
    </div>
    <template v-if="!is_show_fn_logo">
      <div class="nav_wrap">
        <NavList @nav-hover="navHover" @nav-click="navClick" />
        <!-- <div class="nav logout" @click="logout">退出登录</div> -->
      </div>
      <div class="right_wrap">
        <div class="search_wrap">
          <!-- <HeaderSearch /> -->
          <HeaderSearchInput />
        </div>
        <div>
          <RigthOperations />
        </div>
      </div>
    </template>
    <template v-else>
      <SimplifiedVersion />
    </template>
  </div>
</template>

<style>
.right_wrap {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  white-space: nowrap;
}
.logout {
  color: red;
}
.header_wrap {
  padding-left: 20px;
  display: flex;
  font-size: 14px;
  align-items: center;
  position: relative;
  z-index: 1;
  height: 62px;
}
.header_wrap--width77 {
  justify-content: space-between;
}
.header_wrap--default {
  color: #fff;
  background: #456bdb;
}
.header_wrap--default a {
  color: #fff;
}
.header_wrap--hover {
  color: #16191a;
  background: #fff;
}
.header_wrap--hover a {
  color: #16191a;
}
a:hover {
  color: #0052d9;
}
.logo_wrap {
  width: 100px;
  text-align: center;
}

.nav_wrap {
  display: flex;
  /* flex: 1; */
  /* background: #ccc; */
  height: 60px;
  margin-right: auto;
}
@media screen and (max-width: 1400px) {
  .nav_wrap {
    padding-right: 557px;
  }
}
@media screen and (max-width: 1460px) {
  .nav_wrap {
    padding-right: 617px;
  }
}
@media screen and (max-width: 1600px) {
  .nav_wrap {
    padding-right: 677px;
  }
}
.nav {
  cursor: pointer;
  line-height: 60px;
  /* padding-left: 10px;
  padding-right: 20px; */
}
</style>
