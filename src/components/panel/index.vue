<template>
  <div class="panel">
    <div class="panel-header">
      <div class="panel-title">{{ title }}</div>
      <slot name="panel-header" />
    </div>
    <div class="panel-body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps({
  title: String,
});
</script>

<style lang="stylus" scoped>
.panel
  width 100%
  height 100%
  display flex
  flex-direction column
  background #fff
  border-radius 10px
.panel-header
  height 15%
  display flex
  justify-content space-between
  align-items center
  padding 0 4%
  box-sizing border-box
.panel-title
  font-size 100%
  font-weight 600
.panel-body
  flex 1
  min-width 0
  min-height 0
  padding 3%
  box-sizing border-box
</style>
