<template>
  <!-- vue3.0监听器 -->
  <div>
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <button @click="increase">加(使用toRefs)</button>
    <button @click="updateGreeting">update-title</button>
  </div>
</template>
<script lang="ts">
import { ref, computed, reactive, toRefs, watch } from "vue";
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
    // 新增一个值
    const greetings = ref("");
    const updateGreeting = () => {
      greetings.value += "hello";
    };
    // 监听器的使用
    watch(data, () => {
      //1.监听data整个对象
      document.title = "updated" + data.count;
    });
    const refData = toRefs(data);
    watch(refData.count, (newValue, oldValue) => {
      //2.监听回调里的两个值:旧值和新增
      // console.log(newValue, oldValue, "新旧值");
    });
    watch([greetings, data], (newValue, oldValue) => {
      // 3.监听多个值
      console.log(newValue, oldValue, "新旧值");
      document.title = "updated" + greetings.value + data.count;
    });
    watch([greetings, () => data.count], (newValue, oldValue) => {
      // 4.监听reactive中的某一项
      console.log(newValue, oldValue, "某一项新旧值");
      document.title = "某一项updated" + greetings.value + data.count;
    });

    return {
      // 这里解构
      ...refData,
      greetings,
      updateGreeting
    };
  }
};
</script>
