const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
//   publicPath:'./',
  devServer: {
    proxy: {
        '/api': {
            target: "https://api.bilibili.com/x/space/wbi/acc",
            pathRewrite: {
                '^/api': ''
            },
             changeOrigin: true
        }
    }
}
})

