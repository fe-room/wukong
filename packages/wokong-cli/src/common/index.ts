/*
 * @Author: your name
 * @Date: 2021-08-09 13:57:52
 * @LastEditTime: 2021-08-09 14:36:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/wokong-cli/src/common/index.ts
 */
const chalk = require('chalk');
const colors = [ 'green' , 'blue' , 'yellow' ,'red'  ]
let colorText: any = {}
colors.forEach(color=>{
    colorText[color] = function(text:string){
         return console.log( chalk[color](text) )
    }
})
export {
  colorText
}



export type NodeEnv = 'production' | 'development' | 'test';

export function setNodeEnv(value: NodeEnv) {
  process.env.NODE_ENV = value;
}