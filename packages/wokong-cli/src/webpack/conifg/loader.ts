/*
 * @Author: your name
 * @Date: 2021-08-09 11:53:51
 * @LastEditTime: 2021-08-09 15:24:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/wokong-cli/src/webpack/conifg/loader.ts
 */
import { POSTCSS_CONFIG_FILE,CACHE_DIR } from "../../common/paths"
export const CACHE_LOADER = {
  loader: 'cache-loader',
  options: {
    cacheDirectory: CACHE_DIR,
  },
};
export const VUE_LOADER = {
  loader: "vue-loader",
  options: {
    compilerOptions: {
      preserveWhitespace: false,
    },
  },
};
export const CSS_LOADERS = [
  "style-loader",
  "css-loader",
  {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        options: {},
        config: POSTCSS_CONFIG_FILE,
      },
    },
  },
];
