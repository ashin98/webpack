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
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            //打包其他资源（除了html/css/js资源之外的都叫其他资源）
            {
                exclude:/\.(css|js|html|less)$/,
                loader:'file-loader',
                options:{
                    name:'[hash:10].[ext]'  //输出的名称为10位，不想太长
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugins({
            template:'./src/index.html'
        })
    ],
    mode:'development'
}