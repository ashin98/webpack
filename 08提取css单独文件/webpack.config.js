//要提取css文件需要安装 npm i mini-css-extract-plugin -D
//压缩css  npm i optimize-css-assets-webpack-plugin@4.0.0 -D

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtracrPlugin = require('mini-css-extract-plugin')
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename:'js/built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    //创建style标签，将样式放入
                    //'style-loader',
                    //取代style-loader,作用是提取js中的css成单独文件
                    MiniCssExtracrPlugin.loader,
                    //将css文件整合到js文件中
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        //创建gtml文件，自动引入js到html
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        //css文件单独提取出来
        new MiniCssExtracrPlugin({
            
            filename:'css/build.css'  //对输出的css重命名
        }),
        //压缩css
        new optimizeCssAssetsWebpackPlugin()
    ],
    mode:'development'
}