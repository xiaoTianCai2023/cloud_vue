<script setup lang="ts">
import FrameIcon from '../../common/FrameIcon.vue';
import tab from './tab.vue';
import item from './item.vue';
import { ref, reactive, provide } from "vue";
const props = defineProps({
      frameTabs: {
            type: Array,
            default: () => [
            {
                  id: 1,
                  name: '热门推荐',
                  url: 'https://main.qcloudimg.com/trisys/assets/home/images/product/ani-hot.png',
                  left_card:[{
                        name: '轻量应用服务器',
                        dec: '开箱即用，轻量应用场景首选',
                        id: 1
                  },{
                        name: '腾讯会议',
                        dec: '“云+端+AI”云视频会议解决方案',
                        id: 2
                  }],
                  right_card: [{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固'],
                        marks_bubble: '特惠热卖',
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  }]
            },
            {
                  id: 2,
                  name: '计算',
                  url: 'https://main.qcloudimg.com/trisys/assets/home/images/product/ani-base.png',
                  left_card:[{
                        name: '云服务器',
                        dec: '安全稳定，高弹性的计算服务',
                        id: 1
                  },{
                        name: '轻量应用服务器',
                        dec: '开箱即用，轻量应用场景首选',
                        id: 2
                  }],
                  right_card: [{
                        name: 'GPU 云服务器',
                        dec: '极致并行计算能力，专业计算加速服务',
                        tags: ['选型丰富', '极致性能', '加速服务']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  }]
            },
            {
                  id: 3,
                  name: '容器与中间件',
                  url: 'https://main.qcloudimg.com/trisys/assets/home/images/product/ani-middleware.png',
                  left_card:[{
                        name: '消息队列 TDMQ',
                        dec: '高可靠，轻量级消息队列',
                        id: 1
                  },{
                        name: '容器服务',
                        dec: '高可扩展和高性能容器管理服务',
                        id: 2
                  }],
                  right_card: [{
                        name: '微服务引擎',
                        dec: '开源增强的微服务组件托管服务',
                        tags: ['注册中心', '配置中心', '服务治理']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  }]
            },
            {
                  id: 4,
                  name: '存储',
                  url: 'https://main.qcloudimg.com/trisys/assets/home/images/product/ani-storage.png',
                  left_card:[{
                        name: '对象存储',
                        dec: '安全、易用、低成本的海量云端存储服务',
                        id: 1
                  },{
                        name: '云硬盘',
                        dec: '持久性数据块存储设备',
                        id: 2
                  }],
                  right_card: [{
                        name: '文件存储',
                        dec: '可共享的文件存储服务',
                        tags: ['集成管理', '按需付费', '安全可靠']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  }]
            },
            {
                  id: 5,
                  name: '数据库',
                  url: 'https://main.qcloudimg.com/trisys/assets/home/images/product/ani-database.png',
                  left_card:[{
                        name: '云原生数据库  TDSQL-C',
                        dec: '完全兼容 MySQL 和 PG 自研数据库',
                        id: 1
                  },{
                        name: '云数据库 Redis',
                        dec: '高性能、低延迟、可伸缩的 Redis 数据库',
                        id: 1
                  }],
                  right_card: [{
                        name: '云数据库 MySQL',
                        dec: '高性能、可靠、安全的全托管云数据库',
                        tags: ['高可用性', '稳定可靠', '性能卓越']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  }]
            },
            {
                  id: 6,
                  name: '网络与CDN',
                  url: 'https://main.qcloudimg.com/raw/aa866277d1ea20bc4d8471dc6a11957c.png',
                  left_card:[{
                        name: '负载均衡',
                        dec: '对多台服务器进行流量分发',
                        id: 1
                  },{
                        name: '内容分发网络 CDN',
                        dec: '快速、稳定、智能、可靠的内容加速服务',
                        id: 1
                  }],
                  right_card: [{
                        name: '私有网络',
                        dec: '独立隔离的网络空间',
                        tags: ['高可用', '完全隔离', '多样化接入']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  }]
            },
            {
                  id: 7,
                  name: '视频服务',
                  url: 'https://main.qcloudimg.com/trisys/assets/home/images/product/ani-video.png',
                  left_card:[{
                        name: '实时音视频',
                        dec: '低延时互动直播及高品质音视频通话服务',
                        id: 1
                  },{
                        name: '云直播',
                        dec: '极速、稳定、专业的云端直播处理服务',
                        id: 2
                  }],
                  right_card: [{
                        name: '标准直播',
                        dec: '专业稳定快速的直播接入和分发服务',
                        tags: ['超低延迟', '大并发访问'],
                        marks_tag: '低至3折',
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  },{
                        name: 'Elasticsearch Service',
                        dec: '开箱即用的云端全托管ELK服务',
                        tags: ['易于部署', '强劲内核', '安全加固']
                  }],
            }]
      }
});
let current = ref<number>(1);

</script>

<template>
  <div class="frame">
      <div class="frame-hd">
            <h1 class="frame-hd__title">性能强大、安全、稳定的云产品</h1>
            <span class="frame-hd__sub-title">腾讯多年技术沉淀，300+ 款产品共筑腾讯云产品矩阵</span>
      </div>
      <div class="frame-menu">
            <tab :data="frameTabs" v-model:current="current"/>
      </div>
      <div class="frame-items">
            <template v-for="(item, id) in frameTabs" :key="id">
            <item v-if="current === +item.id" :data="item"  class="frame-item" />
            </template>
      </div>
  </div>
</template>
<style>
.frame{
      text-align: center;
      margin: 0 auto;
      background-image: radial-gradient(50% 41%,#f3f5f8 0,#fff 41%);
      padding-top: 124px;
}
.frame-items{
      background: #f3f5f8;
      box-shadow: inset 8px 8px 20px 0 rgba(55,99,170,.11), inset -8px -8px 20px 0 #fff;
      padding: 40px;
}
.frame-menu{
      max-width: 1180px;
      margin: auto;
}
.frame-hd{
      margin-bottom: 32px;
}
.frame-hd__title{
      font-weight: 500;
      font-size: 28px;
      color: #000;
      line-height: 48px;
}
.frame-hd__sub-title{
      font-size: 14px;
      color: #3d485d;
      line-height: 20px;
      margin-top: 12px;
}
</style>