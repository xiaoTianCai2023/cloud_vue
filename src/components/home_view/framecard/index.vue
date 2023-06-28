<template>
  <div class="frame-card-container">
    <FrameCardList :frameCardData="frameCardData" class="frame-card-list">

    </FrameCardList>
  </div>
</template>


<script setup lang="ts">
import { reactive, provide } from 'vue'
import FrameCardList from './components/FrameCardList.vue'

const frameCardData = reactive([
  {
    id: 1,
    solutionName: '教育',
    desc: '教育行业数字助手',
    imgUrl: 'https://qcloudimg.tencent-cloud.cn/raw/1bab9190781de375c4291f069886fe74.png'
  },
  {
    id: 2,
    solutionName: '大数据',
    desc: '快速构建企业级数据架构',
    imgUrl: 'https://qcloudimg.tencent-cloud.cn/raw/e9405a43d1c3e68b3e2eb42f6783f987.png'
  },
  {
    id: 3,
    solutionName: '专有云',
    desc: '专业安全稳定的云平台',
    imgUrl: 'https://qcloudimg.tencent-cloud.cn/raw/77d8ac28ee107e0523b8ca60fe8852d4.png'
  },
  {
    id: 4,
    solutionName: '安全',
    desc: '快速省心一站式过等保',
    imgUrl: 'https://qcloudimg.tencent-cloud.cn/raw/6805e8de35b66e7e87fe4d06d3a3d09e.png'
  },
  {
    id: 5,
    solutionName: '医疗',
    desc: '助力健康产业智慧化升级',
    imgUrl: 'https://qcloudimg.tencent-cloud.cn/raw/bfbcf8d7614bcd231c16da40ea1d48b5.png'
  },
  {
    id: 6,
    solutionName: '云支付',
    desc: '开放可靠的支付SaaS服务',
    imgUrl: 'https://qcloudimg.tencent-cloud.cn/raw/4f38122e35629dd3bd3a567251ca03b9.png'
  },
  {
    id: 7,
    solutionName: '文旅',
    desc: '文旅产业数字化转型升级',
    imgUrl: 'https://qcloudimg.tencent-cloud.cn/raw/e44f8613c89741b78886fc6680effaa7.png'
  },
  {
    id: 8,
    solutionName: '小程序·云开发',
    desc: '稳定可靠一站式后端云服务',
    imgUrl: 'https://qcloudimg.tencent-cloud.cn/raw/c92a7debc16466ddd27a7e5b0c1eb6ef.png'
  },
  {
    id: 9,
    solutionName: '政务',
    desc: '打造全域融合信息化平台',
    imgUrl: 'https://qcloudimg.tencent-cloud.cn/raw/c2e41321fb9197e53d4fdb10dcd773ed.png'
  },
  {
    id: 10,
    solutionName: '全部解决方案',
    desc: '查看更多',
    imgUrl: ''
  }
])
provide('frameCardData', frameCardData)
</script>

<style scoped>
.frame-card-container {
  display: flex;
  width: 100%;
  height: 256px;
  justify-content: center;
  align-items: center;
}
.frame-card-list {
  display: flex;
}
</style>