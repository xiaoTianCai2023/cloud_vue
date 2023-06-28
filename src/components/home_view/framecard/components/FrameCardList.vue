<template>
  <div class="list">
    <ul class="tpm-solution2__navs">
      <FrameCardItem></FrameCardItem>
    </ul>
  </div>
</template>

<script setup lang="ts">
import FrameCardItem from './FrameCardItem.vue';

</script>

<style scoped>
.tpm-solution2__navs {
  display: flex;
  flex-wrap: wrap;
  margin: 20px -10px -20px;
  width: 1440px;
  height: 256px;
  justify-content: center;
  align-items: center;
  list-style-type: none;
}
</style>