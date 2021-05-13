<template>
  <div class="home">
    <Header />
    <div class="page-view">
      <el-row>
        <el-col>
          <CustPie />
        </el-col>
        <el-col>
          <ChartBar />
        </el-col>
        <el-col>
          <ChartRadar />
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <HoriBar />
        </el-col>
        <el-col>
          <CurveLine />
        </el-col>
        <el-col>
          <MultiBar />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/header/index.vue";
import CustPie from "./cust-pie.vue";
import ChartBar from "./chart-bar.vue";
import ChartRadar from "./radar.vue";
import CurveLine from "./curve-line.vue";
import MultiBar from "./multi-bar.vue";
import HoriBar from "./hori-bar.vue";
</script>

<style lang="stylus" scoped>
.home
  width 100%
  height 100%
  display flex
  flex-direction column
.page-view
  display flex
  flex-direction column
  .el-row
    flex 1
    padding-bottom 1%
    box-sizing border-box
    display flex
  .el-col
    flex 1
    &:not(:last-child)
      padding-right 1%
      box-sizing border-box
</style>
