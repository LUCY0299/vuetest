// 按需引入
import * as echarts from 'echarts/core';
import {
  TitleComponent,   //標題
  TooltipComponent, //提示
  LegendComponent,  //圖例
  GridComponent
} from 'echarts/components'
import { PieChart, BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";  //渲染器

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  PieChart,
  BarChart,
  CanvasRenderer,
]);
//ChartPage圓餅圖
const usePie = (element) => {
  const pieChart = echarts.init(element)  // 初始化ECharts 圖表，傳入HTML element
  // 封裝相關參數依需求訂製
  const setOption = data => {
    const option = {
      title: {
        text: '哆啦A夢人氣角色',
        subtext: '人氣角色統計',
        left: 'center',
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '喜歡比例',
          type: 'pie',
          radius: '50%',
          data: data
        }
      ]
    }
    pieChart.setOption(option)
  }
  // 封裝resize，RWD會使用到
  const resize = () => pieChart.resize()
  return { setOption, resize }
}
//BarChart直條圖
const useBar = (element) => {
  console.log("初始化柱狀圖", element);
  
  const barChart = echarts.init(element);

  const setOption = (categories, seriesData) => {
    const option = {
      tooltip: {},
      legend: {
        data: ['停車位']
      },
      xAxis: {
        type: 'category',
        data: categories,
      },
      yAxis: {
        type: 'value',
      },
      series: [{
        name: '停車位',
        type: 'bar',
        data: seriesData,
      }],
    };
    barChart.setOption(option);
  };
  const resize = () => barChart.resize();
  return { setOption, resize };
};
//BarChart直條圖2
const useHotelBar = (element) => {
  const barChart = echarts.init(element);

  const setOption = (seriesData, categories) => {
    // 注意，参数的顺序改为与 setOption 调用一致
    const option = {
      tooltip: {},
      legend: {
        data: ['房間數']
      },
      xAxis: {
        type: 'value', // X轴为数值轴
        boundaryGap: true // 为了让条形完全显示，设置boundaryGap为true
      },
      yAxis: {
        type: 'category', // Y轴为类别轴
        data: categories // 类别数据，这里是旅宿名称
      },
      series: [{
        name: '房間數',
        type: 'bar', // 指定图表类型为柱状图
        data: seriesData, // 数据
        barWidth: '60%' // 柱子宽度
      }],
    };
    barChart.setOption(option);
  };

  const resize = () => barChart.resize();
  return { setOption,resize };
};


export {usePie, useBar, useHotelBar} 