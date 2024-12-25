import { TypeIcon as type, type LucideIcon } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string
  icon: LucideIcon
  className?: string
}

export function MetricCard({ title, value, icon: Icon, className }: MetricCardProps) {
  return (
    <div className={`p-6 rounded-lg ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-white/50">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-medium">{title}</p>
            <p className="text-lg font-semibold mt-1">{value}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

