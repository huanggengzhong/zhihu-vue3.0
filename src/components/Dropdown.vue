<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleOpen"
    >{{title}}</a>
    <ul class="dropdown-menu" :style="{display:'block'}" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, watch } from "vue";
import userClickOutside from "../hooks/useClickOutside";
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };
    const dropdownRef = ref<null | HTMLElement>(null);
    const isClickOutside = userClickOutside(dropdownRef);
    // 监听设置open
    watch(isClickOutside, () => {
      if (isClickOutside.value && isOpen.value) {
        //在外面并且打开状态
        isOpen.value = false;
      }
    });
    return {
      isOpen,
      toggleOpen,
      // 返回和Dom中ref同名的响应式对象,就可以拿到对应的节点
      dropdownRef
    };
  }
});
</script>
