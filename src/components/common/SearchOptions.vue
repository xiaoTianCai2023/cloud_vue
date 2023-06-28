<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
// import { useSearchStore } from '@/stores/headerSearch'
import SearchResult from './SearchResult.vue'
import { storeToRefs } from 'pinia';


const search_store = useSearchStore()

let searchHotKeys: { value: string[] } = ref([
  '云服务器',
  '实时音视频',
  '域名',
  '对象存储',
  'TDSQL-C MYSQL 版',
  '轻量应用服务器',
  '腾讯会议',
  '短信'
])
let searchExtendKeys: { value: string[] } = ref([
  '即时通信 IM',
  '云呼叫中心',
  'SSL 证书',
  '云开发',
  '消息队列 TDMQ',
  '云数据库 Redis',
  '低代码互动课堂',
  '微服务平台 TSF'
])

onMounted(() => {
  const history_search_str = localStorage.getItem('history_search') || '[]'
  const history_search = JSON.parse(history_search_str)
  search_store.set_historySearch(history_search)
})

function clear_history() {
  localStorage.setItem('history_search', '[]')
  search_store.set_historySearch([])
}

</script>
<template>
  <div class="search_options_wrap">
    <div v-if="!search_store.searchResult.length">
      <div class="search-box" v-if="Object.values(search_store.historySearch).length">
        <div class="history_icon_wrap">
          <div class="search-hotkey">历史搜索</div>
          <span @click="clear_history">
            <img src="https://cloudcache.tencent-cloud.com/qcloud/portal/kit/images/slice/icon-delete.716ad938.svg"
              alt="">
          </span>
        </div>
        <div class="search-keys">
          <span v-for='(item, index) in Object.values(search_store.historySearch)'>{{ item }}</span>
        </div>
      </div>
      <div class="search-box">
        <div class="search-hotkey">热门搜索</div>
        <div class="search-keys">
          <span v-for='(item, index) in searchHotKeys'>
            <a :href="'https://cloud.tencent.com/search/' + item + '/1_1'">{{ item }}</a>
          </span>
        </div>
      </div>
      <div class="search-box">
        <div class="search-hotkey">趋势搜索</div>
        <div class="search-keys">
          <span v-for='(item, index) in searchExtendKeys'>
            <a :href="'https://cloud.tencent.com/search/' + item + '/1_1'">{{ item }}</a>
          </span>
        </div>
      </div>
    </div>
    <div class="result" v-else>
      <SearchResult></SearchResult>
    </div>
  </div>
</template>

<style scoped lang="less">
.search_options_wrap {
  width: calc(100% - 0px);
  position: absolute;
  top: 60px;
  left: 0px;
  background: #fff;
  border-top: 1px solid #d6dbe3;
  padding: 20px;
  box-shadow: 0 8px 20px 0 rgb(55 99 170 / 10%);
}

.search-hotkey {
  margin-bottom: 12px;
  font-size: 14px;
  color: #5f7292;
  line-height: 22px;
  padding: 10px 10px 0;
  font-weight: 500;
}

.search-keys {
  display: flex;
  flex-wrap: wrap;
}

.search-keys span {
  margin: 10px 10px;
  color: #181818;
}

.search-keys span a {
  color: #181818;
}

.search-keys span a:hover {
  color: #0052d9;
}

.history_icon_wrap{
  display:  flex;
  span {
    position: relative;
    top: 13px;
  }
}


</style>
