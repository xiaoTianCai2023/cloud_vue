<script setup lang="ts">
import FrameIcon from '../../common/FrameIcon.vue';
import { defineEmits } from "vue";
const props = defineProps({
      data: {
            type: Object,
            default: () => {},
      },
      current: {
            type: Number,
            default: 1,
      }
});
const emit = defineEmits(['update:current'])
const handleChange = (id: number | String) => {
      emit('update:current', id)
}
</script>

<template>
  <section class="frame-tabs">
      <div 
            v-for="(item, idx) in data" 
            :key="item.id" class="frame-tab" 
            :class="{'is-active': +item.id===current}"
            @click="handleChange(item.id)"
      >
            <div class="frame-tab__item">
                  <FrameIcon
                        :url="item.url"
                        class="frame-tab__icon"
                  ></FrameIcon>
                  <span>{{item.name}}</span>
            </div>
      </div>
  </section>
</template>
<style scoped>
.frame-tabs{
      display: flex;
}
.frame-tab{
      flex: 1;
      padding-bottom:20px;
      color: #3d485d;
      position: reactive;
}
.is-active::after{
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      border-bottom: 4px solid #0052d9;
      content: "";

}
.frame-tab__item{
      display: inline-block;
      cursor: pointer;
      font-size: 16px;
      line-height: 24px;
}
.frame-tab:hover{
      color:#0052d9;
}
.frame-tab__icon{
      margin: 0 auto 12px;
}
</style>