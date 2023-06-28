<script setup lang="ts">

// 模块10： 登录页

import { ref } from 'vue';
import { loginRequest } from '@/http/request';
import { useRouter } from 'vue-router';

const username = ref<string>('')
const password = ref<string>('')
const router = useRouter()
function login() {
  loginRequest({
    username: username.value,
    password: password.value
  }).then((res) => {
    // console.log(res)
    if(res.code === 0) {
      router.push({
        path: '/'
      })
    }
  })
}
</script>
<template>
  <div class="login_wrap">
    <h1>登录</h1>
    <el-input class="input" v-model="username" type="text" placeholder="请输入用户名" />
    <el-input class="input" v-model="password" type="password" placeholder="请输入密码" />
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<style scoped lang="less">
.login_wrap {
  margin-top: 100px;
  width: 500px;
  // height: 500px;
  margin: 200px auto;
  border: 1px solid;
  padding: 20px;

  h1 {
    margin-bottom: 20px;
  }
  .input {
    margin-bottom: 20px;
  }
}

input {
  width: 200px;
  height: 50px;
  font-size: 50px;
}
</style>
