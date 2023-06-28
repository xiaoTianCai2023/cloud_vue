<script setup lang="ts">
// 手风琴组件
import { ref } from 'vue'

const arr = ref([{
  uri: 'https://qcloudimg.tencent-cloud.cn/raw/5cb5c172a477f078ad6b65ed89dea75f.jpg',
  title:'音视频通信',
  introduce: '提供坚实的云端一体音视频 PaaS 能力',
  content: {
    info: {
      title: '',
      position: 'top',
      arr: [
        '腾讯 20 余年音视频领域深厚技术积淀开放',
        '依托 RT-ONE™ 音视频通信网络，实现全球互通',
        '全终端 SDK ，云端一体音视频解决方案，最快1天接入'
      ]
    },
    case: {
      title:'客户案例',
      position: 'center',
      arr: [
        'https://qcloudimg.tencent-cloud.cn/raw/128938875bb3f369cc3d040f2a27a7a1.png',
        'https://qcloudimg.tencent-cloud.cn/raw/0f22247c2ba315f2e61b25d370adce73.png'
      ]
    },
    more: {
      title:'相关产品',
      position: 'bottom',
      arr: [
        {icon: '', text: '实时音视频 TRTC'},
        {icon: '', text: '即时通信 IM'},
        {icon: '', text: '云直播 CSS'}
      ]
    }
  }
},{
  uri: 'https://qcloudimg.tencent-cloud.cn/raw/ff2f296d21d56b4bea1529b8d3d11c7b.jpg',
  title:'游戏云',
  introduce: '致力于打造高质量、全方位生态的游戏云服务平台',
  content: {
    info: {
      title: '',
      position: 'top',
      arr: [
        '高 IO 云服务器、高可用云数据库万量级 IOPS',
        '自建万兆云机房，全球覆盖，配备 100+ BGP 顶级网络',
        '与开放平台、应用宝、玩吧、QQ 浏览器无缝对接'
      ]
    },
    case: {
      title:'客户案例',
      position: 'center',
      arr: [
        'https://qcloudimg.tencent-cloud.cn/raw/cf086d3b6f12c649789da28e2829372a.png',
        'https://qcloudimg.tencent-cloud.cn/raw/5d14c80acc1a7a8f53a9b16859c39789.png',
        'https://qcloudimg.tencent-cloud.cn/raw/629b42f14fc181b63f18bed81e38a7bc.png',
      ]
    },
    more: {
      title:'相关产品',
      position: 'bottom',
      arr: [
        {icon: '', text: '云服务器'},
        {icon: '', text: '游戏数据库'},
        {icon: '', text: '游戏多媒体引擎'}
      ]
    }
  }
},{
  uri: 'https://qcloudimg.tencent-cloud.cn/raw/7874580eb57152872f12155d27d39d5c.jpg',
  title:'微塔低代码',
  introduce: '高性能低代码开发平台，拖拽式构建小程序及其他应用',
  content: {
    info: {
      title: '',
      position: 'top',
      arr: [
        '降本增效：丰富免费的模板快速拖拽构建',
        '一键部署：微搭产品包含云资源，无需单独采购',
        '集成微信和企微：私有链路直连微信，三步上线企微工作台'
      ]
    },
    case: {
      title:'客户案例',
      position: 'center',
      arr: [
        'https://qcloudimg.tencent-cloud.cn/raw/408e49c67f3f918d178c6db8b414c9aa.png',
      ]
    },
    more: {
      title:'相关产品',
      position: 'bottom',
      arr: [
        {icon: '', text: '微搭低代码平台'},
        {icon: '', text: '云开发'}
      ]
    }
  }
},{
  uri: 'https://qcloudimg.tencent-cloud.cn/raw/317664c62aeef9374fd1827fad2a0ce5.jpg',
  title:'金融',
  introduce: '新基建、新连接、新服务，全面助力行业数字化转型',
  content: {
    info: {
      title: '',
      position: 'top',
      arr: [
        '新基建，助力金融机构夯实技术底座',
        '新连接，助力金融机构与用户之间的高效触达',
        '新服务，助力金融机构打造面向垂直场景的创新解决方案'
      ]
    },
    case: {
      title:'客户案例',
      position: 'center',
      arr: [
        'https://qcloudimg.tencent-cloud.cn/raw/68d6831a4d3a797c42802949c3e600ac.png',
        'https://qcloudimg.tencent-cloud.cn/raw/b66497772fb52ba7b39ab0716665a897.png',
      ]
    },
    more: {
      title:'相关产品',
      position: 'bottom',
      arr: [
        {icon: '', text: '腾讯云 TCE'},
        {icon: '', text: '分布式数据库 TDSQL'},
        {icon: '', text: '人脸核身'},
      ]
    }
  }
},{
  uri: 'https://qcloudimg.tencent-cloud.cn/raw/02b5f458403edf319fb35e718728f2d9.jpg',
  title:'制造业',
  introduce: '助力制造业实现生产透明化、办公无纸化、车间无人化',
  content: {
    info: {
      title: '',
      position: 'top',
      arr: [
        '架构企业数字化顶层设计和搭建数字化统一底座；',
        '围绕数据采集、数据分析、数据应用，实现企业数据闭环',
        '聚焦生产透明化、办公无纸化、车间无人化、节能减排等工业场景'
      ]
    },
    case: {
      title:'客户案例',
      position: 'center',
      arr: [
        'https://qcloudimg.tencent-cloud.cn/raw/b20324205a26ff1caf322693319c3db0.png',
      ]
    },
    more: {
      title:'相关产品',
      position: 'bottom',
      arr: [
        {icon: '', text: '容器服务'},
        {icon: '', text: '物联网开发平台'},
        {icon: '', text: 'RayData 网页版'},
      ]
    }
  }
}])
const activeIndex = ref(0)
</script>

