<template>
  <div class="site-header">
    <a-menu :selectedKeys="current" mode="horizontal">
      <a-menu-item key="Home">
        <template #icon><HomeFilled /></template>
        <router-link to="home">首页</router-link>
      </a-menu-item>
      <a-menu-item key="Login">
        <template #icon><SettingFilled /></template>
        <router-link to="login">设置</router-link>
      </a-menu-item>
      <a-menu-item key="alipay"> </a-menu-item>
    </a-menu>
  </div>
  <div class="site-content">{{ msg }}</div>
</template>

<script lang='ts'>
import { SettingFilled, HomeFilled } from "@ant-design/icons-vue";
import { onMounted, ref, watch } from "vue";
import { RouteLocationNormalizedLoaded, useRouter } from "vue-router";

const current = ref([""]);
const msg = ref("Home Page");

function onHomePageMounted(): void {
  var newValue = useRouter().currentRoute.value;
  //
  if (newValue.name != undefined) {
    console.log(newValue.name.toString());
    current.value[0] = newValue.name.toString();
  }
}

export default {
  setup() {
    onMounted(onHomePageMounted);
    return {
      current,
      msg,
    };
  },

  components: {
    HomeFilled,
    SettingFilled,
  },
};
</script>
<style scoped>
.site-header {
  background-color: #326d22;
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 999999;
}

.site-content {
  position: absolute;
  top: 50px;
  height: 2000px;
}
</style>
