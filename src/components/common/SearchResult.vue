<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import { useSearchStore } from '@/stores/headerSearch'
const search_store = useSearchStore()
function searchDetail(title:string){
  window.location.href = `https://cloud.tencent.com/search/${title}/1_1`
}
onMounted(()=>{
  console.log(1233,search_store.searchResult)
})
</script>
<template>
  <div class="search_result_wrap">
      <div class="result-item" v-for="item in Object.values(search_store.searchResult)" @click="searchDetail(item.title)">{{item.title}}</div>
  </div>
</template>

<style scoped>
.search_result_wrap {
  height: 400px;
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
