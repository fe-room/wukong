/*
 * @Author: your name
 * @Date: 2021-08-06 15:20:41
 * @LastEditTime: 2021-08-06 16:05:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/wokong-cli/src/index.ts
 */
import { dev } from './commands/dev'
import packageJson  from  '../package.json'
export const cliVersion: string = packageJson.version;
process.env.WUKONG_CLI_VERSION = cliVersion;
export {
    dev
}