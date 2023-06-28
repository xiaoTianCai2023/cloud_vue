<script setup lang="ts">
import SearchInput from './SearchInput.vue'
import MainDropdown from './MainDropdown.vue';
import ResultDropdown from './ResultDropdown.vue'
import {useSearchStore} from '../../../stores/search'

const search_store = useSearchStore()

let result_list:[] = []
// let is_main_dropdown_show = false
// let is_result_dropdown_show = true
</script>

<template>
  <div class="header_search_wrap">
    <div class="input_wrap">
      <SearchInput></SearchInput>
    </div>
    <div class="dropdown_wrap">
      <!-- <DropDown></DropDown> -->
      <MainDropdown v-show="search_store.show_main_dropdown"></MainDropdown>
      <ResultDropdown v-show="search_store.show_result_dropdown" :list="result_list"></ResultDropdown>
    </div>
  </div>
</template>

<style scoped>

</style>
