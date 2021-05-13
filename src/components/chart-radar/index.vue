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

const chartOption = {
  tooltip: {
    trigger: "axis",
  },
  radar: [
    {
      indicator: [
        { text: "品牌", max: 100 },
        { text: "内容", max: 100 },
        { text: "可用性", max: 100 },
        { text: "功能", max: 100 },
      ],
      center: ["50%", "50%"],
      radius: 75,
    },
  ],
  series: [
    {
      type: "radar",
      tooltip: {
        trigger: "item",
      },
      areaStyle: {},
      data: [
        {
          value: [60, 73, 85, 40],
          name: "某软件",
        },
      ],
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
