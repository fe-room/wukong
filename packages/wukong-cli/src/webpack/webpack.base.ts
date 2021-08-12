/*
 * @Author: your name
 * @Date: 2021-08-09 11:37:23
 * @LastEditTime: 2021-08-12 16:22:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/wokong-cli/src/webpackConfig/webpack.base.ts
 */
import sass from "sass";
import { STYLE_EXTS, SCRIPT_EXTS } from "../common/constant";
import { CACHE_LOADER, CSS_LOADERS, VUE_LOADER } from "./config/loader";
export const baseConfig = {
  resolve: {
    extensions: [...SCRIPT_EXTS, ...STYLE_EXTS],
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [CACHE_LOADER, VUE_LOADER, {
          loader: '@wkp/transform-markdown-loader',
          options: {
            testkey: 'testvalue'
          }
        }],
      },
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [CACHE_LOADER, "babel-loader"],
      },
      {
        test: /\.css$/,
        sideEffects: true,
        use: CSS_LOADERS,
      },
      {
        test: /\.less$/,
        sideEffects: true,
        use: [...CSS_LOADERS, "less-loader"],
      },
      {
        test: /\.scss$/,
        sideEffects: true,
        use: [
          ...CSS_LOADERS,
          {
            loader: "sass-loader",
            options: {
              implementation: sass,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        chunks: {
          chunks: 'all',
          minChunks: 2,
          minSize: 0,
          name: 'chunks',
        },
      },
    },
  },
};
