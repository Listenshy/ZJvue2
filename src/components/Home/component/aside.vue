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
        <span slot="title">路由一</span>
      </el-menu-item>
      <el-menu-item index="/console">
        <i class="el-icon-menu"></i>
        <span slot="title">路由二</span>
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
  // data() {
  //   return {
  //     routes: this.$router.options.routes,
  //   };
  // },
  created() {
    this.RouteTrue();
  },
  methods: {
    RouteTrue() {
      // console.log(this.routes);
    },
  },
};
</script>

<style></style>
