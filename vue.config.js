module.exports = {
    devServer: {
        disableHostCheck: process.env.NODE_ENV === 'development',
        // port: 80,
        // public: '0.0.0.0:80'
    },
    configureWebpack: {
        devServer: {
            watchOptions: {
                ignored: ['node_modules'],
                aggregateTimeout: 300,
                poll: true
            },
            public: '192.168.4.10' // vagrant machine address
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