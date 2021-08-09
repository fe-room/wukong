/*
 * @Author: your name
 * @Date: 2021-08-09 11:54:05
 * @LastEditTime: 2021-08-09 14:41:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/wokong-cli/src/webpack/conifg/plugin.ts
 */
import FriendlyErrorsPlugin from '@nuxt/friendly-errors-webpack-plugin';
import WebpackBar from 'webpackbar';
import { GREEN } from '../../common/constant';

const basePlugin: any[] = [
    new WebpackBar({
        name: 'wukong cli',
        color: GREEN
      }),
    new FriendlyErrorsPlugin({
        clearConsole: false,
        logLevel: 'WARNING',
      })
];

export const devPlugin = [...basePlugin];

export const proPlugin = [...basePlugin];