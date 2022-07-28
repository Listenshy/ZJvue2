<template>
  <div class="Box">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <div>
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="ruleForm.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>

        <el-form-item label="账号" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="ruleForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            v-model="ruleForm.checkPass"
            placeholder="确认密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即注册</el-button
          >
          <el-button type="primary" @click="login">已有账号,立即登录</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name,
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      console.log(this.ruleForm.password);
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        name: "",
        password: "",
        checkPass: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [
          { required: true, validator: validatePass, trigger: "blur" },
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      //   console.log(this.ruleForm);
      // 表单校验
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log(this.ruleForm);
          if (this.ruleForm) {
            this.$router.push("/login");
          }
        }
      });
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
body {
  /* background: url(@/assets/zijie.jpeg); */
}
.Box {
  width: 700px;
  height: 400px;
  /* background-color: white; */
  background-color: aquamarine;
  padding: 1px;
  opacity: 0.8;
  border-radius: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.demo-ruleForm {
  margin-top: 70px;
  margin-right: 100px;
}
</style>
