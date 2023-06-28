<template>
  <div class="frame-card-item">
    <li v-for="(item, index) in data" :key="index" class="item-list">
      <a class="cardItem" :class="[isEnter ? 'isEnter' : 'isLeave']" href="" @mouseenter="onMouseenter"
        @mouseleave="onMouseleave">
        <div class="tpm-solution2__navs-inner">
          <div class="tpm-solution2__nav-cnt">
            <h3 class="tpm-solution2__nav-title">{{ item.solutionName }}</h3>
            <h3 class="tpm-solution2__nav-desc">{{ item.desc }}</h3>
          </div>
          <div class="icon">
            <FrameIcon :url="item.imgUrl"></FrameIcon>
          </div>
        </div>
      </a>
    </li>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, inject } from 'vue'
import FrameIcon from '@/components/common/FrameIcon.vue';

const isEnter = ref(false)
const data = reactive(inject('frameCardData') as any)

const onMouseenter = () => {
  isEnter.value = !isEnter.value
}
const onMouseleave = () => {
  isEnter.value = !isEnter.value
}

</script>

<style scoped>
.frame-card-item {
  width: 100%;

  .item-list {
    display: inline-block;
    vertical-align: top;
    width: 20%;
    box-sizing: border-box;
    padding: 0 10px;
    margin-bottom: 20px;
  }

  .item-list:last-child {
    .tpm-solution2__nav-desc {
      color: #0052d9;
      font-weight: normal;

      &::after {
        content: "";
        display: inline-block;
        width: 16px;
        transition: transform .4s ease-in-out, -webkit-transform .4s ease-in-out;
        height: 10px;
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: 50%;
        background-image: url(@/assets/images/icon-arrow_05e.svg);
      }
    }
  }
}

.frame-card-item:last-child::after {
  content: "";
  width: 70px;
  height: 67px;
  position: absolute;
  right: 20px;
  bottom: 23px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: 50%;
  background-image: url(@/assets/images/bg-more_01c.png)
}

.tpm-solution2__navs-inner {
  position: relative;
  box-sizing: border-box;
  width: 268px;
  height: 108px;
  padding: 24px 20px;
  border: 2px solid #fff;
  border-radius: 4px;
  transition: all .4s ease-in-out;
  background-image: linear-gradient(180deg, #f3f5f8, #fff);
  box-shadow: 8px 8px 20px rgb(55 99 170 / 10%), -8px -8px 20px #fff;

  .tpm-solution2__nav-cnt {
    max-width: calc(100%-56px);
    overflow: hidden;
  }

  .icon {
    position: absolute;
    width: 48px;
    height: 48px;
    bottom: 24px;
    right: 20px;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: top;
  }
}

.tpm-solution2__nav-title {
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tpm-solution2__nav-desc {
  display: block;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 8px;
  line-height: 22px;
  color: #4b5b76;
  opacity: .8;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  max-height: 44px;
  font-weight: bolder;
}

.tpm-solution2__navs-inner:hover {
  background: #f3f5f8;
  box-shadow: inset(8px, 8px, 20px) rgb(55 99 170 / 10%), -8px -8px 20px #fff;
  cursor: pointer;
}
</style>