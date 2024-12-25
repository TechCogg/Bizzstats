'use client'

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

const data = {
  labels,
  datasets: [
    {
      label: 'Candies Restaurant (BL0001)',
      data: labels.map(() => Math.random() * 300),
      backgroundColor: 'rgba(99, 102, 241, 0.8)',
    },
    {
      label: 'Candies Restaurant (BL0002)',
      data: labels.map(() => Math.random() * 300),
      backgroundColor: 'rgba(99, 102, 241, 0.4)',
    }
  ],
}

export function SalesChart() {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <h3 className="text-lg font-semibold w-full sm:w-auto text-center sm:text-left">Sales Current Financial Year</h3>
        <div className="flex flex-wrap items-center space-x-2 mt-4 sm:mt-0">
          <button className="px-4 py-1.5 text-sm rounded-full bg-gray-100 hover:bg-gray-200 mb-2 sm:mb-0">DAILY</button>
          <button className="px-4 py-1.5 text-sm rounded-full bg-gray-100 hover:bg-gray-200 mb-2 sm:mb-0">WEEKLY</button>
          <button className="px-4 py-1.5 text-sm rounded-full bg-blue-600 text-white mb-2 sm:mb-0">MONTHLY</button>
          <button className="px-4 py-1.5 text-sm rounded-full bg-gray-100 hover:bg-gray-200">YEARLY</button>
        </div>
      </div>

      {/* Responsive Container for Chart */}
      <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]">
        <Bar options={options} data={data} />
      </div>
    </div>
  )
}
