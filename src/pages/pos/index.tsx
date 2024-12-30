import Header from '@/pages/pos/components/pos-header'
import Sidebar from '@/pages/pos/components/order-sidebar'
import MainContent from '@/pages/pos/components/main-content'
import BottomBar from '@/pages/pos/components/pos-footer'
import { OrderProvider } from '@/pages/pos/context/order-context'
import "@/styles/globals.css"

export default function Page() {
  return (
    <OrderProvider>
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="rounded-lg border  bg-white overflow-hidden mb-4 ">
          <Header />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 rounded-lg border border-gray-200 bg-white overflow-hidden relative pb-20">
            <MainContent />
            <div className="absolute bottom-0 left-0 right-0">
              <BottomBar />
            </div>
          </div>
          <div className="w-full  lg:w-[400px] rounded-lg border border-gray-200 bg-white overflow-hidden">
            <Sidebar />
          </div>
        </div>
      </div>
    </OrderProvider>
  )
}

