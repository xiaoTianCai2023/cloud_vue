<template>
  <div class="container">
    <accordionCard :accordion-list="accordionList">
      <template v-slot="{detailInfo,caseImg,relevanceProduct,checkIcon}">
        <CardDetail
          :detail-info="detailInfo"
          :case-img="caseImg"
          :relevance-product="relevanceProduct"
          :check-icon="checkIcon"
        />
      </template>
    </accordionCard>
  </div>
</template>
<script setup lang="ts">
import CardDetail from './cardDetail.vue'
import type { accordionItem } from './textInfo'
import { ref } from 'vue'
import type { Ref } from 'vue'
import accordionCard from './accordionCard.vue'
defineProps<{
  accordionList: accordionItem
}>()
</script>
<style lang="scss" scoped></style>
