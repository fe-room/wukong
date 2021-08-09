/*
 * @Author: your name
 * @Date: 2021-08-09 11:29:13
 * @LastEditTime: 2021-08-09 11:32:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/log-webpack-plugin/index.js
 */
const pluginName = 'RemoveConsoleLogWebpackPlugin'

class RemoveConsoleLogWebpackPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, compilation => {
            console.log(compilation);
            console.log('====================')
            console.log("webpack 构建过程开始！");
        });
    }
}
