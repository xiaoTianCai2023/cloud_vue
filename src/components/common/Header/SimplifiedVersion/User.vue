<template>
  <div class="user_contaier">
    <div class="empty-line"></div>
    <div class="user_main">
      <div
        class="top_line"
        :class="mitem.type && 'top_line--hover'"
        v-for="mitem in menuList"
        :key="mitem.title"
      >
        {{ mitem.title }}
      </div>
      <div class="user_footer">
        <div>免费注册</div>
        <div>登录</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const menuList = reactive([
  { title: '控制台', type: 'router' },
  { title: '账号信息', type: 'router' },
  { title: '费用信息', type: 'router' },
  { title: '消息中心', type: 'router' },
  { title: '我的工单', type: 'router' },
  { title: '联系客户： 95716 或 4009 100 100 转 1' }
])
</script>

<style scoped>
.empty-line {
  height: 56px;
}
.top_line {
  position: relative;
  padding: 12px 16px;
}
.top_line::before {
  content: '';
  position: absolute;
  background: #d9dde4;
  width: 100vw;
  height: 1px;
  top: 0;
  left: 0;
}
.top_line--hover {
  cursor: pointer;
}
.user_footer {
  box-sizing: border-box;
  display: flex;
  margin: 0 16px;
  height: 36px;
  line-height: 36px;
  color: #fff;
  gap: 20px;
}
.user_footer div {
  flex: 1;
  text-align: center;
}
.user_footer div:nth-child(1) {
  background: #0053d9;
}
.user_footer div:nth-child(2) {
  border: 1px solid #0053d9;
  color: #0053d9;
}
</style>
