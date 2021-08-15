<template>
  <basic-page>
    <div>
      <button @click="onBtnClicked">SETTING</button>
    </div>
  </basic-page>
</template>

<script lang='ts'>
import BasicPage from "./BasicPage.vue";
import { userInfoStore } from "/@/services/Storage/UserStore";

function onBtnClicked() {}

export default {
  setup() {
    return {
      onBtnClicked,
      userInfoStore,
    };
  },

  components: {
    BasicPage,
  },
};
</script>