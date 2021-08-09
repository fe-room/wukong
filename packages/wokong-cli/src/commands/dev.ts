/*
 * @Author: your name
 * @Date: 2021-08-06 15:42:03
 * @LastEditTime: 2021-08-09 14:56:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/wokong-cli/src/commands/dev.ts
 */
import { colorText } from '../common/index'
import { POSTCSS_CONFIG_FILE } from '../common/paths'
export function dev() {
    colorText.green('🎉🎉🎉欢迎使用wukong-cli🎉🎉🎉')
    console.log(POSTCSS_CONFIG_FILE)
    
}