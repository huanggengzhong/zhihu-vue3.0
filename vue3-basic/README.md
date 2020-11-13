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

```js
<template>
  <!-- 使用toRefs来去除多余的data -->
  <div>
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <button @click="increase">加(使用toRefs)</button>
  </div>
</template>
<script lang="ts">
import { ref, computed, reactive, toRefs } from "vue";
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
}
export default {
  setup() {
    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => data.count * 2)
    });
    // 这里用toRefs来包裹,使它变为响应式数据
    const refData = toRefs(data);
    return {
      // 这里解构
      ...refData
    };
  }
};
</script>

```

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

### 生命周期

```js
<template>
  <!-- vue3.0生命周期 -->
  <div>
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <button @click="increase">加(使用toRefs)</button>
  </div>
</template>
<script lang="ts">
import {
  ref,
  computed,
  reactive,
  toRefs,
  onMounted,
  onUpdated,
  onRenderTriggered
} from "vue";
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
}
export default {
  setup() {
    // 生命周期演示 start
    onMounted(() => {
      console.log("onMounted");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onRenderTriggered(event => {
      console.log(event, "onRenderTriggered");
      // debugger;
    });

    // 生命周期演示 end

    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => data.count * 2)
    });
    const refData = toRefs(data);
    return {
      // 这里解构
      ...refData
    };
  }
};
// 解释
// errorCaptured 本质上是捕获一个来自子孙组件的错误，它返回 true 就可以阻止错误继续向上传播。
// onRenderTracked 和 onRenderTriggered 是 Vue.js 3.0 新增的生命周期 API，它们是在开发阶段渲染调试用的。
// 在执行完依赖收集后，会执行 onTrack 函数，也就是遍历执行我们注册的 renderTracked 钩子函数。
// 在遍历执行 effects 的时候会执行 onTrigger 函数，也就是遍历执行我们注册的 renderTriggered 钩子函数
</script>

```

### 封装的鼠标追踪器

封装 useMousePOsition.ts 文件

```js
import { ref, onMounted, onUnmounted } from "vue";

function useMousePOsition() {
  const x = ref(0);
  const y = ref(0);
  const updateMouse = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };
  onMounted(() => {
    document.addEventListener("click", updateMouse);
  });
  onUnmounted(() => {
    document.removeEventListener("click", updateMouse);
  });

  return { x, y };
}
export default useMousePOsition;
```

使用:

```js
<template>
  <!-- vue3.0封装鼠标跟踪器 -->
  <div>
    <h1>X坐标:{{x}}</h1>
    <h1>Y坐标:{{y}}</h1>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import useMousePOsition from "./hooks/useMousePosition";
export default {
  setup() {
    const { x, y } = useMousePOsition();
    return {
      x,
      y
    };
  }
};
```

好处:
这种实现方式的优点
第一：它可以清楚的知道 xy 这两个值的来源，这两个参数是干什么的，他们来自 useMousePOsition 的返回，那么它们就是用来追踪鼠标位置的值。
第二：我们可以 xy 可以设置任何别名，这样就避免了命名冲突的风险。
第三：这段逻辑可以脱离组件存在，因为它本来就和组件的实现没有任何关系，我们不需要添加任何组件实现相应的功能。只有逻辑代码在里面，不需要模版。

### 泛型改造

```js
// 为函数添加泛型
function useURLLoader<T>(url: string) {
  const result = (ref < T) | (null > null);
}
// 在应用中的使用，可以定义不同的数据类型
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

// 免费猫图片的 API  https://api.thecatapi.com/v1/images/search?limit=1
const { result, loading, loaded } = useURLLoader<CatResult[]>('https://api.thecatapi.com/v1/images/search?limit=1')
```

### defineComponent 包裹组件(使用它支持 vue2 的写法,里面的值都具有响应式)

```js
// const component = {
//   name: "HelloWorld",
//   props: {
//     msg: String,
//   },
//   // setup//没有使用defineComponet没提示
// };
// export default component;
// 正确做法
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup(props, context) {
    console.log(props.msg); //这里可以自动推论出上面的msg
    console.log(context.emit); //context是上下文对象
    console.log(context.attrs);
    console.log(context.slots);
  },
});
```
