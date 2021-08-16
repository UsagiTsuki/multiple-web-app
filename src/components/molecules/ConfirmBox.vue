<template>
  <input
    type="text"
    :value="value"
    :isFocus="isFocus"
    @input="$emit('update:value', $event.target.value)"
    maxlength="1"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: String,
    isFocus: String,
  },
  setup(props) {
    // console.info(props);
  },
});
</script>

<style lang="scss">
input {
  width: 50px;
  height: 50px;
  text-align: center;
  padding: 0.4rem;
  border: 1px solid #7f7f7f;
}
</style>
