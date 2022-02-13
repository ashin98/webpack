//配置webpack
/**
 * 1.npm init初始化包描述文件
 * 2.下包 webpack_test  npm i webpack webpack-cli -g全局安装
 *      npm i webpack webpack-cli -D 安装开发依赖
 * 
 * 
 */
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.js' , //入口文件
    output:{
        filename:'built.js', //输出文件
        path:resolve(__dirname,'build')  //路径
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            //打包其他资源（除了html/js/css资源以外的资源）
            {
                exclude:/\.(css|js|html|less)$/,
                loader:'file-loader',
                options:{
                    name:'[hash:10].[ext]'  //输出的名称为10位，不想太长
                }
            }
        ]
    },
    //plugins（插件）可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development',

    //开发服务器devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器） 打开浏览器localhost:3000
    //特点：只会在内存中编译打包，不会有任何输出到本地代码
    //启动devServer指令为：npx webpack server     用指令之前需要先下载包 npm i webpack-dev-server -D
    devServer:{
        static:{directory:resolve(__dirname,'build')},
        //启动gzip压缩
        compress:true,
        //端口号
        port:3000,
        open:true  //自动打开浏览器
    } 
}
