import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// 全局样式
import './assets/main.css'
import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";
import Colada, { PiniaColadaPlugin } from 'colada-plugin';  

const app = createApp(App)

// 插件
const pinia = createPinia()
app.use(pinia)
pinia.use(PiniaColadaPlugin);  
app.use(Colada);  
app.use(router)
app.use(ElementPlus)

// 错误上报
Sentry.init({
    dsn: "https://452215c518d8415e80e4f366cd9dafd0@o4504872388329472.ingest.sentry.io/4504872389705728",
    // integrations: [new BrowserTracing()],
    // tracesSampleRate: 1.0,
    // This sets the sample rate to be 10%. You may want this to be 100% while
    // in development and sample at a lower rate in production
    replaysSessionSampleRate: 0.1,
    // If the entire session is not sampled, use the below sample rate to sample
    // sessions when an error occurs.
    replaysOnErrorSampleRate: 1.0,

    integrations: [new Sentry.Replay()],
});



// myUndefinedFunction()
// app.config.errorHandler = (err, instance, info) => {
//     // 处理错误，例如：报告给一个服务 向后台post 错误
//     console.log('发现一个错误', err, instance, info)
// }

app.mount('#app')
