<template>
  <h1>{{ msg }}</h1>
</template>

<script lang='ts'>
export default {
  setup() {
    const msg = "Login Page";
    return {
      msg,
    };
  },
};
</script>
