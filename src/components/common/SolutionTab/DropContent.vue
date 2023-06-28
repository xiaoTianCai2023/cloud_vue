<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import ContentItem from "./ContentItem.vue";
import { useCommonStore } from '@/stores/common';
const common_store = useCommonStore()

const props = defineProps(['allContentList'])

let myShowList:any = reactive([])
let myShowListData:any = reactive([])

// 监听获取异步获取的props.showList数据及index值的变化
watch(
  () => [props.allContentList, common_store.show_solution_tab_index],
  ([newList, newIndex]) => {
    if (JSON.stringify(newList) ==='[]') {
      return
    }
    myShowList = newList[newIndex].content
    
    // 将数据处理成四组二位数组
    myShowListData = []
    const col = 4  // 列数
    const num = Math.ceil(myShowList.length / col) //每列最大个数
    for (let i = 0; i < col; i++) {
      const newArr = myShowList.slice(i * num, i * num + num)
      myShowListData.push(newArr)
    }
  }
);
</script>

<template>
  <div class="allList">
    {{ common_store.show_solution_tab_index }}
    <ul v-for="typeItem in myShowListData" :key="typeItem" v-if="myShowListData">
      <li v-for="item in typeItem" :key="item">
        <ContentItem :itemData="item" />
      </li>
    </ul>
  </div>
</template>

<style  scoped>
.allList {
  display: flex;
  min-width: 400px;
}

.allList>ul {
  flex: 1;
  width: 25%;
  padding-right: 20px;
}
</style>