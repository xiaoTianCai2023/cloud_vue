<template>
  <div class="detail">
    <ul class="detail-info">
      <li v-for="item in detailInfo">
        <img :src="checkIcon" alt="" />
        <span>{{ item }}</span>
      </li>
    </ul>
    <div class="case">
      <div class="case-title">客户案例</div>
      <div class="img" v-for="v in caseImg" :key="v">
        <img :src="v" alt="" />
      </div>
    </div>
    <div class="relevance-product">
      <div class="case-title">相关产品</div>
      <ul>
        <li v-for="j in relevanceProduct">
          <img :src="j.icon" alt="" />
          <span>{{ j.text }}</span>
        </li>
      </ul>
    </div>
    <div class="buttons">
      <div class="tpm-btn tpm-btn--primary">立即咨询</div>
      <div class="tpm-btn tpm-btn__text">查看更多</div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  detailInfo: string[]
  caseImg: string[]
  relevanceProduct: { icon: string; text: string }[]
  checkIcon: string
}>()
</script>
<style lang="less" scoped>
ul {
  padding-inline-start: 0;
}
.detail {
  //大卡片
  .detail-info {
    display: block;
    margin-top: 4px;
    white-space: nowrap;
    li {
      list-style: none;
      display: flex;
      justify-content: start;
      align-items: center;
      font-size: 14px;
      color: #495770;
      padding-top: 8px;
      img {
        width: 18px;
        height: 18px;
        margin-right: 5px;
      }
    }
  }

  .case {
    margin-top: 12px;
    white-space: nowrap;
    .img {
      display: inline-block;
      width: 120px;
      padding: 12px;
      box-sizing: border-box;
      box-shadow: none;
      background: #fff;
      border: 1px solid #e5e8ed;
      border-radius: 4px;
      margin-right: 15px;
      margin-top: 10px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: linear-gradient(180deg, #f3f5f8, #fff);
        border: 1px solid #fff;
        box-shadow: 8px 8px 20px rgb(55 99 170 / 10%), -8px -8px 20px #fff;
      }
      img {
        width: 94px;
        height: 23px;
        vertical-align: middle;
      }
    }
  }
  .relevance-product {
    margin-top: 12px;
    white-space: nowrap;
    .case-title {
      margin-bottom: 12px;
    }
    ul {
      display: flex;
      justify-content: start;
      align-items: center;
      li {
        list-style: none;
        margin-right: 20px;
        color: #181818;
        line-height: 24px;
        display: flex;
        justify-content: start;
        align-items: center;
        cursor: pointer;
        &:hover {
          color: #0052d9;
        }
        img {
          margin-right: 5px;
        }
      }
    }
  }
  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 36px;
    white-space: nowrap;
    .tpm-btn {
      display: inline-block;
      box-sizing: border-box;
      min-width: 104px;
      height: 36px;
      padding: 0 24px;
      color: #fff;
      font-size: 14px;
      line-height: 34px;
      white-space: nowrap;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      border: 1px solid transparent;
      outline: 0 none;
      cursor: pointer;
      box-shadow: 8px 8px 20px 0 rgb(55 99 170 / 10%);
      transition: all 0.3s ease-in-out;
    }
    .tpm-btn--primary {
      width: 200px;
      background-color: #0052d9;
      &:hover {
        background-color: #2670e8;
        box-shadow: none;
      }
    }
    .tpm-btn__text {
      width: 200px;
      background-color: #fff;
      color: #43474d;
      box-shadow: 8px 8px 20px rgb(55 99 170 / 10%), -8px -8px 20px #fff;
      &:hover {
        border-color: #2670e8;
        background-color: #ecf2fe;
        box-shadow: none;
        color: #0052d9;
      }
    }
  }
}
</style>
