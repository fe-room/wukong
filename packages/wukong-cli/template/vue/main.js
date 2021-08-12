/*
 * @Author: your name
 * @Date: 2021-08-09 17:27:50
 * @LastEditTime: 2021-08-12 15:11:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/wokong-cli/src/template/vue/src/main.js
 */
import Vue from 'vue';
import App from './App';
import {router} from './router'
new Vue({
    el: '#app',
    router,
    render: (h) => h(App),
  });
  