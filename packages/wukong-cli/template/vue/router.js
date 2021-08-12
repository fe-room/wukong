/*
 * @Author: your name
 * @Date: 2021-08-12 15:00:43
 * @LastEditTime: 2021-08-12 15:08:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/wukong-cli/template/vue/router.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import mdfile  from './src/index.md'
function getRoutes() {
  const routes = [
    {
        name: 'md组件',
        path: '/md/index',
        component: mdfile
      }
  ];
  return routes;
}
export const router = new VueRouter({
  mode: "hash",
  routes: getRoutes(),
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});
