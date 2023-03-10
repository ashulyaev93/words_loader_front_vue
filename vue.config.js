// vue.config.js
module.exports = {
    // proxy all webpack dev-server requests starting with /api/v1
    devServer: {
      proxy: {
        '': {
          target: 'http://localhost:8081', // this configuration needs to correspond to the Spring Boot backends' application.properties server.port
          ws: true,
          changeOrigin: true
        }
      },
      port: 3000
    },
    // Change build paths to make them Maven compatible
    // see https://cli.vuejs.org/config/
    outputDir: 'target/dist',
    assetsDir: 'static'
  };