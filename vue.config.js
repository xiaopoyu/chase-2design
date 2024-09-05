const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: '/',
    productionSourceMap: false,
    configureWebpack:{
        output: {
            chunkFilename: 'js/[name].[chunkhash].js',
        },
    },
    css: {
        loaderOptions: {
        postcss: {
            postcssOptions: {
            plugins: [
                require('postcss-px-to-viewport')({
                unitToConvert: 'apx',
                viewportWidth: 2240, // 视口宽度（UI设计稿宽度）
                viewportHeight: 1260, // 视口高度（UI设计稿高度）
                unitPrecision: 6, // 单位转换后保留的小数位数
                viewportUnit: 'vw', // 需要转换的视口单位
                selectorBlackList: ['.ignore', '.hairlines'], // 不需要进行转换的类名
                minPixelValue: 1, // 小于或等于 1px 不转换为视口单位
                mediaQuery: false, // 允许在媒体查询中转换px
                exclude: [/node_modules/], // 忽略转换的文件
                })
            ]
            }
        }
        }
    }
})
