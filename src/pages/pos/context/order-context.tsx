'use client'

import { createContext, useContext, useState } from 'react'

interface OrderItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

interface OrderContextType {
  orderItems: OrderItem[]
  addToOrder: (item: Omit<OrderItem, 'quantity'>) => void
  removeFromOrder: (itemId: number) => void
  updateQuantity: (itemId: number, quantity: number) => void
  orderType: string
  setOrderType: (type: string) => void
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [orderType, setOrderType] = useState('Dine In')

  const addToOrder = (item: Omit<OrderItem, 'quantity'>) => {
    setOrderItems(prev => {
      const existingItem = prev.find(i => i.id === item.id)
      if (existingItem) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromOrder = (itemId: number) => {
    setOrderItems(prev => prev.filter(item => item.id !== itemId))
  }

  const updateQuantity = (itemId: number, quantity: number) => {
    setOrderItems(prev => {
      if (quantity <= 0) {
        return prev.filter(item => item.id !== itemId)
      }
      return prev.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    })
  }

  return (
    <OrderContext.Provider
      value={{
        orderItems,
        addToOrder,
        removeFromOrder,
        updateQuantity,
        orderType,
        setOrderType,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder() {
  const context = useContext(OrderContext)
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider')
  }
  return context
}

