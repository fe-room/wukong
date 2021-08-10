/*
 * @Author: your name
 * @Date: 2021-08-10 10:50:44
 * @LastEditTime: 2021-08-10 10:52:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/wokong-cli/src/common/types.ts
 */
import type Webpack from 'webpack';
import type WebpackDevServer from 'webpack-dev-server';
export type WebpackConfig = Webpack.Configuration & {
    devServer?: WebpackDevServer.Configuration;
  };