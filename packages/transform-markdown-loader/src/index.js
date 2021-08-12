/*
 * @Author: your name
 * @Date: 2021-08-12 14:19:58
 * @LastEditTime: 2021-08-12 16:22:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/transform-markdown-loader/src/index.js
 */
const loaderUtils = require('loader-utils');
const markDownIt = require('markdown-it');

function vueWrap(content) {
    return `
      <template>
        <section v-html="content" v-once />
      </template>
      <script>
      export default {
        created() {
          this.content = \`${content}\`;
          console.log(this.content)
        }
      };
      </script>
    `;
}

module.exports = function(source){
    let options = loaderUtils.getOptions(this) || {} ;
    const markDownItInstance = new markDownIt({
        html: true
    })
    options = {
        vueWrap,
        ...options,
    };
    const parseMd = markDownItInstance.render(source)
    return options.vueWrap.call(this, parseMd);
}