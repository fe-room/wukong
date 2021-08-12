/*
 * @Author: your name
 * @Date: 2021-08-09 11:54:05
 * @LastEditTime: 2021-08-11 14:10:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/wokong-cli/src/webpack/conifg/plugin.ts
 */
import FriendlyErrorsPlugin from '@nuxt/friendly-errors-webpack-plugin';
import WebpackBar from 'webpackbar';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { GREEN } from '../../common/constant';
import { WEBSITE_PATH_HTML } from '../../common/paths';
import RemoveLogPlugin from '@wkp/log-webpack-plugin'
const basePlugin: any[] = [
    new WebpackBar({
        name: 'wukong cli',
        color: GREEN
      }),
    new FriendlyErrorsPlugin({
        clearConsole: false,
        logLevel: 'WARNING',
      }),
      new HtmlWebpackPlugin({
        template: WEBSITE_PATH_HTML,
        filename: 'index.html',
      }),
      new RemoveLogPlugin()
];

export const devPlugin = [...basePlugin];

export const proPlugin = [...basePlugin];