'use client'

import { useState, useEffect } from 'react'
import { Plus, Minus, User, Search, Info } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useOrder } from '@/pages/pos/context/order-context'


const categories = [
  { id: 'all', name: 'All', icon: '⋮⋮', items: 59 },
  { id: 'breakfast', name: 'Breakfast', icon: '☕', items: 13 },
  { id: 'starters', name: 'Starters', icon: '🍲', items: 15 },
  { id: 'main', name: 'Main Course', icon: '🍽️', items: 20 },
  { id: 'dessert', name: 'Dessert', icon: '🧁', items: 6 },
  { id: 'drinks', name: 'Drinks', icon: '🥤', items: 5 },
]

const menuItems = [
  {
    id: 1,
    name: 'Pancakes',
    price: 17.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'breakfast'
  },
  {
    id: 2,
    name: 'Omelet',
    price: 17.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'breakfast'
  },
  {
    id: 3,
    name: 'Egg with Toast',
    price: 17.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'breakfast'
  },
  {
    id: 4,
    name: 'Cheese Wrap',
    price: 17.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'main'
  },
  {
    id: 5,
    name: 'Sandwich',
    price: 17.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'main'
  },
  {
    id: 6,
    name: 'Coffee',
    price: 17.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'drinks'
  },
  {
    id: 7,
    name: 'Waffles',
    price: 17.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'breakfast'
  },
  {
    id: 8,
    name: 'French Toast',
    price: 17.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'breakfast'
  },
]

export default function MainContent() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const { orderItems, addToOrder, updateQuantity } = useOrder()
  const [quantities, setQuantities] = useState<Record<number, number>>({})
  const [isSubscriber, setIsSubscriber] = useState(false)
  const [isKitchenOrder, setIsKitchenOrder] = useState(false)

  // Sync quantities with order items
  useEffect(() => {
    const newQuantities: Record<number, number> = {}
    orderItems.forEach(item => {
      newQuantities[item.id] = item.quantity
    })
    setQuantities(newQuantities)
  }, [orderItems])

  const filteredItems = menuItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  )

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(itemId, newQuantity)
    } else {
      updateQuantity(itemId, 0)
    }
  }

  return (
    <div className="p-6">
      <div className="grid gap-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-3 flex gap-2">
            <div className="relative flex-1">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select className="w-full pl-10 pr-8 py-2 border rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Walk-in Customer</option>
              </select>
            </div>
            <Button size="icon" variant="outline" className="border-blue-600 text-blue-600 rounded-lg">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="md:col-span-4 flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input className="pl-10" placeholder="Enter Product Name / SKU /Scan Bar Code" />
            </div>
            <Button size="icon" variant="outline" className="border-blue-600 text-blue-600 rounded-lg">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="md:col-span-3 flex items-center gap-2">
            <div className="relative flex-1">
              <select className="w-full py-2 px-3 border rounded-lg appearance-none bg-white">
                <option>Select Service staff</option>
              </select>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="flex flex-col items-start ">
              <div className="flex items-center gap-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isSubscriber}
                    onChange={(e) => setIsSubscriber(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm">Subscriber?</span>
                </label>
                <Button size="icon" variant="ghost" className="text-blue-600 h-5 w-5">
                  <Info className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isKitchenOrder}
                    onChange={(e) => setIsKitchenOrder(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm">Kitchen Order</span>
                </label>
                <Button size="icon" variant="ghost" className="text-blue-600 h-5 w-5">
                  <Info className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <select className="w-full py-2 px-3 border rounded-lg appearance-none bg-white">
                <option>Select types of Service</option>
              </select>
            </div>
            <Button size="icon" variant="ghost" className="text-blue-600 rounded-lg">
              <Info className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex gap-2">
            <div className="relative flex-1">
              <select className="w-full py-2 px-3 border rounded-lg appearance-none bg-white">
                <option>Select Table</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Choose Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-lg border text-center ${
                selectedCategory === category.id ? 'bg-blue-600 text-white' : 'bg-white'
              }`}
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="font-medium">{category.name}</div>
              <div className="text-sm text-gray-500">{category.items} items</div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg p-4 border">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="font-medium mb-2">{item.name}</h3>
            <p className="text-blue-600 font-medium mb-4">${item.price}</p>
            {quantities[item.id] ? (
              <div className="flex items-center justify-between bg-gray-100 rounded-lg p-2">
                <button
                  onClick={() => handleQuantityChange(item.id, (quantities[item.id] || 0) - 1)}
                  className="text-blue-600 hover:bg-gray-200 p-1 rounded"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="font-medium">{quantities[item.id]}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, (quantities[item.id] || 0) + 1)}
                  className="text-blue-600 hover:bg-gray-200 p-1 rounded"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg"
                onClick={() => {
                  addToOrder(item)
                }}
              >
                Add to Dish
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

