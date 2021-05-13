<template>
  <div class="cust-pie">
    <div class="chart">
      <echarts :option="option" />
    </div>
    <div class="list-container">
      <div class="item-list">
        <div
          v-for="(item, key) in itemList"
          :key="key"
          @click="handleClick(key)"
          :class="{ item: true, active: active === key }"
        >
          <div class="dot">●</div>
          <div class="name">{{ item.name }}</div>
          <div class="value">{{ item.value }}{{ unit }}</div>
          <div class="percent">{{ (item.percent * 100).toFixed(2) }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { COLORS } from "@/config/constant";
import { ref, reactive, defineProps } from "vue";

const props = defineProps({
  list: Array,
  unit: String,
});

const unit = props.unit || "亿";
let active = ref();

const handleClick = (index: number) => {
  active.value = index;
};

const itemList = [
  { name: "东区", value: 45, percent: 0.45452 },
  { name: "南区", value: 77, percent: 0.77121 },
  { name: "西区", value: 33, percent: 0.33454 },
  { name: "北区", value: 55, percent: 0.55477 },
];


const dataList = itemList.map((item, index) => {
  return {
    ...item,
    itemStyle: {
      color: COLORS[index],
    },
  };
});

const chartOption = {
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: "70%",
      label: {
        normal: {
          position: "inner",
          show: false,
        },
      },
      data: dataList,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

const option = reactive(chartOption);
</script>

<style lang="stylus" scoped>
.cust-pie
  width 100%
  height 100%
  display flex
  align-items center
  .chart
    flex 1
    height 100%
  .list-container
    flex 1
    height 200px
    overflow auto
    display flex
    align-items center
  .item-list
    margin 20px 0
  .item
    display flex
    cursor pointer
    &:not(:last-child)
      margin-bottom 10px
    &.active
      font-weight 600
    .name, .value
      margin-right 15px
    .dot
      margin-right 10px
      color $MKCyan
    .percent
      color $MKCyan
</style>
