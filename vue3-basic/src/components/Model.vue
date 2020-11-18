<!--
 * @Description: vue3 新添加了一个默认的组件就叫 Teleport，
 我们可以拿过来直接使用，它上面有一个 to 的属性，
 它接受一个css query selector 作为参数，
 这就是代表要把这个组件渲染到哪个 dom 元素中
 * @Date: 2020-11-18 09:36:06
 * @LastEditors: gengzhong
 * @LastEditTime: 2020-11-18 09:45:35
-->
<template>
  <!-- teleport -->
  <teleport to="#modal">
    <div id="center">
      <h1>this is a modal</h1>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style>
#center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>
