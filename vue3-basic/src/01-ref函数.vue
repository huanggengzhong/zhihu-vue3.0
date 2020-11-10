<template>
  <div>
    <!-- ref的使用 -->
    <h1>{{count}}</h1>
    <button @click="increase">加</button>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
console.log(ref, "vue"); //ref函数
export default {
  /**
   * ref是一个函数,它接受一个参数,返回的是一个神奇的响应式对象.
   */
  setup() {
    const count = ref(0);
    const increase = () => {
      count.value++; //注意这里要用value
    };
    return {
      count,
      increase
    };
  }
};
</script>


<style>
</style>
