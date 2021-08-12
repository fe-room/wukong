<!--
 * @Author: your name
 * @Date: 2021-08-09 17:28:49
 * @LastEditTime: 2021-08-12 16:03:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/wokong-cli/src/template/vue/App.vue
-->
<template>
<div>
  <div>测试一下</div>
  <router-view/>
</div>

</template>

<script>
export default {
  data(){
    return {
    
    }
  },
  methods: {
    handleLog(){
      console.log('测试插件')
    }
  },
  created(){
    this.handleLog()
  }

}
</script>

<style>

</style>