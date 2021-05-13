<template>
  <div id="echarts" ref="myEchart"></div>
</template>

<script lang="ts" setup>
import * as echarts from "echarts";
import { debounce } from "@/utils/index";
import {
  defineProps,
  onMounted,
  watch,
  ref,
  nextTick,
  reactive,
  onBeforeUnmount,
} from "@vue/runtime-core";

let myChart: any;
let resizeChart: Function;
const myEchart = ref<HTMLElement>();

const setOption = () => {
  myChart.clear();
  myChart.setOption(props.option);
  myChart.resize();
};

const props = defineProps({
  type: String,
  option: {
    type: Object,
    default: () => {
      return {};
    },
  },
  handleClick: Function,
  highlight: Object,
});

const option = reactive(props.option);

watch(
  option,
  () => {
    nextTick(() => {
      setOption();
    });
  },
  {
    deep: true,
    immediate: true,
  }
);

onMounted(() => {
  return {
    myEchart,
  };
});

onMounted(() => {
  myChart = echarts.init(myEchart.value);
  resizeChart = debounce(() => {
    myChart.resize();
  }, 100);
  window.addEventListener("resize", resizeChart);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeChart);
});
</script>

<style lang="stylus" scoped>
#echarts
  width 100%
  height 100%
</style>
