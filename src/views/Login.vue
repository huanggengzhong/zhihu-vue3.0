<template>
  <!-- <column-list :list="list"></column-list> -->
  <form action>
    login
    <!-- @blur="validateEmail"失去焦点验证邮箱 -->
    <!-- <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
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
    </div>-->
  </form>
</template>
<script>
import { defineComponent, reactive } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
// 验证电子邮箱的正则表达式
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default {
  // setup() {
  //   const emailRef = reactive({
  //     val: "",
  //     error: false,
  //     message: ""
  //   });
  //   // email验证方法
  //   const validateEmail = () => {
  //     if (emailRef.val.trim() === "") {
  //       emailRef.error = true;
  //       emailRef.message = "电子邮箱不能为空";
  //     }
  //     if (!emailReg.test(emailRef.val)) {
  //       emailRef.error = true;
  //       emailRef.message = "电子邮箱格式不正确";
  //     } else {
  //       emailRef.error = false;
  //       emailRef.message = "";
  //     }
  //   };
  //   return {
  //     // list: testData,
  //     currentUser,
  //     emailRef,
  //     validateEmail
  //   };
  // }
};
</script>
