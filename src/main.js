
// import 'lib-flexible/flexible.js'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import eventBus from './eventBus.js'; // 导入事件总线
// import './assets/fonts/Seravek_Basic_Medium.otf';
// import './assets/fonts/AlibabaPuHui_Thin.ttf';
// import './assets/fonts/Seravek_Basic_ExtraLight.otf';
// import './assets/fonts/Acumin_BdPro.otf';


const app = createApp(App)

// app.config.globalProperties.
app.config.globalProperties.$eventBus = eventBus; // 将事件总线挂载到全局属性

app.use(router).mount('#app');
