<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, ref, watch, watchEffect} from 'vue'
import {useSearchStore} from '../../../stores/search'
 
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

function clear() {
  search_store.history_list.clear()
}

onMounted(() => {
  const str: any = localStorage.getItem('history_search');
  const str_arr = JSON.parse(str)
  // debugger
  // ssss
  search_store.history_list = new Set(str_arr)
})

search_store.$subscribe((mutation, state) => {
  // console.log(mutation, state)
  const str = JSON.stringify([...search_store.history_list])
  // console.log('sssssssss', str)
  localStorage.setItem('history_search', str);
})

</script>
<template>
  <div class="main_dropdown_wrap">
    <div>
      <div class="search-box">
        <div class="history_icon_wrap">
          <div class="search-hotkey">历史搜索</div>
          <span>
            <img @click="clear" src="https://cloudcache.tencent-cloud.com/qcloud/portal/kit/images/slice/icon-delete.716ad938.svg"
              alt="">
          </span>
        </div>
        <div class="search-keys">
          <span v-for="item in search_store.history_list">{{item}}</span>
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
  </div>
</template>

<style scoped lang="less">
.main_dropdown_wrap {
  width: calc(100% - 0px);
  position: absolute;
  top: 10px;
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
