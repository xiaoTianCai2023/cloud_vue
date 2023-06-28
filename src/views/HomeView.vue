<!--
 * @Author: chenyx
 * @Date: 2023-03-11 00:00:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-11 00:01:21
 * @FilePath: /vue-9jian/src/views/HomeView.vue
-->
<script setup lang="ts">
import Accordion from '@/components/home_view/Accordion.vue';
import FrameCard from '@/components/home_view/framecard/index.vue';
import FrameTab from '@/components/home_view/FrameTab/index.vue';
import QCodeCard from '@/components/home_view/QCodeCard/index.vue';
import VideoCarousel from '@/components/home_view/carousel/VideoCarousel.vue';
import AccordionLinmu from '@/components/home_view/Accordion/index.vue'
import {accordionList} from '@/components/home_view/Accordion/textInfo'
import { getFrameTabs } from '@/http/request';
import { onMounted } from 'vue';
onMounted(async () => {
  const frameTabs = await  getFrameTabs();
})
</script>

<template>
  <div home_wrap>
    <div class="video_carousel_wrap">
      <VideoCarousel></VideoCarousel>
    </div>

    <div class="frame_tab_wrap">
      <FrameTab :frame-tabs="frameTabs"></FrameTab>
    </div>
    <div class="according_wrap">
      <!-- <Accordion></Accordion> -->
      <AccordionLinmu :accordion-list="accordionList" />
    </div>
    <div class="frame_card_wrap">
      <FrameCard></FrameCard>
    </div>
    <div class="qcode_card_wrap">
      <QCodeCard></QCodeCard>
    </div>
  </div>
</template>

<style>
.frame_card_wrap{
  width: 1420px;
  margin: 0 auto;
}
.according_wrap{
  width: 1420px;
  margin: 0 auto;
}

</style>
