import { ref } from 'vue';
import axios from 'axios'

const useURLLoader = (url: string) => {
  const result = ref(null)
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
