'use client'

import { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      align: 'end' as const,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        drawBorder: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    }
  }
}

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const generateRandomData = (length: number) => Array.from({ length }, () => Math.random() * 300)

export function SalesChart() {
  const [timePeriod, setTimePeriod] = useState('MONTHLY')

  // Update the chart data based on the selected time period
  const getChartData = () => {
    let updatedLabels = labels
    let dataLength = 12 // Default is 12 for months

    if (timePeriod === 'DAILY') {
      updatedLabels = Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`)
      dataLength = 7
    } else if (timePeriod === 'WEEKLY') {
      updatedLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
      dataLength = 4
    } else if (timePeriod === 'YEARLY') {
      updatedLabels = ['2019', '2020', '2021', '2022', '2023']
      dataLength = 5
    }

    return {
      labels: updatedLabels,
      datasets: [
        {
          label: 'Candies Restaurant (BL0001)',
          data: generateRandomData(dataLength),
          backgroundColor: '#6F65E8',
        },
        {
          label: 'Candies Restaurant (BL0002)',
          data: generateRandomData(dataLength),
          backgroundColor: '#D2CFF8',
        }
      ],
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <h3 className="text-lg font-semibold w-full sm:w-auto text-center sm:text-left">Sales Current Financial Year</h3>
        <div className="flex flex-wrap items-center space-x-2 mt-4 sm:mt-0">
          {['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'].map((period) => (
            <button
              key={period}
              onClick={() => setTimePeriod(period)}
              className={`px-4 py-1.5 text-sm rounded-full mb-2 sm:mb-0 ${
                timePeriod === period ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Container for Chart */}
      <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]">
        <Bar options={options} data={getChartData()} />
      </div>
    </div>
  )
}
