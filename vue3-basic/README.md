vue3.0 知识学习

### 安装过程图

路径:./../static/image/

### ref 函数

```js
<template>
  <div>
    <!-- setup的使用 -->
    <h1>{{count}}</h1>
    <button @click="increase">加</button>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
console.log(ref, "vue"); //ref函数
export default {
  /**
   * ref是一个函数,它接受一个参数,返回的是一个神奇的响应式对象.
   */
  setup() {
    const count = ref(0);
    const increase = () => {
      count.value++; //注意这里要用value
    };
    return {
      count,
      increase
    };
  }
};
</script>


<style>
</style>
```

### computed 监听函数的使用

跟原来 2.0 的差不多.

```js
<template>
  <div>
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <button @click="increase">加</button>
  </div>
</template>
<script lang="ts">
import { ref, computed } from "vue";
console.log(computed, "computed"); //监听器的使用

export default {
  setup() {
    const count = ref(0);
    const double = computed(() => {
      return count.value * 2; //注意这里也要写value
    });
    const increase = () => {
      count.value++;
    };
    return {
      count,
      double,
      increase
    };
  }
};
</script>


<style>
</style>

```

#### reactive 函数的使用

```js
<template>
  <!-- reactive函数的使用 -->
  <div>
    <h1>{{data.count}}</h1>
    <h1>{{data.double}}</h1>
    <button @click="data.increase">加</button>
  </div>
</template>
<script lang="ts">
import { ref, computed, reactive } from "vue";
// 这里新建一个接口类型,用来解决data被推论成是any的办法
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
}
export default {
  setup() {
    const data: DataProps = reactive({
      //这里传入的是对象
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => data.count * 2)
    });
    return {
      data
    };
  }
};
</script>

```

### 用 toRefs 函数来包裹 reactive 数据,用来添加响应式

### ref 和 reactive 的选择

如果使用了 reactive,那要记得使用 toRefs 保证 reactive 对象属性的响应式
解释:

```js
// 原生的ref的解释,可以监听到数据
// let x = 0
// let y = 0
// console.log(x, y, "1111");

// function updateObject() {
//   x = 2
//   y = 3
// }
// updateObject()
// console.log(x, y, "2222");
// 上面依次是:0,2

// 使用reactive要加toRefs包裹的解释
reactive类似对象的解构一样;
const pos = {
  x: 0,
  y: 0,
};

function updateObject() {
  pos.x = 2;
  pos.y = 3;
}
updateObject();
console.log(pos, "111");
const { x } = pos;
console.log(pos, "222");
pos.x = 3;
console.log(pos, "333"); //结果上面每次打印的x都变为3了,因为是引用类型,没有响应式监听到
```
