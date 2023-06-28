<template>
  <div class="carousel-container">
    <Carousel :autoplay="true" :durdation="3000" :hasDot="true" :bannerList="bannerList"
      class="carousel-warp">
      <CarouselItem class="carousel-item" v-for="(item, index) in bannerList" :selfIndex="index" :key="index">
        <div class="item-bg" :style="{
          background: 'url(' + item.bgUrl + ')',
        }">
          <div class="bg-content">
            <video v-if="item.type" muted autoplay loop :src="item.src"></video>
            <img class="model-inner-wrap" v-if="!item.type" :src="item.src" alt="">
          </div>
        </div>
        <div class="item-content">
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
          <div class="btn" @click="toPath(item.path)">
            <button> <span>立即选购</span></button>
          </div>
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Carousel from "./components/Carousel.vue";
import CarouselItem from "./components/CarouselItem.vue";

import img1 from '@/assets/images/img1.png'
// type 1: video  0: img
const bannerList = ref([
  {
    type: 1,
    title: '2023新春采购节',
    desc: '领8888元采购礼包，抢爆款2核2G云服务器 8元/月起',
    bgUrl: 'https://qcloudimg.tencent-cloud.cn/raw/b361329ea1c6aac5c194b9b74653bd4c.jpg',
    src: 'https://qcloudimg.tencent-cloud.cn/raw/f253c62ded01bc2fd5e73ce8345ffcc4.mp4',
    path: 'https://cloud.tencent.com/act/pro/2023spring?from=19673',
  },
  {
    type: 0,
    title: '企业服务中心',
    desc: '为企业提供多行业场景解决方案及企业专属优惠，助力企业实现数字化转型升级',
    bgUrl: 'https://main.qcloudimg.com/trisys/assets/home/images/hero/demo-ani-bg.jpg',
    src: img1,
    path: '',
  },
  {
    type: 0,
    title: 'CDN&音视频通信会场',
    desc: '短信0.032元/条起，CDN 0.06元/GB起，直播/点播/TRTC 套餐包0.1折起',
    bgUrl: 'https://main.qcloudimg.com/trisys/assets/home/images/hero/demo-ani-bg.jpg',
    src: img1,
    path: '',
  },
  
  {
    type: 0,
    title: '大数据 新春盛惠专场',
    desc: '移动推送、BI、Doris、ES、数据湖计算、WeData、流计算、智能推荐，爆款限量秒杀，组合购买更优惠',
    bgUrl: 'https://main.qcloudimg.com/trisys/assets/home/images/hero/demo-ani-bg.jpg',
    src: img1,
    path: '',
  },
  {
    type: 0,
    title: '会员权益中心',
    desc: '10日会员日限时领取活动可用优惠券，老用户续费更优惠',
    bgUrl: 'https://main.qcloudimg.com/trisys/assets/home/images/hero/demo-ani-bg.jpg',
    src: img1,
    path: '',
  },
])
const toPath = (url: string) => {
  window.open(url)
}
</script>

<style scoped>
.carousel-warp {
  width: 100%;
  height: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
}

.carousel-item {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: opacity 0.5s linear;
  color: black;
}

.carousel-item .item-bg {
  position: absolute;
  left: -50px;
  right: -50px;
  top: -50px;
  bottom: -50px;
  width: auto;
  height: auto;
  z-index: 1;
  .bg-content .model-inner-wrap{
      position: absolute;
      left: 50%;
      top: 124px;
      margin-left: 188px;
      width: 460px;
      height: 392px;
    }
}

.carousel-item:first-child .item-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-position: top !important;
  background-size: auto 100% !important;
  background-repeat: no-repeat !important;

  .bg-content {
    width: 100%;
    height: 100%;
    video {
      position: absolute;
      left: 50%;
      top: 0;
      width: 1920px;
      height: 100%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      overflow: hidden;
      -o-object-fit: cover;
      object-fit: cover;
    }
    
  }

}

.carousel-item:first-child .item-content {
  .title,
  .desc {
    color: #fff;
  }

  .btn button {
    background-color: #FF542F;
  }
}

.carousel-item .item-content {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  margin: 0 auto;
  max-width: 1420px;
  padding-left: calc(33.33333% - 183.33333px);
  padding-top: 158px;
  padding-right: 447px;
  box-sizing: border-box;

  .title,
  .desc {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .title {
    margin-bottom: 20px;
    font-size: 36px;
    line-height: 44px;
    color: #181818;
    font-weight: 500;
    max-height: 88px;
  }

  .desc {
    font-size: 16px;
    color: #4b5b76;
    line-height: 24px;
    max-height: 48px;
  }

  .btn {
    margin-top: 32px;

    button {
      box-sizing: border-box;
      padding: 0 24px;
      color: #fff;
      font-size: 14px;
      line-height: 34px;
      white-space: nowrap;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      background-color: #0052d9;
      border: 1px solid transparent;
      outline: 0 none;
      cursor: pointer;
      box-shadow: 8px 8px 20px 0 rgb(55 99 170 / 10%);
      min-width: 176px;
      padding: 0 24px;
      font-size: 16px;
      height: 44px;
      line-height: 42px;
      display: inline-block;
    }
  }
}</style>
