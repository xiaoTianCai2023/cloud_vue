<!--
 * @Author: chenyx
 * @Date: 2023-03-9 17:49:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-10 23:39:06
 * @FilePath: /vue-9jian/src/components/home_view/QCodeCard/components/card.vue
-->
<template>
  <div class="qcode-ecology__cell" @mouseenter="showBubble" @mouseleave="hideBubble">
    <div class="qcode-ecology__card">
      <!-- card background -->
      <div class="qcode-ecology__card-bg"></div>
      <!-- card main -->
      <div class="qcode-ecology__main">
        <h3 class="qcode-ecology__main-title">{{ state.object.title }}</h3>
        <!-- tags -->
        <div class="qcode-ecology__main-tags">
          <span
            class="qcode-ecology__main-tags-item"
            v-for="tag in state.object.tags"
            :key="tag.text"
            ><span class="qcode-ecology__main-tags-item-text">{{ tag.text }}</span></span
          >
        </div>
        <!-- desc -->
        <div class="qcode-ecology__main-desc">{{ state.object.desc }}</div>
        <!-- item-list -->
        <item-list mode="row" :data-list="state.object.descList"></item-list>
        <!-- link-list -->
        <ul class="qcode-ecology__main-links">
          <li
            class="qcode-ecology__main-links-item"
            v-for="link in state.object.linkList"
            :key="link.text"
          >
            <a class="qcode-ecology__main-links-item-link" :href="link.link" target="_blank">
              <span class="qcode-ecology__main-links-item-text">{{ link.text }}</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- qrcode -->
      <span  v-if="state.object.qrData" class="qcode-ecology__qrcode"></span>
      <!-- bubble-card -->
      <bubble-card v-if="state.object.qrData" :isShow="state.isShow" :object="state.object.qrData"></bubble-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import ItemList from './ItemList.vue'
import BubbleCard from './BubbleCard.vue'
const props = defineProps({
  object: {
    type: Object,
    default: {}
  }
})

const state = reactive({
  object: props.object,
  isShow: ref(false),
})
function showBubble(){
  state.isShow = true
}
function hideBubble(){
  state.isShow = false
}
</script>

<style lang="less" scoped>
// 初始化样式

.qcode-ecology__cell {
  flex: 1;
  margin-right: 20px;
  .qcode-ecology__card {
    position: relative;
    border: 2px solid #fff;
    height: 100%;
    box-shadow: 8px 8px 20px rgb(55 99 170 / 10%), -8px -8px 20px #fff;
    border-radius: 4px;
    padding: 20px;
    .qcode-ecology__card-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: right 10px top;
      background-repeat: no-repeat;
      background-size: auto 280px;
      opacity: 0.6;
      background-image: url(https://qcloudimg.tencent-cloud.cn/raw/c2519f3ebcd5f6cd46caae583cab2d4b.png);
    }
    .qcode-ecology__main {
      position: relative;
      max-width: 100%;
      &-title {
        margin-bottom: 8px;
        font-size: 20px;
        color: #181818;
        font-weight: 500;
        line-height: 28px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -ms-flex-align: center;
        align-items: center;
        transition: color 0.3s ease-in-out;
        cursor: pointer;
      }
      &-title::after {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        background-position: 50%;
        background-size: 16px;
        background-repeat: no-repeat;
        margin-left: 4px;
        background-image: url(https://cloudcache.tencentcs.cn/qcloud/ui/tea-portal-material-portal/build/Main/images/tpm1-ecology2-arrow_e43.svg);
      }
      &-desc {
        margin-bottom: 16px;
        font-size: 14px;
        color: #4b5b76;
        line-height: 22px;
      }
      &-tags {
        &-item {
          color: #5f7292;
          border: 1px solid rgba(75, 91, 118, 0.5);
          border-radius: 2px;
          padding: 2px 8px;
          margin: 0 8px 8px 0;
          &-text {
            font-size: 12px;
            line-height: 24px;
          }
        }
        &-item:last-child {
          margin-right: 0;
        }
      }

      &-links {
        display: flex;
        &-item {
          color: #0052d9;
          margin-right: 8px;
        }
        &-item:hover {
          text-decoration: underline;
          text-decoration-color: #0052d9;
        }
      }
    }
    .qcode-ecology__qrcode {
      cursor: pointer;
      position: absolute;
      right: -2px;
      top: -2px;
      z-index: 1;
      content: '';
      display: inline-block;
      width: 60px;
      height: 60px;
      background-position: 50%;
      background-size: 60px;
      background-repeat: no-repeat;
      background-image: url(https://cloudcache.tencentcs.cn/qcloud/ui/tea-portal-material-portal/build/Main/images/tpm1-ecology2-qr_dd4.svg);
    }
  }
}
</style>
