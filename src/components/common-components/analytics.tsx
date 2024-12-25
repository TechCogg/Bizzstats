"use client"

import { Line, Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

export function RatingChart() {
  const data = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Rating',
        data: [3.93, 4.61, 4.71, 4.12, 4.5, 4.82],
        borderColor: '#6366f1',
        backgroundColor: '#6366f1',
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 3,
        max: 5,
        ticks: {
          stepSize: 0.5,
        },
        grid: {
          display: true,
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  }

  return (
    <div className="bg-white p-6 rounded-lg">
      <h3 className="font-semibold mb-4">Website Overview Rating</h3>
      <div className="h-[250px] relative">
        <Line data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center bg-white/90 p-2 rounded-lg shadow-sm">
            <p className="text-2xl font-bold">{data.datasets[0].data[data.datasets[0].data.length - 1].toFixed(2)}</p>
            <p className="text-sm text-gray-500">Latest Rating</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SessionsChart() {
  const data = {
    labels: ['Mobile', 'Desktop'],
    datasets: [
      {
        data: [50, 50],
        backgroundColor: ['#6366f1', '#e2e8f0'],
        hoverBackgroundColor: ['#4f46e5', '#cbd5e1'],
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '65%',
  }

  return (
    <div className="bg-white p-6 rounded-lg ">
      <h3 className="font-semibold mb-4 ">Mobile Sessions</h3>
      <div className="h-[250px] relative">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <p className="text-2xl font-bold">50  %</p>
            <p className="text-sm text-gray-500">Mobile</p>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>The percentage of users who use</p>
        <p>mobile devices compared to others</p>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
          <span className="text-sm">Mobile</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-gray-200 mr-2"></div>
          <span className="text-sm">Desktop</span>
        </div>
      </div>
    </div>
  )
}

