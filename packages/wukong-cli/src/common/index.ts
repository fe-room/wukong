/*
 * @Author: your name
 * @Date: 2021-08-09 13:57:52
 * @LastEditTime: 2021-08-10 14:27:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/wokong-cli/src/common/index.ts
 */
const chalk = require("chalk");
import { resolveApp } from "../common/paths";
import { join } from "path";
import { WebpackConfig } from "../common/types";
import merge from "webpack-merge";
import { CACHE_LOADER, VUE_LOADER } from "../webpack/config/loader";
import { VueLoaderPlugin } from "vue-loader";
const colors = ["green", "blue", "yellow", "red"];
let colorText: any = {};
colors.forEach((color) => {
  colorText[color] = function (text: string) {
    return console.log(chalk[color](text));
  };
});
export { colorText };

export type NodeEnv = "production" | "development" | "test";

export function setNodeEnv(value: NodeEnv) {
  process.env.NODE_ENV = value;
}

export function getWebpackConfig(
  defaultConfig: WebpackConfig,
  type?: string
): object {
  return merge(defaultConfig as any, {
    entry: {
      vue2: join(__dirname, "../../../template/vue/main.js"),
    },
    output: {
      path: resolveApp("dist"),
      filename: "static/js/[name].[contenthash:8].js",
      assetModuleFilename: "static/asset/[name].[contenthash:8][ext][query]",
      publicPath: "auto",
      environment: {
        arrowFunction: false,
        bigIntLiteral: false,
        const: false,
        destructuring: false,
        forOf: false,
        dynamicImport: false,
        module: false,
      },
    },
    watchOptions: {
      ignored: ["**/.git/**", "**/node_modules/**", "**/dist/**"],
    },
    devServer: {
      port: 8080,
      quiet: true,
      host: "0.0.0.0",
      stats: "errors-only",
      publicPath: "/",
      disableHostCheck: true,
    },
    plugins: type === "vue" ? [
      new VueLoaderPlugin()
    ] : [],
    module:
      type === "vue"
        ? {
            rules: [
              {
                test: /\.vue$/,
                use: [CACHE_LOADER, VUE_LOADER],
              },
            ],
          }
        : {},
  });
}
