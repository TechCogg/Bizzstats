import { CalendarDays, Bell, History, Settings, Wallet, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Header() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold">Jaegar Resto</h1>
          <p className="text-sm text-gray-500">Tuesday, 2 Feb 2021</p>
        </div>
        
        <div className="flex items-center gap-7">
        <p className="text-sm text-gray-500">Select Location:</p>
          <Select defaultValue="candies">
            <SelectTrigger className="w-[250px] bg-blue-600 text-white">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="candies">Candies Restaurant (BL0001)</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-lg">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-lg">
              <History className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-lg">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-lg">
              <Wallet className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-lg">
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-lg">
            Add Expense
          </Button>
        </div>
      </div>
    </div>
  )
}

