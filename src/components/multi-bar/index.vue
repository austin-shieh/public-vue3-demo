<template>
  <echarts :option="option" />
</template>

<script setup lang="ts">
import { reactive, defineProps } from "vue";

const props = defineProps({
  xData: Array,
  list: Array,
  unit: String,
});

const unit = props.unit || "亿";

const chartOption = {
  grid: {
    top: 30,
    bottom: 30,
    left: 60,
  },
  xAxis: {
    type: "category",
    data: props.xData || ["东区", "西区", "南区", "北区"],
  },
  yAxis: {
    name: unit,
    type: "value",
    nameTextStyle: {
      padding: [0, 25, 0, 0],
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  series: [
    {
      name: "2020年",
      type: "bar",
      data: [18203, 23489, 29034, 104970],
    },
    {
      name: "2021年",
      type: "bar",
      data: [19325, 23438, 31000, 121594],
    },
  ],
};

const option = reactive(chartOption);
</script>

<style lang="stylus" scoped>
.echarts
  width 100%
  height 100%
</style>
