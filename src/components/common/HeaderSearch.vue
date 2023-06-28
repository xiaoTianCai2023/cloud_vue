<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
// import { useSearchStore } from '@/stores/headerSearch'
import { searchPostRequest } from '../../http/request'
import { debounce } from 'lodash-es'

const search_store = useSearchStore()
let listTop: { value: number } = ref(0)
let searchValue: { value: string } = ref('')
let isShowSearchInput: { value: boolean } = ref(false)

let list: string[] = [
  '云服务器',
  '实时音视频',
  '域名',
  '对象存储',
  'TDSQL-C MYSQL 版',
  '轻量应用服务器',
  '腾讯会议'
]
function setScroll() {
  let t = setInterval(() => {
    listTop.value -= 1
    if (listTop.value === -40) {
      list.push(list.splice(0, 1)[0])
      listTop.value = 0
      clearInterval(t)
      setTimeout(() => {
        setScroll()
      }, 2000)
    }
  }, 20)
}
async function searchContent() {
  let res = await searchPostRequest({
    search: searchValue.value
  })
  search_store.set_searchResult(res.data.dataList)
}

//搜索
function search_input_focus(value: string) {
  isShowSearchInput.value = true
  // searchValue.value = value
  search_store.set_showSearchResult(false)
}
function searchClick() {
  // 过滤掉重复的数据
  let search_input = search_store.search_input.trim()

  if(!search_store.historySearch.includes(search_input)) {
    search_store.push_historySearch(search_input);
  }
}
function closeSearch_input() {
  isShowSearchInput.value = false
  search_store.set_search_input('')
  search_store.set_searchResult([])
}

async function handle_search_input(e: any) {
  let res = await searchPostRequest({
    search: e.target.value
  })
  search_store.set_searchResult(res.data.dataList)
}

const handle_search_input_debounce = debounce(handle_search_input, 300)

onMounted(() => {
  setScroll();
})

</script>
<template>
  <div class="header_wrap">
    <!-- <h1 class="green">模块8：   头部搜索框</h1> -->
    <div class="header_box" v-if='!isShowSearchInput'>
      <div class="list">
        <div class="item" v-for="(item, inex) in list" @click="search_input_focus(item)">
          <span :style="{top:listTop+'px'}">{{item}}</span>
          <img class="search-icon"
            src="https://cloudcache.tencent-cloud.com/qcloud/portal/kit/images/slice/search.7a49bf02.svg"
            alt="">
        </div>
      </div>
    </div>

    <div class="input-wrap" v-else>
      <div class="input-box">
        <input type="text" class="input" @input="handle_search_input_debounce" :placeholder="searchValue" v-model="search_store.search_input">
      </div>
      <span class="close-icon">
        <img @click="searchClick"
          src="https://cloudcache.tencent-cloud.com/qcloud/portal/kit/images/slice/search.7a49bf02.svg"
          alt="">
        <img @click="closeSearch_input"
          src="https://cloudcache.tencent-cloud.com/qcloud/portal/kit/images/slice/search-close.24377927.svg"
          alt="">
      </span>
    </div>
  </div>
</template>

<style scoped>
.header_wrap {
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  right: 0px;
}
.header_box {
  width: 300px;
  height: 40px;
  overflow: hidden;
  position: relative;
}
.list {
  width: 100%;
  height: 200px;
  border: 0px solid rgba(155, 166, 183, 0.4);
  position: absolute;
  left: 0px;
  cursor: pointer;
  background: #f7f9fb;
  font-size: 14px;
}
.item {
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  border: 1px solid rgba(155, 166, 183, 0.4);
  border-radius: 4px;
}
.search-icon {
  position: absolute;
  right: 12px;
  top: 13px;
  cursor: pointer;
  z-index: 99;
}
.input-wrap {
  height: 60px;
  display: flex;
  justify-content: space-between;
  animation: 0.3s wordsLoop ease-in-out;
  /* animation: all 0.3s ease-in-out; */
  /* border: 1px solid #0052d9; */
  cursor: pointer;
  position: absolute;
  right: 0px;
  padding-left: 20px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 8px 20px 0 rgb(55 99 170 / 10%);
  z-index: 1;
  align-items: center;
}
.input-wrap-close {
  height: 40px;
  display: flex;
  justify-content: space-between;
  animation: 0.3s closeloop ease-in-out;
  /* animation: all 0.3s ease-in-out; */
  border: 1px solid #0052d9;
  cursor: pointer;
  position: absolute;
  right: 0px;
}
.close-icon {
  position: absolute;
  right: 10px;
  top: 22px;
}
.close-icon img {
  margin-left: 20px;
}
.input-box {
  width: 600px;
}
.input {
  width: 100%;
  height: 40px;
  border: 1px solid #0052d9;
  outline: none;
  padding-left: 10px;
}
@keyframes wordsLoop {
  0% {
    width: 400px;
  }
  /* 50% {
   width: 300px;
  } */
  100% {
    width: 620px;
  }
}
@keyframes closeloop {
  0% {
    width: 500px;
  }
  /* 50% {
   width: 300px;
  } */
  100% {
    width: 400px;
  }
}
</style>