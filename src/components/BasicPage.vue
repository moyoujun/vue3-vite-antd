<template>
  <div class="site-header">
    <a-row>
      <a-col :span="12">
        <div class="hexagon-logo">
          <img src="/@/assets/hexagon.jpg" style="width: 30%" />
        </div>
      </a-col>
      <a-col :span="12">
        <div class="hexagon-logo-buttons">
          <div style="margin: 0 20px">{{ currentUser.name }}</div>
          <a-button @click="onLogoutBtnClicked">登出</a-button>
        </div>
      </a-col>
    </a-row>

    <div class="menu-container">
      <a-menu
        :selectedKeys="current"
        mode="horizontal"
        style="padding-bottom: 10px; font-size: 16px"
      >
        <a-menu-item key="Home">
          <template #icon><HomeFilled /></template>
          <router-link to="home">首页</router-link>
        </a-menu-item>
        <a-menu-item key="Setting">
          <template #icon><SettingFilled /></template>
          <router-link to="setting">设置</router-link>
        </a-menu-item>
      </a-menu>
    </div>

    <div style="border: solid green; border-width: 1px"></div>
  </div>
  <div class="site-content">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { SettingFilled, HomeFilled } from "@ant-design/icons-vue";
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { userInfoStore } from "/@/services/Storage/UserStore";

export default {
  setup() {
    const router = useRouter();
    const current = ref([""]);
    const currentUser = ref(userInfoStore.getState());

    onMounted(onHomePageMounted);

    watch(router.currentRoute, (newValue, oldValue) => {
      if (newValue.name != undefined) {
        console.log(newValue.name.toString());
        current.value[0] = newValue.name.toString();
      }
    });

    function onHomePageMounted(): void {
      let currentRoute = router.currentRoute.value;
      //
      if (currentRoute && currentRoute.name) {
        console.log(currentRoute.name.toString());
        current.value[0] = currentRoute.name.toString();
      }
    }

    function onLogoutBtnClicked(): void {
      userInfoStore.setData(null);
      router.push({ path: "login" });
    }

    return {
      current,
      currentUser,
      onLogoutBtnClicked,
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
  background-color: white;
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 999999;
}

.hexagon-logo {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 80%;
  margin: 10px 10% 15px 10%;
}

.hexagon-logo-buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  margin: 0 10%;
}

.menu-container {
  width: 90%;
  margin: 0 auto;
}

.site-content {
  position: absolute;
  top: 180px;
}
</style>
