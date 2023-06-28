<script setup>
import { computed } from 'vue'

defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:visible'])

const cancel = () => {
  emit('update:visible', false)
}
</script>

<template>
  <div class="drawer_wrap" v-show="visible">
    <div class="drawer_container">
      <slot></slot>
    </div>

    <div @click="cancel" class="drawer_close">
      <!-- x -->
      <!-- <img :src="require(`@/assets/image/close.png`)" /> -->
    </div>
  </div>
</template>
<style scoped>
.drawer_wrap {
  position: fixed;
  background: #fff;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;
}
.drawer_close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  padding: 0 16px;
  /* background-size: 24px 24px; */
  /* background-image: url(@/assets/image/close.png); */
  background: url(@/assets/image/close.png) no-repeat left center;
  z-index: 10;
}
</style>
