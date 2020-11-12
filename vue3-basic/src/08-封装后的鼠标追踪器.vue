<template>
  <!-- vue3.0封装鼠标跟踪器 -->
  <div>
    <h1>X坐标:{{x}}</h1>
    <h1>Y坐标:{{y}}</h1>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import useMousePOsition from "./hooks/useMousePosition";
export default {
  setup() {
    const { x, y } = useMousePOsition();
    return {
      x,
      y
    };
  }
};

// 这种实现方式的优点
// 第一：它可以清楚的知道 xy 这两个值的来源，这两个参数是干什么的，他们来自 useMousePOsition 的返回，那么它们就是用来追踪鼠标位置的值。
// 第二：我们可以xy 可以设置任何别名，这样就避免了命名冲突的风险。
// 第三：这段逻辑可以脱离组件存在，因为它本来就和组件的实现没有任何关系，我们不需要添加任何组件实现相应的功能。只有逻辑代码在里面，不需要模版。
</script>
