<template>
  <!-- reactive函数的使用 -->
  <div>
    <h1>{{data.count}}</h1>
    <h1>{{data.double}}</h1>
    <button @click="data.increase">加</button>
  </div>
</template>
<script lang="ts">
import { ref, computed, reactive } from "vue";
// 这里新建一个接口类型,用来解决data被推论成是any的办法
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
}
export default {
  setup() {
    const data: DataProps = reactive({
      //这里传入的是对象
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => data.count * 2)
    });
    return {
      data
    };
  }
};
</script>
