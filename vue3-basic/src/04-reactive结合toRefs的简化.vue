<template>
  <!-- 使用toRefs来去除多余的data -->
  <div>
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <button @click="increase">加(使用toRefs)</button>
  </div>
</template>
<script lang="ts">
import { ref, computed, reactive, toRefs } from "vue";
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
}
export default {
  setup() {
    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => data.count * 2)
    });
    // 这里用toRefs来包裹,使它变为响应式数据
    const refData = toRefs(data);
    return {
      // 这里解构
      ...refData
    };
  }
};
</script>
