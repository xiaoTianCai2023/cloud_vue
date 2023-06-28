<script setup lang="ts">
// 序列帧卡片

import { reactive, ref } from "vue";

const dataList = reactive([{
  id:1,
  name:'教育',
  des:'教育行业数字助手',
  icon:'https://qcloudimg.tencent-cloud.cn/raw/1bab9190781de375c4291f069886fe74.png'
},
{
  id:2,
  name:'大数据',
  des:'快速构建企业级数据架构',
  icon:'https://qcloudimg.tencent-cloud.cn/raw/e9405a43d1c3e68b3e2eb42f6783f987.png'
},
{
  id:3,
  name:'专有云',
  des:'专业安全稳定的云平台',
  icon:'https://qcloudimg.tencent-cloud.cn/raw/77d8ac28ee107e0523b8ca60fe8852d4.png'
},
{
  id:4,
  name:'安全',
  des:'快速省心一站式过保等',
  icon:'https://qcloudimg.tencent-cloud.cn/raw/6805e8de35b66e7e87fe4d06d3a3d09e.png'
},
{
  id:5,
  name:'医疗',
  des:'助力健康产业智慧化升级',
  icon:'https://qcloudimg.tencent-cloud.cn/raw/bfbcf8d7614bcd231c16da40ea1d48b5.png'
},
{
  id:6,
  name:'云支付',
  des:'开放可靠的支付SaaS服务',
  icon:'https://qcloudimg.tencent-cloud.cn/raw/4f38122e35629dd3bd3a567251ca03b9.png'
},
{
  id:7,
  name:'文旅',
  des:'文旅产业数字化转型升级',
  icon:'https://qcloudimg.tencent-cloud.cn/raw/e44f8613c89741b78886fc6680effaa7.png'
},
{
  id:8,
  name:'小程序·云开发',
  des:'稳定可靠一站式后端云服务',
  icon:'https://qcloudimg.tencent-cloud.cn/raw/c92a7debc16466ddd27a7e5b0c1eb6ef.png'
},
{
  id:9,
  name:'政务',
  des:'打造全域融合信息化平台',
  icon:'https://qcloudimg.tencent-cloud.cn/raw/c2e41321fb9197e53d4fdb10dcd773ed.png'
}])


let isEnter = ref<boolean>(false)
let isLeave = ref<boolean>(false)
let nowIndex = ref<number|null>(null);

function mouseenter(i:number) {
    isEnter.value = true;
    isLeave.value = false;
    nowIndex.value = i;
}

function mouseleave(i:number) {
    isEnter.value = false
    isLeave.value = true
    nowIndex.value = i
}

</script>

<template>
  <div class="frame_card_content">
      <div class="item" v-for="(item ,i) in dataList" :key=item.id @mouseenter="mouseenter(i)" @mouseleave="mouseleave(i)">
        <div class="name">{{item.name}}</div>
        <div class="des">{{item.des}}</div>
        <i :style="{
          background: 'url(' + item.icon + ') no-repeat',
        }" class="icon" :class="{
          fram_icon_wrap: true,
          enter: isEnter && i == nowIndex,
          leave: isLeave && i == nowIndex
      }"></i>
      </div>

     
      <div class="item">
        <div class="name">全部解决方案</div>
        <div class="more">查看更多 > </div>
      </div>
  </div>
</template>

<style scoped>
.frame_card_content{
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  
  margin: 0 auto;
  .item{
    width: 236px;
    height: 130px;
    position: relative;
    box-sizing: border-box;
    padding: 24px 20px;
    transition: all .4s ease-in-out;
    background-image: linear-gradient(180deg,#f3f5f8,#fff);
    border: 2px solid #fff;
    box-shadow: 8px 8px 20px rgb(55 99 170 / 10%), -8px -8px 20px #fff;
    border-radius: 4px;
    margin: 0 10px 20px;
    cursor: pointer;
    &:hover{
      background-color: #f3f5f8;
      box-shadow: inset 8px 8px 20px rgb(55 99 170 / 10%), inset -8px -8px 20px #fff;
    }
    .name{
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      color: #000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .des{
      margin-top: 8px;
      font-size: 14px;
      line-height: 22px;
      color: #4b5b76;
      opacity: .8;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      max-height: 44px;
      width:calc(100% - 56px);
    }

    .more{
      font-size: 14px;
      line-height: 22px;
      color: #0052d9;
      margin-top: 8px;
      position: absolute;
      bottom: 24px;
      left: 20px;
      display: flex;
      align-items: center;
    }
    .icon{
      display: inline-block;
      width: 48px;
      height: 48px;
      position: absolute;
      bottom: 24px;
      right: 20px;
      background-size:cover!important;
    }

    
    .enter {
        animation: icon_enter 0.3s steps(16) forwards;
    }

    .leave {
        animation: icon_leave 0.3s steps(16) forwards;
    }

    @keyframes icon_enter {
        0% {
            background-position: 0 0
        }

        100% {
            background-position: 0 -769px
        }
    }

    @keyframes icon_leave {
        0% {
            background-position: 0 -769px
        }

        to {
            background-position: 0 0
        }
    }
  }
}

</style>