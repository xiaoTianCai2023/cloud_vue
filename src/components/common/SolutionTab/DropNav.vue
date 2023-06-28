<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useCommonStore } from '@/stores/common';

const props = defineProps(['navList'])


const isShowLine = ref(false);
const prevIndex = ref(0);
const common_store = useCommonStore()

const changeIndex = (index: number) => {

  isShowLine.value = false
  prevIndex.value = index
  isShowLine.value = true

  // 改变公共状态 show_solution_tab_index 值
  common_store.change_solution_tab_index(index)
};

// 加载执行 
onMounted(() => {
  isShowLine.value = false
  isShowLine.value = true
})
</script>

<template>
  <div class="nav">
    <div>
      <h4>ICON 查看全部解决方案</h4>
      <ul class="navList">
        <li v-for="(item, index) in navList" :key="item" :class="index === prevIndex ? 'active' : ''"
          @mouseenter="changeIndex(index)">
          {{ item }}
          <div class="underline">
            <Transition name="moveLine">
              <div v-show="isShowLine && index === prevIndex"></div>
            </Transition>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.nav {
  position: relative;
  flex: 1;
  background: #fff url('@/assets/image/nav_bg.png') no-repeat bottom right;
  text-align: right;
  min-width: 240px;
}

.nav>div {
  position: absolute;
  right: 0;
  top: 0;
  width: 240px;
  height: 100%;
  text-align: left;
  padding-top: 50px;
  padding-left: 20px;
  box-sizing: border-box;
}

.nav h4 {
  color: #0053D9;
  font-weight: 500;
  margin-bottom: 20px;
}

.nav .navList {
  line-height: 50px;
}

.nav .navList li {
  position: relative;
  width: 96px;
  cursor: pointer;
  color: #202330;
}

.nav .navList li.active {
  color: #0053D9;
}

.nav .navList li .underline {
  position: absolute;
  bottom: 4px;
  left: 0;
  height: 4px;
  width: 96px;
  overflow: hidden;
}

.nav .navList li .underline>div {
  position: absolute;
  top: 0;
  left: 0;
  height: 2px;
  width: 96px;
  background-color: #0053D9;
  /* transition: 0.5s ease-in-out; */
}

.moveLine-enter-active,
.moveLine-leave-active {
  transition: all .5s ease-in-out;
}

.moveLine-enter-from,
.moveLine-leave-to {
  transform: translateX(-96px);
  opacity: 0;
}
</style>