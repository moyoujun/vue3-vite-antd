<template>
  <div class="router-view-container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
};
</script>

<style scoped>
.router-view-container {
  color: #2c3e50;
  height: 100%;
}
</style>