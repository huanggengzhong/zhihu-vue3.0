import { ref, Ref, onMounted, onUnmounted } from "vue";

const userClickOutside = (elementRef: Ref<null | HTMLElement>) => {//element泛型判断
  const isClickOutside = ref(false);
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if (
        elementRef.value.contains(e.target as HTMLElement)
      ) {
        isClickOutside.value = false;
      } else {
        isClickOutside.value = true
      }
    }
  };

  onMounted(() => {
    document.addEventListener("click", handler);
  });
  onUnmounted(() => {
    document.removeEventListener("click", handler);
  });
  return isClickOutside

}

export default userClickOutside
