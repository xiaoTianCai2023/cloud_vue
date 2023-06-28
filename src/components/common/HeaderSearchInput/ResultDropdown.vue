<script setup lang="ts">
import {useSearchStore} from '../../../stores/search'

const search_store = useSearchStore()

</script>

<template>
  <div class="search_result_wrap">
      <div v-if="search_store.result_loading" class="loding">
        <h1>加载中...</h1>
      </div>
      <div v-if="search_store.is_show_result"  class="result-item" v-for="item in search_store.result_list">{{item.title}}</div>
      <div v-if="search_store.is_show_no_result" class="no_data" >
        <h1>暂无数据</h1>
      </div>
  </div>
</template>

<style scoped lang="less">
.search_result_wrap {
  height: 400px;
  background: #fff;
  padding: 10px;
  overflow-y: auto;
  padding-left: 20px;
}
.loding{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: red;
  }
}
.no_data{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* line-height: 100%; */
  h1 {
    text-align: center;
  }
}
.result-item{
  line-height: 40px;
  color: #2c3645;
}
.result-item:hover{
  color: #0052d9;
  background: #f1f2f5;
}
</style>
