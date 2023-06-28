<!--
 * @Author: chenyx
 * @Date: 2023-03-08 18:13:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-10 22:17:13
 * @FilePath: /vue-9jian/src/components/home_view/QCodeCard/index.vue
-->
<script setup lang="ts">
import { ref } from 'vue'
import Card from './components/Card.vue'

const dataList = ref([
  {
    id: 1,
    title: '开发者社区',
    tags: [
      {
        text: '技术干货'
      },
      {
        text: '技术活动'
      },
      {
        text: '开发者成长'
      }
    ],
    desc: '面向开发者的一站式线上技术交流阵地',
    descList: [
      {
        text: '技术干货聚集地'
      },
      {
        text: '技术课程学习平台'
      },
      {
        text: '技术大咖面对面'
      },
      {
        text: '开发技术实践交流'
      }
    ],
    linkList: [
      {
        link: 'https://github.com/9jian/vue-9jian',
        text: '技术文章'
      },
      {
        link: 'https://github.com/9jian/vue-9jian',
        text: '技术问答'
      },
      {
        link: 'https://github.com/9jian/vue-9jian',
        text: '技术课程'
      },
      {
        link: 'https://github.com/9jian/vue-9jian',
        text: '技术沙龙'
      }
    ],
    qrData:{
      title:'扫码关注 腾讯云开发者',
      listTitle:'可获权益',
      list:[
        {
          text:'10元无门槛代金劵'
        },
        {
          text:'洞察腾讯核心技术'
        },
        {
          text:'剖析业界实践案例'
        }
      ]
    }
  },
  {
    id: 1,
    title: '开发者社区',
    tags: [
      {
        text: '技术干货'
      },
      {
        text: '技术活动'
      },
      {
        text: '开发者成长'
      }
    ],
    desc: '面向开发者的一站式线上技术交流阵地',
    descList: [
      {
        text: '技术干货聚集地'
      },
      {
        text: '技术课程学习平台'
      },
      {
        text: '技术大咖面对面'
      },
      {
        text: '开发技术实践交流'
      }
    ],
    linkList: [
      {
        link: 'https://github.com/9jian/vue-9jian',
        text: '技术文章'
      },
      {
        link: 'https://github.com/9jian/vue-9jian',
        text: '技术问答'
      },
      {
        link: 'https://github.com/9jian/vue-9jian',
        text: '技术课程'
      },
      {
        link: 'https://github.com/9jian/vue-9jian',
        text: '技术沙龙'
      }
    ]
  },
  {
    id: 1,
    title: '开发者社区',
    tags: [
      {
        text: '技术干货'
      },
      {
        text: '技术活动'
      },
      {
        text: '开发者成长'
      }
    ],
    desc: '面向开发者的一站式线上技术交流阵地',
    descList: [
      {
        text: '技术干货聚集地'
      },
      {
        text: '技术课程学习平台'
      },
      {
        text: '技术大咖面对面'
      },
      {
        text: '开发技术实践交流'
      }
    ],
    linkList: [
      {
        link: 'https://github.com/9jian/vue-9jian',
        text: '技术文章'
      },
      {
        link: 'https://github.com/9jian/vue-9jian',
        text: '技术问答'
      },
      {
        link: 'https://github.com/9jian/vue-9jian',
        text: '技术课程'
      },
      {
        link: 'https://github.com/9jian/vue-9jian',
        text: '技术沙龙'
      }
    ]
  },
  
])
</script>
<template>
  <section class="qcode-section">
    <div class="qcode-section__inner">
      <!-- modules-title -->
      <header class="qcode-section__header">
        <h2 class="qcode-section__title">服务千万开发者的云生态</h2>
      </header>
      <div class="qcode-section__content">
        <div class="qcode-ecology">
          <card v-for="item in dataList" :key="item.id" :object="item"></card>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="less" scoped>
.qcode-section {
  height: 440px;
  background-color: #f5f7fa;
  padding: 60px 20px;
  .qcode-section__inner {
    height: 100%;
    .qcode-section__header {
      margin-bottom: 32px;
      .qcode-section__title {
        text-align: center;
        font-size: 28px;
        font-weight: 500;
        line-height: 48px;
        color: #000;
      }
    }
    .qcode-section__content {
      .qcode-ecology {
        display: flex;
      }
    }
  }
}
</style>
