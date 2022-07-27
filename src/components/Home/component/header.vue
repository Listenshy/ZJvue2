<template>
  <div>
    <h2>监控框架</h2>

    <el-dropdown>
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>退出</el-dropdown-item>
        <el-dropdown-item>修改密码</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name,
};
</script>

<style>
h2 {
  line-height: 100%;
  float: left;
  margin-left: 47%;
  /* text-align: center; */
}
.el-dropdown {
  float: right;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
