<template>
  <div class="header">
    <div class="header-left">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        active-text-color="#1f3fcd"
        @select="handleSelect"
      >
        <template v-for="item in menuList" :key="item.code">
          <el-menu-item v-if="!item.child" :index="item.code">{{
            item.label
          }}</el-menu-item>
          <el-submenu v-else :index="item.code" :popper-append-to-body="false">
            <template #title>{{ item.label }}</template>
            <el-menu-item
              v-for="child in item.child"
              :key="child.code"
              :index="child.code"
              >{{ child.label }}</el-menu-item
            >
          </el-submenu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
const defaultMenu = [
  {
    label: "全部",
    code: "01",
  },
  {
    label: "对公",
    code: "02",
    child: [
      {
        label: "全部",
        code: "0201",
      },
      {
        label: "重大项目",
        code: "0202",
      },
      {
        label: "非重大项目",
        code: "0203",
      },
    ],
  },
  {
    label: "小企业",
    code: "03",
  },
  {
    label: "零售",
    code: "04",
  },
];

import { ref, defineProps } from "vue";
const props = defineProps({
  menu: Array,
});
const menuList: any = props.menu || defaultMenu;
const activeIndex = ref("01");
const handleSelect = (index: string) => {
  activeIndex.value = index;
};
</script>

<style lang="stylus" scoped>
.header
  width 100%
  padding-left 120px
  box-sizing border-box
  background #fff
  margin-bottom 20px
.el-menu >>> 
  border-bottom none !important
  .el-menu-item,.el-submenu__title
    font-size 18px
    font-weight 600
    color #666 !important
>>> .el-menu--popup
  height 50px
  display flex
  align-items center
  padding-right 20px
  .el-menu-item
    min-width auto
    margin-left 20px
    font-size 16px
</style>
