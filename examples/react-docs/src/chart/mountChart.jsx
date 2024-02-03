import { ChartMount } from '@opentiny/react'
import { useState } from 'react'

// 在这里导入组件，进行 api 调试
function App() {
  const [newTheme] = useState(null)
  const chartData = {
    columns: ['日期', '余额', '年龄'],
    rows: [
      { 日期: '1-1', 余额: 123, 年龄: 300 },
      { 日期: '2', 余额: 1223, 年龄: 6 },
      { 日期: '3', 余额: 2123, 年龄: 90 },
      { 日期: '4', 余额: 4123, 年龄: 1200 },
      { 日期: '5', 余额: 3123, 年龄: 1500 },
      { 日期: '6', 余额: 7123, 年龄: 2000 }
    ]
  }

  const [chartSettings1] = useState({})
  const chartSettings2 = {
    symbolTypeIndex: 1
  }
  const chartSettings3 = {
    symbolTypeIndex: 2
  }
  return (
    <div className="app">
      <ChartMount data={chartData} settings={chartSettings1} theme={newTheme}></ChartMount>
      <ChartMount data={chartData} settings={chartSettings2} theme={newTheme}></ChartMount>
      <ChartMount data={chartData} settings={chartSettings3} theme={newTheme}></ChartMount>
    </div>
  )
}

export default App
