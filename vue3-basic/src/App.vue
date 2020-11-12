<template>
  <!-- vue3.0鼠标跟踪器 -->
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
</script>
