<!--
 * @Description: 
 * @Date: 2020-11-11 09:10:30
 * @LastEditors: gengzhong
 * @LastEditTime: 2020-11-18 12:56:23
-->

<template>
  <!-- vue3.0封装一个全局loading显示异步加载 -->
  <div>
    <button @click="openModal">openModal</button>
    <Model :isOpen="modalIsOpen" @closeModal="closeModal" />
  </div>
</template>
<script lang="ts">
import Model from "./components/Model2.vue";
import { ref } from "vue";
export default {
  components: { Model },
  setup() {
    const modalIsOpen = ref(false);
    const openModal = () => {
      modalIsOpen.value = true;
    };
    const closeModal = () => {
      modalIsOpen.value = false;
    };
    return {
      modalIsOpen,
      openModal,
      closeModal
    };
  }
};
</script>
