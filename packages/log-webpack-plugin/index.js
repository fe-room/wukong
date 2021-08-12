/*
 * @Author: your name
 * @Date: 2021-08-09 11:29:13
 * @LastEditTime: 2021-08-11 17:34:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/log-webpack-plugin/index.js
 */
const pluginName = 'RemoveConsoleLogWebpackPlugin';
const fs = require('fs');
class RemoveConsoleLogWebpackPlugin {
    constructor(options) {
        this.options = options
    }
    apply(compiler) {
        compiler.hooks.done.tap(pluginName, compilation => {
            console.log("webpack 构建过程开始！");
            try {
                this.removeAllLogs(compilation);
            } catch (e) {
                console.log(e);
            }
        });
    }
    removeAllLogs(compilation) {
       console.log('1111')
        // fs.readdir('/Users/chen/doc/code/wukong/packages/wukong-cli',function(err, files){
        //     console.log(err,files);
        // })
        // fs.readFile(filePath, "utf8", (err, data) => {
        //     const rgx = /console.log\(['|"](.*?)['|"]\)/;
        //     const newData = data.replace(rgx, "");
        //     if (err) console.log(err);
        //     fs.writeFile(filePath, newData, function (err) {
        //         if (err) {
        //             return console.log(err)
        //         }
        //         console.log("Logs Removed");
        //     });
        // });
    }
    
}


module.exports = RemoveConsoleLogWebpackPlugin