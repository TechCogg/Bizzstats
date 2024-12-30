import { MetricCard } from '@/components/common-components/metric-card'
import { SalesChart } from '@/components/common-components/sales-chart'
import { ActivityFeed } from '@/components/common-components/activity-feed'
import { RatingChart, SessionsChart } from '@/components/common-components/analytics'
import { DollarSign, ShoppingCart, ArrowLeftRight, FileText, Settings, Bell, Calculator, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import "@/styles/globals.css"
export default function DashboardContent() {
  return (
    <div className="p-0 sm:p-4 md:p-6 lg:p-1">
      {/* Dashboard Header */}
   

      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 space-y-3 sm:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold">Welcome, Emilia!</h1>
          <p className="text-sm sm:text-base text-gray-500">Today is a great day to conduct financial activities.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <select className="px-2 py-1 sm:px-4 sm:py-2 text-sm border rounded-md bg-white">
            <option>Select Location</option>
          </select>
          <Button variant="outline" size="sm" className="bg-white text-sm">
            How To Guide
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Section: Metrics and Sales Chart */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { title: "Net", value: "$20.00", icon: DollarSign, className: "bg-pink-300" },
              { title: "Total Sale", value: "$30.00", icon: ShoppingCart, className: "bg-purple-300" },
              { title: "Total Sell Return", value: "$210.00", icon: ArrowLeftRight, className: "bg-blue-300" },
              { title: "Invoice Due", value: "$120.00", icon: FileText, className: "bg-emerald-300" },
              { title: "Total Purchase", value: "$123.00", icon: ShoppingCart, className: "bg-orange-300" },
              { title: "Purchase Due", value: "$122.00", icon: FileText, className: "bg-yellow-300" },
              { title: "Total Purchase Return", value: "$234.00", icon: ArrowLeftRight, className: "bg-green-300" },
              { title: "Expense", value: "$1234.00", icon: FileText, className: "bg-violet-300" },
            ].map((metric, index) => (
              <MetricCard
                key={index}
                title={metric.title}
                value={metric.value}
                icon={metric.icon}
                className={metric.className}
              />
            ))}
          </div>

          {/* Sales Chart */}
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
            <SalesChart />
          </div>
        </div>

        {/* Right Section: Charts */}
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
            <ActivityFeed />
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
            <RatingChart />
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
            <SessionsChart />
          </div>
        </div>
      </div>
    </div>
  );
}

