<template >
    <!-- v-show="selfIndex === currentIndex"  -->
    <div class="carousel-item" :style="{ 'opacity': isOpacity }">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { inject, computed, reactive } from 'vue'
const props = defineProps({
    selfIndex: {
        type: Number,
        default: 0
    }
})
interface CarouselItemStateType {
    currentIndex: Number
}
const state = reactive(inject('CarouseInfo') as CarouselItemStateType)
const isOpacity = computed(() => props.selfIndex === state.currentIndex ? 1 : 0)
</script>
