<script setup lang="ts">

import { reactive, onMounted } from "vue";

import DropNav from './DropNav.vue'
import DropSearch from './DropSearch.vue'
import DropContent from './DropContent.vue'
import DropNews from './DropNews.vue'

import { useCommonStore } from '@/stores/common'
import { getSolutionTabs } from "@/http/request";

const common_store = useCommonStore()

const mouseleave = () => {
  common_store.is_show_solution_enter = false
  common_store.change_show_solution_tab(false)
}
const mouseenter = () => {
  common_store.is_show_solution_enter = true
  common_store.change_show_solution_tab(true)
}

let searchKeywords: { name: string, url: string }[] = reactive([])
let allContentList:any = reactive([])
let navList: Array<string> = reactive([])

interface ListDataType {
  tab: string,
  id: string,
  content: any
}
onMounted(
  async () => {
    const res = await getSolutionTabs()
    
    allContentList = res.data.list
    allContentList[1].content.splice(8, 1);
    
    searchKeywords = res.data.search_keywords

    allContentList.forEach((item: ListDataType, index:number) => {
      navList[index] = item.tab
    })
  }
);

</script>

<template>
  <!-- <Transition name="drop"> -->
  <div
    class="solution_tab_wrap"
    :style="common_store.is_show_solution_tab ? { height: '800px' } : ''"
    @mouseleave="mouseleave"
    @mouseenter="mouseenter"
  >
    <!-- 模块9：解决方案下拉菜单栏 -->
    <!-- 左侧导航 -->
    <DropNav :navList="navList"/>

    <!-- 右侧内容 -->
    <div class="content">
      <div>
        <!-- 列表 -->
        <div class="list">
          <!-- 搜索 -->
          <DropSearch :searchKeywords="searchKeywords" />

          <!-- 详细分类 -->
          <DropContent :allContentList = "allContentList"/>
        </div>

        <!-- 推荐区域 -->
        <DropNews />
      </div>
    </div>

    <div class="close" @click="mouseleave">
      <img src="@/assets/image/close.png" alt="" />
    </div>
  </div>
  <!-- </Transition> -->
</template>

<style scoped>
.solution_tab_wrap {
  position: fixed;
  transition: all 0.2s ease-in;
  top: 60px;
  display: flex;
  justify-content: space-between;
  height: 0;
  width: 100%;
  background-color: #f1f2f5;
  box-shadow: 0 4px 10px #e2e3e7;
  z-index: 100;
  overflow: hidden;
}

.content {
  flex: 3;
  text-align: left;
  padding: 50px;
  box-sizing: border-box;
  overflow: auto;
}

.content > div {
  display: flex;
  min-width: 1000px;
}

.content > div > .list {
  flex: 3;
}

.close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
</style>
