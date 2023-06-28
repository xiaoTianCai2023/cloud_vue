<template>
  <div class="rigth_operations">
    <div class="select_wrap">
      <select v-model="selectIndex" :class="!headerStore.is_hover && 'select--default'">
        <option
          class="select_option"
          :value="oitem.value"
          v-for="oitem in optionList"
          :key="oitem.label"
        >
          {{ oitem.label }}
        </option>
      </select>
    </div>
    <div class="operations_list">
      <div
        class="operations_item nav"
        v-for="oprItem in operationsList"
        :key="oprItem.title"
        :class="oprItem.id == '4' && 'register'"
      >
        <a href="javascript:;">{{ oprItem.title }}</a>
      </div>
      <div
        class="operations_item nav logout"
        @click="logout"
      >
        退出登录
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useHeaderStore } from '@/stores/header'
import { logoutRequest } from '@/http/request';
import { useRouter } from 'vue-router';

const router = useRouter()
const headerStore = useHeaderStore()
const selectIndex = ref('0')
const optionList = reactive([
  {
    value: '0',
    label: '中国站'
  },
  {
    value: '1',
    label: '英语'
  },
  {
    value: '2',
    label: '韩语'
  },
  {
    value: '3',
    label: '日语'
  },
  {
    value: '4',
    label: '简体中文'
  }
])
const operationsList = reactive([
  {
    id: '0',
    title: '文档'
  },
  {
    id: '1',
    title: '备案'
  },
  {
    id: '2',
    title: '控制台'
  },
  {
    id: '3',
    title: '登录'
  },
  {
    id: '4',
    title: '免费注册'
  }
])

function logout() {
  logoutRequest().then(() => {
    router.push({
      path: '/login'
    })
  })
}

</script>

<style scoped lang="less">
.select_wrap {
  margin-right: 20px;
}
select {
  width: 62px;
  border: none;
  background: none;
}
.select--default {
  color: #fff;
}
.select_option {
  padding: 10px;
}
.rigth_operations {
  display: flex;
  height: 62px;
  line-height: 62px;
}
.operations_list {
  display: flex;
}
.operations_item {
  margin-right: 14px;
}
.register a {
  display: block;
  color: #fff;
  background: #0052d9;
  padding: 0 20px;
  margin-right: 0;
}

.logout {
  color: red;
}
</style>
