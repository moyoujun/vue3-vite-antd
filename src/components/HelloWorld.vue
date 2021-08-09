<template>
  <h1>{{ msg }}</h1>
  <button @click="handleCountBtnClicked">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang='ts'>
import { ref } from "vue";

export default {
  setup() {
    const msg = "Hello World";
    const count = ref(1);

    const handleCountBtnClicked = () => {
      count.value = 2 * count.value;
    };

    return {
      msg,
      count,
      handleCountBtnClicked,
    };
  },
};
</script>
