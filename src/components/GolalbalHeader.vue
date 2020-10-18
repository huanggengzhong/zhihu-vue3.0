<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">知乎专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">登陆</a>
      </li>
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <dropdown :title="`您好 ${user.name}`">
          <dropdown-item>
            <a class="dropdown-item" href="#">新建文章</a>
          </dropdown-item>
          <dropdown-item>
            <a class="dropdown-item" href="#">编辑资料</a>
          </dropdown-item>
          <dropdown-item>
            <a class="dropdown-item" href="#">退出登录</a>
          </dropdown-item>
        </dropdown>
        <!-- <a href="#" class="btn btn-outline-light my-2">你好 {{user.name}}</a> -->
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import Dropdown from "./Dropdown.vue";
import DropdownItem from "./DropdownItem.vue";
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: "GolalbalHeader",
  components: { Dropdown, DropdownItem },
  props: {
    user: {
      required: true,
      type: Object as PropType<UserProps>
    }
  }
});
</script>
