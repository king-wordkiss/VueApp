<template>
  <div class="login">
    <h4>后台管理系统</h4>
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="loginData"
    >
      <el-form-item label="账号">
        <el-input placeholder="请输入账号" v-model="loginData.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          placeholder="请输入密码"
          v-model="loginData.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="subFun" class="sub-btn" type="primary"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive } from "vue";
import { ElMessage } from "element-plus";
import { login } from "../http/api.js";
import router from "../router/index.js";
export default {
  name: "Login",
  setup() {
    let loginData = reactive({
      name: "",
      password: "",
    });
    let subFun = () => {
      //先判断账号密码是否已填写
      if (!loginData.name || !loginData.password) {
        ElMessage.error("请先填写账号和密码");
        return;
      }

      //执行登录操作
      login(loginData).then((res) => {
        console.log(res);
        router.push("/Home");
      });
    };
    return {
      loginData,
      subFun,
    };
  },
};
</script>

<style  scoped>
.login {
  width: 300px;
  margin: 150px auto;
  border: 1px solid #efefef;
  border-radius: 10px;
  padding: 20px;
}
h4 {
  font-size: center;
}
.sub-btn {
  width: 100%;
}
</style>