<template>
  <div class="container">
    <ul>
      <li
        v-for="t in accordionList"
        :key="t.title"
        :class="{ 'card-item': true, expand: t.title === activeTitle }"
        :style="`background-image:url(${t.BG})`"
        @mouseenter="handleMouseenter(t.title)"
      >
        <div class="mask"></div>
        <div class="title">{{ t.title }}</div>
        <div class="des" v-if="t.title !== activeTitle">{{ t.describe }}</div>
        <slot
          v-else
          :detail-info="t.detailInfo"
          :check-icon="t.checkIcon"
          :case-img="t.caseImg"
          :relevance-product="t.relevanceProduct"
        ></slot>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type { accordionItem } from './textInfo'
import { ref } from 'vue'
import type { Ref } from 'vue'
import { debounce } from '@/utils/de_th'

defineProps<{
  accordionList: accordionItem
}>()
const activeTitle: Ref<string> = ref('音视频通信')
const handleMouseenter = debounce((title: string) => {
  activeTitle.value = title
}, 200)
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  margin: 20px auto;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-inline-start: 0;
    overflow: hidden;
    li.card-item {
      position: relative;
      list-style: none;
      border: 1px solid #000;
      margin-right: 20px;
      transition: all 0.3s ease-in-out;
      margin-right: 20px;
      border: 2px solid #fff;
      box-sizing: border-box;
      color: #fff;
      overflow: hidden;
      border-radius: 4px;
      position: relative;
      box-shadow: 8px 8px 20px rgb(55 99 170 / 10%);
      padding: 22px 18px;
      background-position: bottom right;
      background-size: auto 100%;
      background-repeat: no-repeat;
      height: 430px;
      flex: 1;
      .mask {
        display: none;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(180deg, #f3f5f8, #fff);
        box-shadow: 8px 8px 20px rgb(55 99 170 / 10%), -8px -8px 20px #fff;
        transition: opacity 0.3s ease-in-out;
      }
      &:last-child {
        margin-right: 0;
      }
      &.expand {
        color: #181818;
        flex: 3.3;
        .mask {
          display: block;
          opacity: 0.7;
        }
      }
      .title,
      .case-title {
        font-size: 20px;
        cursor: pointer;
      }
      .title {
        &:hover {
          color: #0052d9;
        }
      }
      .des {
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        transition: opacity 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out,
          -webkit-transform 0.3s ease-in-out;
        max-width: 100%;
        font-size: 14px;
        line-height: 22px;
        white-space: pre-wrap;
        color: #fff;
        font-weight: 700;
        margin-top: 20px;
        position: absolute;
      }
    }
  }
}
</style>
