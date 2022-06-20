// m-vue > vue.config.js

module.exports = {
  publicPath: 'http://localhost:8080', // 保证子应用静态资源都是向8080端口发送的,此处的端口号和上文中注册的端口号保持一致
  devServer: {
    port: 8080, // 启动的端口号也保持一致
    headers: {
      'Access-Control-Allow-Origin': '*'  // 因为乾坤会用fetch请求的方式在3000端口的base应用中访问8080的m-vue，所以存在跨域，这里操作允许跨域
    }
  },
  configureWebpack: { // 需要获取我打包的内容
    output: {
      libraryTarget: 'umd',  // 打包格式
      library: 'm-vue'  // 打包成umd格式会挂载到window上，名为m-vue
    }
  }
}
