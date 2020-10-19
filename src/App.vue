<template>
  <div class="container">
    <golalbal-header :user="currentUser"></golalbal-header>
    <!-- <column-list :list="list"></column-list> -->
    <form action>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <!-- @blur="validateEmail"失去焦点验证邮箱 -->
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="emailRef.val"
          @blur="validateEmail"
        />
        <div v-if="emailRef.error" class="form-text">{{emailRef.message}}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
// import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GolalbalHeader, { UserProps } from "./components/GolalbalHeader.vue";
// 准备数据
// const testData: ColumnProps[] = [
//   {
//     id: 1,
//     title: "test1的专栏",
//     description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
//     avatar:
//       "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
//   },
//   {
//     id: 2,
//     title: "test2的专栏",
//     description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧"
//     // avatar:
//     // "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
//   },
//   {
//     id: 3,
//     title: "test2的专栏",
//     description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
//     avatar:
//       "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
//   },
//   {
//     id: 4,
//     title: "test2的专栏",
//     description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
//     avatar:
//       "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
//   }
// ];
const currentUser: UserProps = {
  isLogin: true,
  name: "gengzhong"
};
// 验证电子邮箱的正则表达式
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default defineComponent({
  name: "App",
  components: {
    // ColumnList,
    GolalbalHeader
  },
  setup() {
    const emailRef = reactive({
      val: "",
      error: false,
      message: ""
    });
    // email验证方法
    const validateEmail = () => {
      if (emailRef.val.trim() === "") {
        emailRef.error = true;
        emailRef.message = "电子邮箱不能为空";
      }
      if (!emailReg.test(emailRef.val)) {
        emailRef.error = true;
        emailRef.message = "电子邮箱格式不正确";
      } else {
        emailRef.error = false;
        emailRef.message = "";
      }
    };
    return {
      // list: testData,
      currentUser,
      emailRef,
      validateEmail
    };
  }
});
</script>

<style>
</style>
