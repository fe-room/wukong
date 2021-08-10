/*
 * @Author: your name
 * @Date: 2021-08-06 15:42:03
 * @LastEditTime: 2021-08-10 11:39:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/wokong-cli/src/commands/dev.ts
 */
import { colorText, setNodeEnv } from "../common/index";
import address from "address";
import chalk from "chalk";
import { get } from 'lodash';
import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import { getPort } from "portfinder";
import { getWepackDevConfig } from '../webpack/webpack.dev'
import { GREEN } from '../common/constant';

function logServerInfo(port: number) {
  const local = `http://localhost:${port}/`;
  const network = `http://${address.ip()}:${port}/`;

  console.log("\n  WebSite running at:\n");
  console.log(`  ${chalk.bold("Local")}:    ${chalk.hex(GREEN)(local)} `);
  console.log(`  ${chalk.bold("Network")}:  ${chalk.hex(GREEN)(network)}`);
}

function runDevServer(port: number, config: any) {
  const server = new WebpackDevServer(webpack(config), {
    ...config.devServer,
    port,
  });
    // this is a hack to disable wds status log
  (server as any).showStatus = function(){};
  const host = get(config.devServer,'host','localhost');
  server.listen(port, host, (err)=> {
      if(err){
          console.log(err)
      }
  })
}

function watch() {
  const config =  getWepackDevConfig()
  getPort(
    {
      port: config.devServer!.port,
    },
    (err, port) => {
      if (err) {
        console.log(err);
        return;
      }

      logServerInfo(port);
      runDevServer(port, config);
    }
  );
}

export function dev() {
  setNodeEnv("development");
  colorText.green("🎉🎉🎉欢迎使用wukong-cli🎉🎉🎉");
  watch();
}
