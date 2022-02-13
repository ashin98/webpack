/**
 * loader: 1.下载  2.使用
 * plugins: 1.下载  2.引入  3.使用   npm i html-webpack-plugin -D    打包html需要使用
 */

const {resolve} = require('path')
const HtmlWebpackPlugins = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            //loader的配置
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
        ],
    },
    plugins:[
        //plugins的配置
        //html-webpack-plugin
        //功能：默认会创建一个空的html，自动引入打包输出的所有资源（js/css）
        new HtmlWebpackPlugins({
            // 复制 './src/index.html'文件，并自动引入打包输出的所有资源(js/css)
            template:'./src/index.html'  //给路径让它找
        })
    ],
    mode:'development'
}