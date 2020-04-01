module.exports = {
  devServer: {
    hot: false,
    port: '4000',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        ws: true, // proxy websockets
        secure:false, // 使用的是http协议则设置为false，https协议则设置为true
        changeOrigin: true
      }
    }
  }
}
