<!--
 * @Description: 模拟异步组件
 * @Date: 2020-11-18 13:03:09
 * @LastEditors: gengzhong
 * @LastEditTime: 2020-11-18 13:06:53
-->

<template>
  <!-- 在这里可以直接使用返回的结果对象 -->
  <div>{{result}}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return new Promise(resolve => {
      setTimeout(() => {
        return resolve({
          result: "3秒后的结果"
        });
      }, 3000);
    });
  }
});
</script>

