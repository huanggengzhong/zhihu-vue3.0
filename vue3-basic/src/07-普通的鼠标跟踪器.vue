<template>
  <!-- vue3.0鼠标跟踪器 -->
  <div>
    <h1>X坐标:{{x}}</h1>
    <h1>Y坐标:{{y}}</h1>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const x = ref(0);
    const y = ref(0);
    const updateMouse = (e: MouseEvent) => {
      x.value = e.pageX;
      y.value = e.pageY;
    };
    onMounted(() => {
      document.addEventListener("click", updateMouse);
    });
    onUnmounted(() => {
      document.removeEventListener("click", updateMouse);
    });

    return {
      x,
      y
    };
  }
};
</script>
