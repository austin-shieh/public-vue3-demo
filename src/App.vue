<template>
  <div class="root-view">
    <side-menu />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import SideMenu from "@/components/side-menu/index.vue";
</script>

<script lang="ts">
export default {
  name: "App",
};
</script>

<style lang="stylus" scoped>
.root-view
  width 100%
  height 100%
  background #f7f7f7
  box-sizing border-box
  display flex
  flex-direction column
</style>
