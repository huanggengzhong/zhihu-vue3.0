<!--
 * @Description: 
 * @Date: 2020-11-11 09:10:30
 * @LastEditors: gengzhong
 * @LastEditTime: 2020-11-18 09:50:29
-->
<template>
  <!-- vue3.0封装一个全局loading显示异步加载 -->
  <div>
    <h1 v-if="loading">loading......</h1>
    <img v-if="loaded" :src="result[0].url" alt />
    <Model />
  </div>
</template>
<script lang="ts">
import Model from "./components/Model.vue";
import { watch } from "vue";
import useURLLoading from "./hooks/useURLLoadingT";
interface DogResult {
  message: string;
  status: string;
}
interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}
export default {
  components: { Model },
  setup() {
    // const { result, loading, loaded } = useURLLoading<DogResult>(
    //   "https://dog.ceo/api/breeds/image/random"
    // );
    // watch(result, () => {
    //   // console.log(result.value.message); //不加泛型这里报错,因为result.value被推断成了null类型
    //   //解决方法使用泛型
    //   if (result.value) {
    //     console.log(result.value.message);
    //   }
    // });
    const { result, loading, loaded } = useURLLoading<CatResult[]>(
      "https://api.thecatapi.com/v1/images/search?limit=1"
    );
    watch(result, () => {
      if (result.value) {
        console.log(result.value[0].url);
      }
    });
    return {
      result,
      loading,
      loaded
    };
  }
};
</script>
