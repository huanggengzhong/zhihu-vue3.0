/*
 * @Description: 
 * @Date: 2020-11-13 13:01:50
 * @LastEditors: gengzhong
 * @LastEditTime: 2020-11-13 13:05:43
 */
import { ref } from 'vue';
import axios from 'axios'

// 增加运行时泛型
function useURLLoader<T>(url: string) {
  const result = ref<T | null>(null)//增加T和null联合类型
  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)

  // 发送异步请求
  axios.get(url).then(res => {
    loading.value = false
    loaded.value = true
    result.value = res.data
  }).catch(err => {
    error.value = err
  })

  return {
    result,
    loading,
    loaded,
    error
  }
}
export default useURLLoader
