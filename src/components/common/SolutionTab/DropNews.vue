<template>
  <ul class="news">
    <li v-for="item in newsList" :key="item.id">
      <div class="image">
        <img src="@/assets/image/pic_01.png" alt="">
      </div>
      <h5>{{ item.title }}</h5>
      <p>{{ item.text }}</p>
    </li>
  </ul>
</template>

<script setup>
import { reactive } from "vue";

const newsList = reactive([
  {
    id: 1,
    title: "音视频通信标杆案例样板间",
    text: "提供音视频通信标杆案例、解决方案和最新优惠",
  },
  {
    id: 2,
    title: "云市场",
    text: "提供音视频通信标杆案案和最新优惠",
  },
  {
    id: 3,
    title: "腾讯云应用场景栈",
    text: "提供音视频通信标杆案例优惠",
  },
]);
</script>

<style scoped>
.news {
  flex: 1;
}

.news>li {
  position: relative;
  width: 340px;
  height: 90px;
  background: radial-gradient(ellipse 600px 80px at 50% top, #e2e6e9, #fff);
  margin-bottom: 60px;
  border-radius: 4px;
  box-shadow: 0 4px 32px #d9dee7;
  border: 1px solid #fff;
  box-sizing: border-box;
  padding: 12px;
  cursor: pointer;
}

.news>li>h5 {
  font-size: 18px;
  color: #202330;
  font-weight: 500;
  line-height: 32px;
}

.news>li>p {
  font-size: 14px;
  color: #9A9FB1;
  line-height: 28px;
}

.news>li>.image {
  position: absolute;
  top: -30px;
  right: 20px;
  width: 60px;
  height: 60px;

}

.image>img {
  width: 100%;
  height: 100%;
}

.news>li:hover h5 {
  color: #0053D9;
}
</style>