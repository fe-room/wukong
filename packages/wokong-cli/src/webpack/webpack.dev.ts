/*
 * @Author: your name
 * @Date: 2021-08-10 10:40:19
 * @LastEditTime: 2021-08-10 12:00:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/wokong-cli/src/webpack/wepack.dev.ts
 */
import { WebpackConfig } from "../common/types";
import { getWebpackConfig } from "../common";
import { baseConfig } from "./webpack.base";
import { merge } from "webpack-merge";
export function getWepackDevConfig(): WebpackConfig {
  return getWebpackConfig(merge(baseConfig as any, {
    mode: "development",
    optimization: {
      usedExports: true,
    },
    devtool: "cheap-module-source-map",
  }),'vue');
}
