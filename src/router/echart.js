// 按需引入
import * as echarts from 'echarts/core';
import {
  TitleComponent,   //標題
  TooltipComponent, //提示
  LegendComponent   //圖例
} from 'echarts/components'
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";  //渲染器

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
]);

const usePie = (element) => {
  // 初始化ECharts 圖表，傳入HTML element
  const pieChart = echarts.init(element)

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
    return pieChart.setOption(option)
  }

  // 封裝resize，RWD會使用到
  const resize = () => pieChart.resize()

  return { setOption, resize }
}

export default usePie