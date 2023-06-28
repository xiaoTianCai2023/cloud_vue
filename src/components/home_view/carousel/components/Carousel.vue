<template>
    <div class="carousel" @mouseleave="onStart()" @mouseenter="onStop()">
        <slot></slot>
        <Indicator />
    </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, provide, onBeforeUnmount } from 'vue'
import Indicator from './Indicator.vue'
let timer: ReturnType<typeof setInterval> | null = null
const props = defineProps({
    // 是否自动轮播
    autoplay: {
        type: Boolean,
        default: true
    },
    // 切换幻灯片时间
    duration: {
        type: Number,
        default: 3000
    },
    // 初始化播放图片index
    initial: {
        type: Number,
        default: 0
    },
    // 幻灯片
    bannerList: {
        type: Array,
        default: []
    },
    // 是否展示圆点指示器
    hasDot: {
        type: Boolean,
        default: true
    },
    // 是否展示左右指示器
    hasDirector: {
        type: Boolean,
        default: true
    },
    dotBgColor: {
        type: String,
        default: 'transparent'
    }
})
const state = reactive({
    currentIndex: props.initial,
    itemLen: props.bannerList.length,
    bannerList: props.bannerList,
    showDir: props.hasDot,
    dotBgColor: props.dotBgColor
})
provide('CarouseInfo', state)
const setCarousel = ((dir:string) => {
    switch (dir) {
        case 'next':
            state.currentIndex += 1;
            if (state.currentIndex >= state.itemLen) {
                state.currentIndex = 0;
            }
            break;
        case 'prev':
            state.currentIndex -= 1;
            if (state.currentIndex < 0) {
                state.currentIndex = state.itemLen - 1;
            }
            break;
        default:
            break;
    }
});
const autoPlay = () => {
    if (props.autoplay) {
        timer = setInterval(() => {
            // 轮播逻辑
            setCarousel('next')
        }, props.duration);
    };
}
// 鼠标移入
const onStart = () => {
    autoPlay()
}
// 鼠标离开
const onStop = () => {
    clearInterval(timer)
}
onMounted(() => {
    autoPlay();
})
// 卸载组件，移除定时器
onBeforeUnmount(() => {
    clearInterval(timer)
    timer = null
});
</script>