<template>
  <div>
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <button @click="increase">加</button>
  </div>
</template>
<script lang="ts">
import { ref, computed } from "vue";
console.log(computed, "computed"); //监听器的使用

export default {
  setup() {
    const count = ref(0);
    const double = computed(() => {
      return count.value * 2; //注意这里也要写value
    });
    const increase = () => {
      count.value++;
    };
    return {
      count,
      double,
      increase
    };
  }
};
</script>


<style>
</style>
