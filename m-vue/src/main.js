// m-vue > src > main.js

import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router" // 将路由的创建拿出来，每次子应用被切换的时候路由也会重新加载
import App from "./App.vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import routes from "./router"

let history
let router
let app
function render(props = {}) {
  history = createWebHistory("/vue")
  ;(router = createRouter({
    history,
    routes,
  })),
    (app = createApp(App))
  let { container } = props
  app
    .use(ElementPlus)
    .use(router)
    .mount(container ? container.querySelector("#app") : "#app") // 子应用在被注册到主应用中的时候，我们希望将子应用最后打包的代码挂载到主应用的DOM结构中，当其自己独立运行成项目时挂载到自己的'#app'中
}

// 乾坤在渲染前给我提供了一个变量 window.__POWERED_BY_QIANKUN__
if (!window.__POWERED_BY_QIANKUN__) {
  // 该应用没有加入到父应用中，独立运行
  render()
}

// 需要暴露接入协议
export async function bootstrap() {
  console.log("vue3 app bootstraped")
}
export async function mount(props) {
  // 参数props包含了主应用中的注册信息
  console.log("vue3 app mount", props)
  render(props)
}
export async function unmount() {
  console.log("vue3 app unmount")
  history = null // 当子应用被卸载后我们将路由等全部清空
  app = null
  router = null
}
