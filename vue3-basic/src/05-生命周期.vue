<template>
  <!-- vue3.0生命周期 -->
  <div>
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <button @click="increase">加(使用toRefs)</button>
  </div>
</template>
<script lang="ts">
import {
  ref,
  computed,
  reactive,
  toRefs,
  onMounted,
  onUpdated,
  onRenderTriggered
} from "vue";
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
}
export default {
  setup() {
    // 生命周期演示 start
    onMounted(() => {
      console.log("onMounted");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onRenderTriggered(event => {
      console.log(event, "onRenderTriggered");
      // debugger;
    });

    // 生命周期演示 end

    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => data.count * 2)
    });
    const refData = toRefs(data);
    return {
      // 这里解构
      ...refData
    };
  }
};
// 解释
// errorCaptured 本质上是捕获一个来自子孙组件的错误，它返回 true 就可以阻止错误继续向上传播。
// onRenderTracked 和 onRenderTriggered 是 Vue.js 3.0 新增的生命周期 API，它们是在开发阶段渲染调试用的。
// 在执行完依赖收集后，会执行 onTrack 函数，也就是遍历执行我们注册的 renderTracked 钩子函数。
// 在遍历执行 effects 的时候会执行 onTrigger 函数，也就是遍历执行我们注册的 renderTriggered 钩子函数
</script>
