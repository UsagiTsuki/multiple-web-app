<template>
  <Header />
  <div class="page-wrapper">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/templates/Header.vue";

export default defineComponent({
  components: {
    Header,
  },
});
</script>

<style src="@/assets/styles/style.scss" lang="scss"></style>

<style lang="scss">
.page-wrapper {
  width: 100vw;
  height: calc(100vh - 74px);
  max-width: 1024px;
  margin: 0 auto;
  padding: 48px 20px;
}
</style>