<template>
  <div class="accordion-container">
    <template v-for="(item, index) in arr" :key="index">
      <article @mouseenter="activeIndex = index" :class="[activeIndex === index ? 'is-active' : '']" class="accordion-article">
        <div class="accordion-bg" :style="{
        'background-image': 'url(' + item.uri + ')',
        'background-repeat': 'no-repeat'
        }">
          <h3>{{ item.introduce }}</h3>
        </div>
        <header class="accordion-option-title">{{ item.title }}</header>
        <div class="accordion-datas">
          <section v-for="valObj of item.content">
            <header v-if="valObj.title">{{ valObj.title }}</header>
            <div>
              <template v-for="(option, index) in valObj.arr" :key="index">
                <div class="accordion-text accordion-top-icon" v-if="valObj.position === 'top'">{{ option }}</div>
                <a class="accordion-data-img" v-if="valObj.position === 'center'" style="display: inline-block;">
                  <div>
                    <div :style="{'background-image': 'url(' + option + ')'}"></div>
                  </div>
                </a>
                <span v-if="valObj.position === 'bottom'" class="accordion-production accordion-related accordion-text">
                  1111
                  {{ option.text }}
                </span>
              </template>
            </div>
          </section>
          <div class="accordion-panel-buttons" style="color: black">
            <div class="accordion-tpm-btn accordion-blue-btn">立即咨询</div>
            <div class="accordion-tpm-btn accordion-white-btn">查看更多</div>
          </div>
        </div>
      </article>
    </template>
  </div>
</template>

