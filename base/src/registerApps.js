// 使用qiankun来注册应用

import { registerMicroApps, start } from "qiankun"

const loader = loading => {
  console.log(loading)
}

registerMicroApps(
  [
    {
      name: "m-vue", // 子应用的名称
      entry: "//localhost:8080", // 子应用的访问地址
      container: "#container", // 子应用应该挂载的位置（后面会解释）
      activeRule: "/vue", // 在路径为xxx的时候让子应用渲染
      loader, // loader是乾坤提供的一个类似于加载中的函数
    },
    {
      name: "m-react",
      entry: "//localhost:6600",
      container: "#container",
      activeRule: "/react",
      loader,
    },
  ],
  {
    // 乾坤为我们提供了一系列的生命周期函数，会在子应用加载前后生效
    beforeLoad: () => {
      console.log("子应用加载前")
    },
    beforeMount: () => {
      console.log("子应用挂载前")
    },
    afterMount: () => {
      console.log("子应用挂载后")
    },
    beforeUnmount: () => {
      console.log("子应用销毁前")
    },
    afterUnmount: () => {
      console.log("子应用销毁后")
    },
  }
)

// 调用start用于启动子应用
start()
