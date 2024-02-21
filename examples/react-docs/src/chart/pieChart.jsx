import { ChartPie } from '@opentiny/react'
import { useState } from 'react'

// 在这里导入组件，进行 api 调试
function App() {
  const [newTheme, setNewTheme] = useState(null)
  const chartData = {
    columns: ['日期', '余额', '年龄'],
    rows: [
      { 日期: '1-1', 余额: 1430, 年龄: 300 },
      { 日期: '2', 余额: 1223, 年龄: 6 },
      { 日期: '3', 余额: 2123, 年龄: 90 },
      { 日期: '4', 余额: 2234, 年龄: 1200 },
      { 日期: '5', 余额: 3123, 年龄: 1500 },
      { 日期: '6', 余额: 3456, 年龄: 2000 }
    ]
  }

  const [chartSettings1, setChartSettings1] = useState({})
  const chartSettings = {
    roseType: 'radius'
  }
  const chartSettings3 = {
    level: [
      ['1/1', '2', '3'],
      ['4', '5']
    ]
  }
  const chartSettings4 = {
    radius: 10,
    offsetY: 300
  }
  return (
    <div className="app">
      <ChartPie data={chartData} settings={chartSettings1} theme={newTheme}></ChartPie>
      <ChartPie data={chartData} settings={chartSettings} theme={newTheme}></ChartPie>
      <ChartPie data={chartData} settings={chartSettings3} theme={newTheme}></ChartPie>
      <ChartPie data={chartData} settings={chartSettings4} theme={newTheme}></ChartPie>
    </div>
  )
}

export default App
