const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        // proxy: {
        //     '/api': {
        //         target: "https://api.asilu.com/",
        //         pathRewrite: {'/api': ""},
        //         ws:true,
        //         changOrigin: true,
        //     },
        // },

    }
})
