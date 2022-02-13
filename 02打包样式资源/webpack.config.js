/**webpack.config.js  是webpack的配置文件
 *        作用：指示webpack干哪些活（当你运行webpack指令时，会加载里面的配置）
 *          所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs
 * 1.启动打包：
 *      1.项目初始化----npm init
 *      2.给项目包命名----- webpack_code
 *      3.下包-------  npm i webpack webpack-cli -g全局安装
 *          npm i webpack webpack-cli -D 安装开发依赖
 *      4.需要先下载使用到的loader：例如---- npm i css-loader -D
 *      5.输入  webpack 启动打包
 * 
 * 
 */
const {resolve} = require('path')
 module.exports = {
    entry:'./src/index.js' , //入口文件
    output:{
        filename:'built.js', //输出文件名
        path:resolve(__dirname,'build')  //输出路径  __dirname nodejs的变量，代表当前文件的目录绝对路径
    },

    //loader的配置
    module:{
        rules:[  //详细loader配置
            {
                test:/\.css$/,  //匹配哪些文件
                use:['style-loader','css-loader']  //使用哪些loader处理。use数组中的loader执行顺序：从右到左，从下到上，依次执行
                //1.style-loader:创建style标签，将js中的样式资源插入进行，添加到head中生效
                //2.css-loader:将css文件变成commonjs模块加载js中，里面内容是样式字符串
                //3.需要下载这些loader ：npm i style-loader css-loader -D
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            }
            
        ]
    },
    
    mode:'development', //开发模式，（生产模式的话会压缩代码，变成一行的，很难看懂代码）
    //mode:'production' 
}
