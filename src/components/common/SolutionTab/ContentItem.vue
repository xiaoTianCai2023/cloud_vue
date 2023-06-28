<script setup lang="ts">

import { onMounted } from 'vue';
interface itemDataType {
  type: string,
  id: string,
  list: [string]
}
const props = defineProps<{
  itemData: itemDataType
}>()

// onMounted(
//   function () {
//     setTimeout(() => {
//       console.log(props.itemData);
//     }, 1000)
//   }
// )
</script>

<template>
  <div class="list">
    <h5 class="title">{{ props.itemData.type || '' }}</h5>
    <ul>
      <li v-for="item in props.itemData.list" :key="item">
        <a href="javascript:;">
          {{ item }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.list .title {
  font-weight: 500;
  color: #0053d9;
  line-height: 40px;
  font-size: 14px;
  border-bottom: 1px solid #d6dbe3;
  margin-top: 20px;
  margin-bottom: 8px;
}

.list ul {
  padding-inline-start: 0px;
}

.list li {
  cursor: pointer;
  font-size: 13px;
  line-height: 32px;
}

.list li a {
  cursor: pointer;
  color: #3a3b44;

}

.list li a:hover {
  color: #0053d9;

}
</style>