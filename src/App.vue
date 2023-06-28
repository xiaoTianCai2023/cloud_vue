<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import Header from '@components/common/Header/index.vue'
import Footer from '@components/common/Footer.vue'
import SolutionTab from './components/common/SolutionTab/SolutionTab.vue'
import { onMounted, onBeforeMount } from 'vue'
import { searchPostRequest } from './http/request'
import EventBus from './utils/event'
import {useNewCommon} from './stores/new_common'
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'

const router = useRouter()
const new_common_store = useNewCommon()

onBeforeMount(() => {
  EventBus.on('global_not_login', () => {
    console.log('跳转到登录页')

    // router.push异步的
    router.push({
      path: '/login'
    }).then(() => {
      new_common_store.is_show_page = true
    })
  })

  EventBus.once('global_show_page', () => {
    new_common_store.is_show_page = true
  })

  EventBus.on('global_http_error', (msg) => {
    ElMessage.error({
      message: msg
    })
  })

})

onMounted(async () => {
  const res = await searchPostRequest({
    search: '对象存储'
  })
})
</script>

<template>
  <div class="header_layout">
    <Header></Header>
    <SolutionTab></SolutionTab>
  </div>
  <div class="content_layout" v-if="new_common_store.is_show_page">
    <RouterView />
  </div>
  <div class="footer_layout">
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
