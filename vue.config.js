module.exports = {
    devServer: {
        disableHostCheck: process.env.VUE_APP_HOST_HEADER
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