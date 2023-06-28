<script setup lang="ts">
const props = defineProps({
    data: {
        type: Object,
        default: () => {},
      }
})
</script>

<template>
  <section class="frame-detail">
      <aside class="frame-detail__aside">
            <div v-for="(item, idx) in data.left_card" :key="item.id" class="frame-detail__recommend">
                  <h3 class="frame-detail__recommend-title">{{item.name}}</h3>
                  <h3 class="frame-detail__recommend-dec">{{item.dec}}</h3>
                  <div class="frame-detail__recommend-btns">
                        <a class="frame-detail__recommend-btn left-btn" href="https://cloud.tencent.com/product/lighthouse" target="_blank"><span>立即选购</span></a>
                        <a class="frame-detail__recommend-btn right-btn" href="https://cloud.tencent.com/product/tm" target="_blank"><span>产品介绍</span></a>
                  </div>
            </div>
      </aside>
      <main class="frame-detail__main">
            <template v-for="(item, idx) in data.right_card" :key="item.id">
                  <a class="frame-detail__item" href="https://cloud.tencent.com/act/pro/ai_art" target="_blank">
                        <header class="frame-detail__item-hd">
                              <h4 class="frame-detail__item-title">{{item.name}}</h4>
                              <div class="frame-detail__marks" v-if="item.marks_bubble || item.marks_tag">
                                    <span v-show="item.marks_bubble" class="frame-detail__marks-bubble">{{item.marks_bubble}}</span>
                                    <span v-show="item.marks_tag" class="frame-detail__marks-tag">{{item.marks_tag}}</span>
                              </div>
                        </header>
                        <div class="frame-detail__item-dec">{{item.dec}}</div>
                        <div class="frame-detail__item-tags">
                              <span class="frame-detail__item-tag" v-for="(tag, idx) in item.tags" :key="idx">{{tag}}</span>
                        </div>
                  </a>
            </template>
      </main>
  </section>
</template>
<style>
.frame-detail{
      margin: 0 auto;
      max-width: 1180px;
      display: flex;
      text-align: left;
}
.frame-detail__aside{
      width: 378px;
      padding-right: 48px;
      margin-bottom: 0;
}
.frame-detail__recommend{
      margin-right: 20px;
      background-color: #f3f5f8;
      background-image: url('https://cloudcache.tencentcs.cn/qcloud/ui/tea-portal-material-portal/build/Main/images/recom-bg_938.jpg'),linear-gradient(180deg,#f3f5f8,#fff 178px,#fff);
      background-size: 340px auto,auto;
      background-position: 100% 0;
      background-repeat: no-repeat;
      border: 2px solid #fff;
      box-shadow: 8px 8px 20px 0 rgba(55,99,170,.1), -8px -8px 20px 0 #fff;
      border-radius: 4px;
      padding: 24px;
      height: 160px;
      text-align: left;
      cursor:pointer;

}
.frame-detail__recommend + .frame-detail__recommend{
      margin-top: 20px
}
.frame-detail__recommend-title{
      font-weight: 500;
      font-size: 20px;
      color: inherit;
      line-height: 28px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 8px;
}
.frame-detail__recommend:hover .frame-detail__recommend-title{
      color: #0052d9;
}
.frame-detail__recommend-dec{
      font-size: 14px;
      color: #3d485d;
      line-height: 22px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
}
.frame-detail__recommend-btns{
      margin-top: 16px;
      display:flex;
}
.frame-detail__recommend-btn{
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
      background-color: #0052d9;
      border: 1px solid transparent;
      outline: 0 none;
      cursor: pointer;
      flex: 1;
      box-shadow: 8px 8px 20px 0 rgba(55,99,170,.1);
}
.frame-detail__recommend-btn:last-child
{
      margin-left: 12px;
      background-color: #fff;
      color: #43474d;
      box-shadow: 8px 8px 20px 0 rgba(55,99,170,.1), inset 0 4px 20px 0 hsla(0,0%,100%,.5);
}
.frame-detail__main{
      flex:1;
      margin: -22px -10px;
}
.frame-detail__item{
      width: 33.33%;
      padding: 18px 10px;
      display: inline-block;
      cursor:pointer;
}
.frame-detail__item-hd{
      display: flex;
      margin-bottom: 8px;
}
.frame-detail__item-title{
      font-size: 16px;
      color: #000;
      line-height: 24px;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      
}
.frame-detail__item:hover .frame-detail__item-title{
      color: #0052d9;
}
.frame-detail__item-dec{
      margin-bottom: 8px;
      font-size: 14px;
      color: #4b5b76;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
}
.frame-detail__item-tag{
      margin-right: 8px;
      margin-bottom: 8px;
      color: #5f7292;
      border: 1px solid rgba(75,91,118,.5);
      border-radius: 2px;
      font-size: 12px;
      padding: 0 8px;
      height: 22px;
      line-height:20px;
      display: inline-block;
}
.frame-detail__marks{
      margin-left: 8px;
}
.frame-detail__marks-bubble{
      display: inline-block;
      vertical-align: middle;
      padding: 0 8px;
      height: 22px;
      font-size: 12px;
      line-height: 22px;
      color: #fff;
      background-color: #f64041;
      border-radius: 2px;
      border-bottom-left-radius: 0;
      position: reactive;
}
.frame-detail__marks-bubble::before{
      content: "";
      position: absolute;
      right: 100%;
      bottom: 0;
      width: 0;
      height: 0;
      border-color: transparent #f64041 #f64041 transparent;
      border-style: solid;
      border-width: 2px 3px;
}
.frame-detail__marks-tag{
      display: inline-block;
      vertical-align: middle;
      padding: 0 8px;
      height: 22px;
      box-sizing: border-box;
      font-size: 12px;
      line-height: 20px;
      color: #f64041;
      border: 1px solid #f64041;
      border-radius: 2px;
}
.right-btn:hover{
      color: #0052d9;
      border: 1px solid #0052d9;
      background:#ecf2fe;
}
.left-btn:hover{
      background: #2670e8;
      color: #fff;
}
</style>