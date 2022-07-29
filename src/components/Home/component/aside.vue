<template>
  <div>
    <!-- default-active	当前激活菜单的 index -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">前端列表</span>
      </el-menu-item>
      <el-menu-item index="/console">
        <i class="el-icon-menu"></i>
        <span slot="title">前端监控报警规则</span>
      </el-menu-item>
      <el-menu-item index="/chart">
        <i class="el-icon-menu"></i>
        <span slot="title">路由三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name,
};
</script>

<style>
.el-menu {
  height: calc(100vh);
}
</style>
