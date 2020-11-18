
<template>
  <div>
    <Suspense>
      <!-- 默认完成的组件显示 -->
      <template #default>
        <div>
          <async-show />
          <dog-show />
        </div>
      </template>
      <!-- 未完成的组件显示,关键字fallback -->
      <template #fallback>
        <h1>loading...</h1>
      </template>
    </Suspense>
  </div>
</template>
<script lang="ts">
import AsyncShow from "./components/AsyncShow.vue";
import DogShow from "./components/DogShow.vue";
import { ref } from "vue";
export default {
  components: { AsyncShow, DogShow }
};
</script>
