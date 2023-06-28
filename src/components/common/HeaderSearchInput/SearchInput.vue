<script setup lang="ts">
import { reactive } from 'vue';
import { useSearchStore } from '../../../stores/search'
import { debounce } from 'lodash-es'
import { searchPostRequest } from '@/http/request';

const search_store = useSearchStore()

const _data = reactive({
    show_input: false,
    input_value: ''
})

function search_div_click() {
    _data.show_input = true
    search_store.show_main_dropdown = true
}

function close() {
    _data.show_input = false
    search_store.show_main_dropdown = false
    search_store.show_result_dropdown = false
}

function search_click() {
    // search_store.history_list.push(_data.)
    let str = _data.input_value.trim()
    if (str) {
        search_store.history_list.add(str)
    }
}

async function search_input_handle(e: any) {
    search_store.show_result_dropdown = true
    search_store.show_main_dropdown = false

    // 修改loding状态
    search_store.result_loading = true

    // 接口错误处理  所有接口
    try {
        let res = await searchPostRequest({
            search: e.target.value
        })
        search_store.result_list = res.data.dataList
    } catch (err) {
        console.error('searchPostRequest 发生了错误', err)
        // throw new Error(err);
        
    } finally {
        search_store.result_loading = false
    }



    // search_store.set_searchResult(res.data.dataList)
}
const handle_search_input_debounce = debounce(search_input_handle, 300)
</script>

<template>
    <div class="search_input_wrap">
        <div class="search_div_box" v-show="!_data.show_input" @click="search_div_click">
            <div class="list">
                <div class="item">
                    <span>搜索</span>
                    <img class="search-icon"
                        src="https://cloudcache.tencent-cloud.com/qcloud/portal/kit/images/slice/search.7a49bf02.svg"
                        alt="">
                </div>
            </div>
        </div>
        <div class="input-wrap" v-show="_data.show_input">
            <div class="input-box">
                <input @input="handle_search_input_debounce" type="text" v-model="_data.input_value" class="input">
            </div>
            <span class="close-icon">
                <img @click="search_click"
                    src="https://cloudcache.tencent-cloud.com/qcloud/portal/kit/images/slice/search.7a49bf02.svg" alt="">
                <img src="https://cloudcache.tencent-cloud.com/qcloud/portal/kit/images/slice/search-close.24377927.svg"
                    alt="" @click="close">
            </span>
        </div>

    </div>
</template>

<style scoped lang="less">
.search_input_wrap {
    display: flex;
    align-items: center;
    height: 100%;

    //   position: absolute;
    //   right: 0px;
}

.search_div_box {
    width: 300px;
    height: 40px;
    overflow: hidden;
    // position: relative;
    // top: 10px;
    margin-top: 10px;
}

.list {
    width: 100%;
    height: 200px;
    border: 0px solid rgba(155, 166, 183, 0.4);
    position: absolute;
    left: 0px;
    cursor: pointer;
    background: #f7f9fb;
    font-size: 14px;
}

.item {
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    border: 1px solid rgba(155, 166, 183, 0.4);
    border-radius: 4px;
}

.search-icon {
    position: absolute;
    right: 12px;
    top: 13px;
    cursor: pointer;
    z-index: 99;
}

.input-wrap {
    height: 60px;
    display: flex;
    justify-content: space-between;
    animation: 0.3s wordsLoop ease-in-out;
    /* animation: all 0.3s ease-in-out; */
    /* border: 1px solid #0052d9; */
    cursor: pointer;
    // position: absolute;
    // right: 0px;
    padding-left: 20px;
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0 8px 20px 0 rgb(55 99 170 / 10%);
    z-index: 1;
    align-items: center;
}

.input-wrap-close {
    height: 40px;
    display: flex;
    justify-content: space-between;
    animation: 0.3s closeloop ease-in-out;
    /* animation: all 0.3s ease-in-out; */
    border: 1px solid #0052d9;
    cursor: pointer;
    position: absolute;
    right: 0px;
}

.close-icon {
    position: absolute;
    right: 10px;
    top: 22px;
}

.close-icon img {
    margin-left: 20px;
}

.input-box {
    width: 600px;
}

.input {
    width: 100%;
    height: 40px;
    border: 1px solid #0052d9;
    outline: none;
    padding-left: 10px;
}

@keyframes wordsLoop {
    0% {
        width: 400px;
    }

    /* 50% {
   width: 300px;
  } */
    100% {
        width: 620px;
    }
}

@keyframes closeloop {
    0% {
        width: 500px;
    }

    /* 50% {
   width: 300px;
  } */
    100% {
        width: 400px;
    }
}
</style>
