<!--
 * @Description: 真实的异步组件,同时抓取错误
 * @Date: 2020-11-18 13:14:35
 * @LastEditors: gengzhong
 * @LastEditTime: 2020-11-18 13:35:51
-->
<template>
  <img :src="rusult&&rusult.message" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  async setup() {
    //async关键字
    const rawData = await axios.get("https://dog.ceo/api/breeds/image/random");
    return {
      rusult: rawData.data
    };
  }
});
</script>
