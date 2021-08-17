<template>
  <basic-page>
    <div class="chart-board">
      <div class="chart-demo" id="chart-demo"></div>
      <div class="chart-demo" id="chart-pie-demo"></div>
    </div>
  </basic-page>
</template>

<script lang='ts'>
import BasicPage from "./BasicPage.vue";
import { userInfoStore } from "/@/services/Storage/UserStore";
import * as echarts from "echarts";
import { onMounted, onUnmounted } from "vue";

export default {
  name: "echartsBox",
  setup() {
    /// 声明定义一下echart
    let echart = echarts;

    onMounted(() => {
      initChart();
      initChartPie();
    });

    onUnmounted(() => {
      echart.dispose;
    });

    // 基础配置一下Echarts
    function initChart() {
      let chart = echart.init(document.getElementById("chart-demo"));
      // 把配置和数据放这里
      chart.setOption({
        xAxis: {
          type: "category",
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
        },
        tooltip: {
          trigger: "axis",
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [
              820, 932, 901, 934, 1290, 1330, 1320, 801, 102, 230, 4321, 4129,
            ],
            type: "line",
            smooth: true,
          },
        ],
      });
    }

    function initChartPie() {
      let chart = echart.init(document.getElementById("chart-pie-demo"));
      chart.setOption({
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            data: [
              { value: 23.5, name: "视频广告" },
              { value: 27.4, name: "联盟广告" },
              { value: 31.0, name: "邮件营销" },
              { value: 33.5, name: "直接访问" },
              { value: 40.0, name: "搜索引擎" },
            ],
          },
        ],
      });
    }
    return { initChart };
  },
  components: {
    BasicPage,
  },
};
</script>
<style scoped>
.chart-board {
  display: flex;
  flex-wrap: wrap;
}

.chart-demo {
  height: 500px;
  width: 500px;
}
</style>