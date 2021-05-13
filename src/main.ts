import "./plugins/axios.ts";
import { createApp } from "vue";
import "./stylus/index.styl";
import App from "./App.vue";
import router from "./router";
import installElementPlus from "./plugins/element";
import Panel from "./components/panel/index.vue";
import Echarts from "./components/echarts/index.vue";
import CustPie from "./components/cust-pie/index.vue";
import ChartBar from "./components/chart-bar/index.vue";
import CurveLine from "./components/curve-line/index.vue";
import MultiBar from "./components/multi-bar/index.vue";
import HoriBar from "./components/hori-bar/index.vue";
import ChartRadar from "./components/chart-radar/index.vue";

const app: any = createApp(App);

installElementPlus(app);
app
  .use(router)
  .component("panel", Panel)
  .component("echarts", Echarts)
  .component("cust-pie", CustPie)
  .component("curve-line", CurveLine)
  .component("chart-bar", ChartBar)
  .component("multi-bar", MultiBar)
  .component("hori-bar", HoriBar)
  .component("chart-radar", ChartRadar)
  .mount("#app");
