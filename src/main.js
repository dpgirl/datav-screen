import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import datav from 'datav'
// import datavTest from 'datav/src/components/Test/index'
// import datavTest2 from 'datav/src/components/Test2/index'
// index.js 91.11kb 未按需加载
// index.js 90.26kb 按需加载(感觉没有按需加载，一个组件)
// index.js 90.53kb 按需加载(两个组件)
const app = createApp(App)
app.use(router)
app.use(datav)
// app.use(datavTest)
// app.use(datavTest2)

app.mount('#app')
