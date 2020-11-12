<template>
  <!-- vue3.0封装一个全局loading显示异步加载 -->
  <div>
    <h1 v-if="loading">loading......</h1>
    <img v-if="loaded" :src="result.message" alt />
  </div>
</template>
<script lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import useURLLoading from "./hooks/useURLLoading";
export default {
  setup() {
    const { result, loading, loaded } = useURLLoading(
      "https://dog.ceo/api/breeds/image/random"
    );
    return {
      result,
      loading,
      loaded
    };
  }
};
</script>
