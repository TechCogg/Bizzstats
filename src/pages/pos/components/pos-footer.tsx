import { Phone } from 'lucide-react'

export default function BottomBar() {
  return (
    <div className="bg-white border-t p-4">
      <div className="flex items-center justify-between">
        <button className="p-2 bg-blue-600 text-white rounded-lg">
          <Phone className="h-5 w-5" />
        </button>
        
        <div className="flex items-center gap-4">
          <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="Staff"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="font-medium">Vibees : T2</div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-1" />
                Calling
              </div>
            </div>
          </div>
          
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Kajan
            <span className="ml-2 text-sm">8 items</span>
          </button>
          
          <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg">
            T9
            <span className="ml-2 text-sm">4 items</span>
          </button>
          
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
            T5
            <span className="ml-2 text-sm">2 items</span>
          </button>
        </div>
      </div>
    </div>
  )
}

