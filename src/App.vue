<template>
  <div>
    <a-menu :selectedKeys="current" mode="horizontal">
      <a-menu-item key="Home">
        <router-link to="home"> <HomeFilled /><span>首页</span> </router-link>
      </a-menu-item>
      <a-menu-item key="Login">
        <router-link to="login">
          <SettingFilled /><span>设置 </span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="alipay"> </a-menu-item>
    </a-menu>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { ref, watch } from "vue";
import { RouteLocationNormalizedLoaded, useRouter } from "vue-router";
import { SettingFilled, HomeFilled } from "@ant-design/icons-vue";

const current = ref(["Home"]);

function onRouteChanged(newPath: any, oldPath: any): void {
  var newValue = newPath as RouteLocationNormalizedLoaded;
  console.log(newValue.name.toString());
  current.value[0] = newValue.name.toString();
}

export default {
  name: "App",

  setup() {
    watch(useRouter().currentRoute, onRouteChanged);

    return {
      current,
    };
  },

  components: {
    HomeFilled,
    SettingFilled,
  },
};
</script>
<style>
#nav {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