<style scoped>
.accordion-blue-btn{
  background-color: #0052d9;
  color: #fff;
  box-shadow: 8px 8px 20px 0 rgb(55 99 170 / 10%);
}
.accordion-blue-btn:hover{
  background-color: #2670e8;
  box-shadow: none;
  transition: all .3s ease-in-out;
}
.accordion-white-btn{
  background-color: #fff;
  color: #43474d;
  box-shadow: 8px 8px 20px rgb(55 99 170 / 10%), -8px -8px 20px #fff;
}
.accordion-white-btn:hover{
  border-color: #2670e8;
  background-color: #ecf2fe;
  box-shadow: none;
  color: #0052d9;
}
.accordion-tpm-btn{
  display: inline-block;
  box-sizing: border-box;
  min-width: 104px;
  height: 36px;
  padding: 0 24px;
  font-size: 14px;
  line-height: 34px;
  white-space: nowrap;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  border: 1px solid transparent;
  outline: 0 none;
  cursor: pointer;
  width: 248px;
}
.accordion-tpm-btn+.accordion-tpm-btn {
  margin-left: 20px;
}
.accordion-data-img{
  width: 120px;
  padding: 12px;
  box-sizing: border-box;
  box-shadow: none;
  background: #fff;
  border: 1px solid #e5e8ed;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  transition: all .3s ease-in-out;
  align-items: center;
}
.accordion-data-img:hover {
  background: linear-gradient(180deg,#f3f5f8,#fff);
  border: 1px solid #fff;
  box-shadow: 8px 8px 20px rgb(55 99 170 / 10%), -8px -8px 20px #fff;
}
.accordion-data-img > div{
  width: 100%;
  max-width: 160px;
}
.accordion-data-img > div > div{
  padding-top: 25%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 0!important;
  line-height: 0!important;
}
.accordion-data-img + .accordion-data-img{
  margin-left: 16px;
}
.accordion-datas{
  transition: all .3s ease-in-out;
  position: absolute;
  top: 50px;
  right: 18px;
  pointer-events: none;
  min-width: calc(100% - 36px);
  opacity: 0;
  margin-top: 12PX;
}
.accordion-datas > *{
  overflow: hidden;
  width: 516px;
}
.accordion-datas header{
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 12px;
  font-weight: 500;
  color: #16181a;
  letter-spacing: 0;
}
.accordion-datas > section:nth-child(1){
  margin-top: 2px;
}
.accordion-datas > section + section{
  margin-top: 20px;
}

/* .tpm-solution2__card-features .tpm-list__item+.tpm-list__item {
    margin-top: 8px;
} */
@media screen and (min-width: 769px) {
  .accordion-top-icon{
    padding-left: 24px;
  }
}

/* 勾勾 svg 背景 */
.accordion-top-icon::before{
  content: "";
  position: absolute;
  left: 0;
  top: 4px;
  width: 16px;
  height: 16px;
  background-image: url('https://cloudcache.tencentcs.cn/qcloud/ui/tea-portal-material-portal/build/Main/images/tpm1-list-blue-hook_db8.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
}

/* 每个 article 顶部列表 */
.accordion-text{
  font-size: 14px;
  color: #495770;
  line-height: 22px;
}
/* 相关产品 */
.accordion-production{
  font-weight: 500;
  font-size: 16px;
  color: #181818;
  line-height: 24px;
}
/* 关闭时的标题颜色 */
.accordion-option-title{
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  position: relative;
  cursor: pointer;
  color: #fff;
  z-index: 2;
  display: block;
}
@media screen and (min-width: 769px) {
  /* 背景图变化 */
  .accordion-article.is-active .accordion-bg {
    opacity: .2;
  }
  /* 展开时的标题颜色 */
  .accordion-article.is-active .accordion-option-title {
    color: #181818;
    transition: color .3s ease-in-out;
  }
  /* is-active 的 article 显示数据 */
  .accordion-article.is-active .accordion-datas{
    opacity: 1;
    pointer-events: auto;
  }
  /* 每个 active 标题样式 */
  .accordion-bg h3{
    position: absolute;
    right: 18px;
    top: 62px;
    transition: opacity .3s ease-in-out,transform .3s ease-in-out,-webkit-transform .3s ease-in-out;
    max-width: calc(100% - 36px);
    font-size: 14px;
    line-height: 22px;
    white-space: pre-wrap;
    font-weight: bold;
  }
  /* 关闭 article 时隐藏 h3 */
  .accordion-article.is-active h3 {
    opacity: 0;
  }
  /* 展开的 article */
  .accordion-article.is-active {
    font-size: 0;
    width: 460px;
    background: linear-gradient(180deg,#f3f5f8,#fff);
    box-shadow: 8px 8px 20px rgb(55 99 170 / 10%), -8px -8px 20px #fff;
    height: 430px;
  }
  .accordion-article {
    height: 430px;
  }
}
/* 每个 article 的按钮 */
.accordion-panel-buttons{
  margin-top: 36px;
}
/* article 的背景图节点 */
.accordion-bg{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 62px 20px 22px;
  background-position: 0 0;
  background-size: auto 100%;
  background-repeat: no-repeat;
  transition: opacity .3s ease-in-out;
  background-position: 100% 0;
}
/* 每个 article */
.accordion-article {
  display: inline-block;
  transition: width .3s ease-in-out,box-shadow .3s ease-in-out;
  margin-right: 20px;
  width: 160px;
  border: 2px solid #fff;
  box-sizing: border-box;
  color: #fff;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  box-shadow: 8px 8px 20px rgb(55 99 170 / 10%);
  padding: 22px 18px;
}
@media screen and (min-width: 1440px) {
  .accordion-article.is-active {
    width: 556px;
  }
  .accordion-article {
    width: 196px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1200px) {
  .accordion-article {
    width: 452px;
  }
}


</style>
