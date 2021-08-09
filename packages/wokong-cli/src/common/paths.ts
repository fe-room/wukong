/*
 * @Author: your name
 * @Date: 2021-08-09 14:52:27
 * @LastEditTime: 2021-08-09 15:24:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/wokong-cli/src/common/paths.ts
 */
import { join, dirname  } from 'path';
import { existsSync } from 'fs-extra';
// Relative paths
export const CONFIG_DIR = join(__dirname, '../webpack/config');

export const POSTCSS_CONFIG_FILE = join(CONFIG_DIR, 'postcss.config.js');


//Root paths 
function findRootDir(dir: string): string {
    if (existsSync(join(dir, 'wukong.config.js'))) {
      return dir;
    }
  
    const parentDir = dirname(dir);
    if (dir === parentDir) {
      return dir;
    }
  
    return findRootDir(parentDir);
  }
export const CWD = process.cwd();
export const ROOT = findRootDir(CWD);
export const ROOT_POSTCSS_CONFIG_FILE = join(ROOT, 'postcss.config.js');
export const CACHE_DIR = join(ROOT, 'node_modules/.cache');