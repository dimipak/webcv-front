module.exports = {
    devServer: {
        disableHostCheck: process.env.NODE_ENV === 'development'
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
    },
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'dimipak',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        admin: {
            // entry for the page
            entry: 'src/admin.js',
            // the source template
            template: 'public/admin.html',
            // output as dist/index.html
            filename: 'admin.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'dimipak admin',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'admin']
        }
    }
};