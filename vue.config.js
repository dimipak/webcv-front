module.exports = {
    publicPath: '/',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'dimipak'
                return args
            })
    },
    devServer: {
        disableHostCheck: true
    },
    configureWebpack: {
        devServer: {
            watchOptions: {
                ignored: ['node_modules'],
                aggregateTimeout: 300,
                poll: true
            }
        }
    },
    runtimeCompiler: true,
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @import "@/scss/_variables.scss";
                @import "@/scss/_mixins.scss";
                `
            }
        }
    }
};