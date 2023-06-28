<template >
    <div class="indicator" :class="[isFirstIndex ? 'indicator-first' : '']" v-if="showDir">
        <div 
            :class="[isFirstIndex ? 'is-first-line':'tpm-item-line']"
            :style="{ top: `${state.currentIndex * 20}%` }"
        ></div>
        <div class="indicator-item" v-for="(item, index) in state.bannerList" :key="index">
            <div class="indicator-link" :class="{ 'is-active': isCurrentIndex(index), 'is-first': isFirstIndex }"
                @mouseenter="handleChange(index)">
                {{ item.title }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
// 指示器
import { inject, reactive, computed } from 'vue'
interface DotStateType {
    bannerList: any
    showDir: Boolean
    // 预留指示器组件的背景属性， 但是目前需求是背景渐变，所以通过css实现
    dotBgColor: String | undefined
    currentIndex: number
    index?: number
}
const state = reactive(inject('CarouseInfo') as DotStateType)
const { showDir, dotBgColor } = state

const isCurrentIndex = (item: number) => {
    return item === state.currentIndex
}
const isFirstIndex = computed(() => state.currentIndex === 0)

// 鼠标移入切换幻灯片
const handleChange = (index: number) => {
    state.currentIndex = index
}
</script>
<style scoped>
.indicator {
    position: absolute;
    left: 40px;
    top: 108px;
    width: calc(33.33333% - 260px);
    min-height: 300px;
    z-index: 3;
    border-right: 2px solid #fff;
    pointer-events: visible;
}
.indicator-first{ 
    border-right: 2px solid rgba(0, 0, 0, .15);
}

.indicator-item {
    height: 60px;
    line-height: 60px;
    padding-right: 30px;
    cursor: pointer;
    color: black;
    width: 100%;
    border-bottom: 1px;
}

.tpm-item-line,.is-first-line {
    width: 100%;
    height: 20%;
    position: absolute;
    right: -2px;
    left: 0;
    transition: all .4s ease-in-out;
}

.tpm-item-line:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, .6))
}

.tpm-item-line:after {
    content: "";
    position: absolute;
    right: -2px;
    top: 0;
    z-index: 2;
    width: 2px;
    height: 100%;
    background-color: #0052d9;
    transition: all .3s ease-in-out
}

.is-first-line:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, .15));
}

.is-first-line:after {
    content: "";
    position: absolute;
    right: -2px;
    top: 0;
    z-index: 2;
    width: 2px;
    height: 100%;
    transition: all .3s ease-in-out;
    background-color: #fff;
}

.indicator-item .indicator-link {
    display: block;
    width: 100%;
    height: 100%;
    text-align: right;
    font-size: 16px;
    font-weight: 400;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    transition: font-size .4s ease-in-out
}

.indicator-item .indicator-link.is-active {
    color: #0052d9;
    font-weight: 500;
}

.indicator-item .indicator-link.is-first {
    color: #fff;
}

/* 指示器选中第一个样式 */
.indicator-item:nth-child(2) .indicator-link.is-active {
    color: #fff;
    font-weight: 500;
}

/* .indicator-item:first-child.is-active:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    border-left: 2px solid #fff;
    background-color: #f5f7f9;
    width: 6px;
    height: 8px;
    pointer-events: none
}

.indicator-item.is-active:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    border-left: 2px solid #fff;
    background-color: #f5f7f9;
    width: 6px;
    height: 8px;
    pointer-events: none
} */</style>
