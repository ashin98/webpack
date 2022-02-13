/**
 * index.js是 webpack入口文件起点
 * 
 * 1.运行指令：
 *      开发环境：webpack ./src/index.js -o ./build --mode=development
 *          webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build 它会新建一个文件夹build 整体打包环境，是开发环境
 *      生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
 *             webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build 它会新建一个文件夹build 整体打包环境，是生产环境
 * 
 * 2.结论：
 *      1.webpack能处理js/json  但是不能处理css/img等其他资源
 *      2.生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化
 *      3.生产环境比开发环境多一个压缩js代码
 */

import data from './data.json'
console.log(data)
function add(x,y){
    return x+y
}
console.log(add(1,2))