module.exports = {
  outputDir: "dist",
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-ready-template/" : "/",
  devServer: {
    port: 9100, // 自定义端口
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Vue Ready Template"; // 自定义标题
      return args;
    });
  },
};
