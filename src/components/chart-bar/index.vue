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
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
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
  series: [
    {
      barWidth: 23,
      data: props.list || [12, 65, 44, 23],
      type: "bar",
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
