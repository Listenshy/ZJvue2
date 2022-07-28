<template>
  <div>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="250px">
          <Aside />
        </el-aside>
        <el-main>
          <Main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./component/header.vue";
import Main from "./component/main.vue";
import Aside from "./component/aside.vue";
export default {
  name,
  components: {
    Header,
    Main,
    Aside,
  },
};
</script>

<style>
.el-header {
  /* background-color: #b3c0d1; */
  background-color: #666;
  color: #333;
  text-align: center;
  line-height: 80px;
  height: 80px !important;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  /* height: 100%; */
  /* height: calc(100vh); */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
