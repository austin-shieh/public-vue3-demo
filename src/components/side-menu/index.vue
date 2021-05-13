<template>
  <div class="side-menu">
    <el-popover
      placement="bottom"
      trigger="click"
      popper-class="side-menu-popover"
      :show-arrow="false"
    >
      <el-scrollbar :height="scrollBarHeight">
        <el-menu
          :default-active="computedValue.activeIndex"
          :router="true"
        >
          <template v-for="item in sideMenuList" :key="item.code">
            <el-menu-item v-if="!item.child" :index="item.route">
              <i :class="`el-icon-${item.icon}`" class="menu-icon"></i>
              {{ item.label }}</el-menu-item
            >
            <el-submenu
              v-else
              :index="item.route"
              :popper-append-to-body="false"
            >
              <template #title
                ><i :class="`el-icon-${item.icon}`" class="menu-icon"></i
                >{{ item.label }}</template
              >
              <el-menu-item
                v-for="child in item.child"
                :key="child.route"
                :index="child.route"
                ><i :class="`el-icon-${child.icon}`" class="menu-icon"></i
                >{{ child.label }}</el-menu-item
              >
            </el-submenu>
          </template>
        </el-menu>
      </el-scrollbar>
      <template #reference>
        <div class="side-menu-container">
          <i class="el-icon-s-operation menu-icon-main"></i>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
const sideMenuList = [
  {
    label: "智慧管理主页",
    route: "/",
    icon: "s-home",
  },
  {
    label: "开门红",
    route: "/openDoor",
    icon: "s-opportunity",
  },
  {
    label: "回收分析",
    route: "/analysis",
    icon: "s-shop",
  },
  {
    label: "资产分析",
    route: "/property",
    icon: "s-finance",
  },
  {
    label: "项目管理分析",
    route: "/project",
    icon: "s-order",
  },
  {
    label: "费用额度",
    route: "/fee",
    icon: "s-data",
  },
  {
    label: "队伍监控",
    icon: "s-help",
    route: "team",
    child: [
      {
        label: "队伍结构监控",
        route: "/team",
        icon: "s-platform",
      },
      {
        label: "产能监控",
        route: "/capacity",
        icon: "s-open",
      },
    ],
  },
  {
    label: "审批质量",
    route: "/approve",
    icon: "s-check",
  },
  {
    label: "KPI管理",
    icon: "s-cooperation",
    route: "kpi",
    child: [
      {
        label: "KPI分析",
        route: "/anaysis-kpi",
        icon: "s-platform",
      },
      {
        label: "KPI监控",
        route: "/monitor-kpi",
        icon: "video-camera-solid",
      },
    ],
  },
  {
    label: "智慧督导",
    icon: "s-management",
    route: "dudao",
    child: [
      {
        label: "客户分析",
        route: "/customer",
        icon: "s-custom",
      },
      {
        label: "打包分析",
        route: "/package",
        icon: "s-cooperation",
      },
    ],
  },
  {
    label: "生态平台",
    icon: "upload",
    route: "shengtai",
    child: [
      {
        label: "投资人分析",
        route: "/investor",
        icon: "s-marketing",
      },
      {
        label: "一户一策",
        route: "/home",
        icon: "s-release",
      },
    ],
  },
  {
    label: "生态运营分析",
    route: "/operation",
    icon: "s-comment",
  },
  {
    label: "评估分析",
    route: "/estimate",
    icon: "s-platform",
  },
];

import { defineProps, computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  menu: Array,
});

const scrollBarHeight = window.innerHeight * 0.8 + "px";

const router = useRouter();
const computedValue = computed(() => {
  const { fullPath } = router.currentRoute.value;
  const activeIndex = fullPath;
  return { activeIndex };
});
</script>

<style lang="stylus" scoped>
.side-menu-container
  width 50px
  height 55px
  position fixed
  left 30px
  top 0
  z-index 999
  border-radius 0 0 45% 45%
  background $MKCyan
  overflow hidden
  display flex
  align-items center
  justify-content center
  box-shadow 0 0 15px 3px $MKCyan
  cursor pointer
.menu-icon-main
  font-size 24px
  color #fff
.el-menu >>>
  margin-top 10px
  border none !important
  background $MKCyan
  .el-menu-item,.el-submenu__title
    font-size 18px
    font-weight 600
    color #fff !important
    text-indent 20px
  .el-submenu__title .menu-icon
    margin-right 10px
  .el-menu--inline
    background $MKCyan
  .is-active
    background-color rgba(0,0,0,0.3) !important
  .el-submenu__icon-arrow
    color #fff
    text-indent 0
  .menu-icon
    text-indent 0
    color #fff
    font-size 18px
</style>
