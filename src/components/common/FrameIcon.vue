<script setup lang="ts">
import { reactive, ref } from 'vue'

// url代表图片地址
let props = defineProps({
  url: String
})

const url = ref(props.url)

let isEnter = ref(false)
let isLeave = ref(false)

function mouseenter() {
  isEnter.value = true
  isLeave.value = false
}

function mouseleave() {
  isEnter.value = false
  isLeave.value = true
}
// props = reactive(props)
</script>

<template>
  <div
    :class="{
      fram_icon_wrap: true,
      enter: isEnter,
      leave: isLeave
    }"
    :style="{
      background: 'url(' + url + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% auto',
      backgroundPosition: 'top'
    }"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
  ></div>
</template>

<style scoped>
.fram_icon_wrap {
  cursor: pointer;
  width: 60px;
  height: 60px;
}

.enter {
  animation: icon_enter 0.5s steps(24) forwards;
}

.leave {
  animation: icon_leave 0.5s steps(24) forwards;
}

@keyframes icon_enter {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 0 -1440px;
  }
}

@keyframes icon_leave {
  0% {
    background-position: 0 -1440px;
  }

  to {
    background-position: 0 0;
  }
}
</style>
