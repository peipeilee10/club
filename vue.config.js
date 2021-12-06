module.exports = {
  // 設定打包後的路徑
  publicPath: './',
  chainWebpack (config) {
    // 修改webpack設定，改title
    config.plugin('html').tap(args => {
      args[0].title = '校園介紹網'
      return args
    })
  }
}
