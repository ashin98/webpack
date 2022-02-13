const HtmlWebpackPlugins = require('html-webpack-plugin')
const {resolve} = require('path')
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                //如果要使用多个loader使用use，单个loader使用 loader:
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                //处理图片资源
                test:/\.(jpg|png|gif)$/,
                loader:'file-loader',   //下载url-loader file-loader
                options:{
                    //图片大小小于8kb，就会被base64处理
                    //优点：减少请求数量（减轻服务器压力）
                    //缺点：图片体积会更大（文件请求速度更慢）
                    //limit:8*1024,
                    esModule: false, //关闭url-loader的es6模块化，使用commonjs解析，如果不写这句，解析时会出问题：【object Module】
                    name:'[hash:10].[ext]' //[hash:10]使重命名只有10位的hash值，[ext]取文件原来的扩展名
                },
                
                type: 'javascript/auto'
            },
            {
                test:/\.html$/,
                //处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
                loader:'html-loader'
            }
        ]
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