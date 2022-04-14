const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {  //配置跨域
      '/api': {
        target: 'http://localhost:3000/',  // target host
        ws: true,  // proxy websockets
        changeOrigin: true,  // needed for virtual hosted sites
        pathRewrite: {
          '^/api': ''  // rewrite path
        }
      },
    }
  }
}