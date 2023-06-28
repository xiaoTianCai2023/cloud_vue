<template>
  <div class="search">
    <input type="search" placeholder="搜索方案名称" />
    <ul>
      <li v-for="item in searchKeywords" :key="item.name"> 
        <a :href="item.url">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

const props = defineProps(['searchKeywords'])

</script>

<style  scoped>
.search {
  display: flex;
}
.search>input {
  height: 40px;
  min-width: 240px;
  width: 30%;
  background-color: #fff;
  border-radius: 2px;
  border: 1px solid #e8e8e8;
  padding-left: 10px;
  padding-right: 10px;
}

input::placeholder {
  color: #ccc;
}

.search>ul {
  display: flex;
  padding-inline-start: 0px;
}

.search>ul>li {
  height: 40px;
  background-color: #DFE4ED;
  padding-left: 8px;
  padding-right: 8px;
  margin-left: 16px;
  border-radius: 2px;
  font-size: 13px;
  line-height: 40px;
  cursor: pointer;
}

.search>ul>li>a {
  color: #202330;
}

.search>ul>li:hover {
  background-color: #0053D9;
  transition: .3s ease-in-out;

}

.search>ul>li:hover>a {
  color: #fff;
}
</style>