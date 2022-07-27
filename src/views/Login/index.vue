<template>
  <div class="box">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <div>
        <el-form-item label="账号" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即登录</el-button
          >
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name,
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      // 表单校验
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log(this.ruleForm);
          if (this.ruleForm) {
            this.$router.push("/");
          }
        }
      });
    },
  },
};
</script>

<style>
body {
  background: url(@/assets/zijie.jpeg);
}
.box {
  width: 700px;
  height: 300px;
  background-color: white;
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
