import axios from "axios";
import EventBus from '../utils/event'
const instance = axios.create({
});
// 中间件
instance.interceptors.response.use(function (response) {

    if(response.data.code === 0) {
        EventBus.emit('global_show_page')
    }

    // 业务侧发生了错误
    if(response.data.code === -1) {
        EventBus.emit('global_http_error', response.data.msg)
    }
    
    // debugger
    if(response.data.code === 401) {
        // debugger

        // debugger
        // 将页面直接跳转到  /login
        // window.location.href = '/login'
        EventBus.emit('global_not_login', response.data.msg)
        // EventBus.emit('global_show_page')
        return Promise.reject('没有登录状态')
    }
    return response.data;
}, function (error) {
    console.log(123);
    return Promise.reject(error);
});

export default instance