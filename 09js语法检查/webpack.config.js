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
        /**
         * 语法检查：eslint-loader  eslint
         * 注意：只检查自己写的源代码，第三方库是不用检查的
         * 设置检查规则：
         *          package.json中eslintCofig中设置：
         *              "eslintConfig":{
         *                                "extends":"airbnb-base"  }
         *  需要安装 eslint-config-airbnb-base   eslint-plugin-import  eslint  
         *      
         * 
         * 
         * **/ 
        rules:[
            {
                test:/\.js$/,
                exclude:'/node_modules',
                loader:'eslint-loader',
                options:{
                    //自动修复eslint的错误
                    fix:true
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
    ],
    mode:'development'
}