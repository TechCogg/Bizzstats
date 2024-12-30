export interface MenuItem {
    id: number
    name: string
    price: number
    image: string
    category: string
    quantity?: number
  }
  
  export interface Category {
    id: string
    name: string
    icon: string
    itemCount: string
  }
  
  export interface OrderItem {
    id: number
    name: string
    quantity: number
    price: number
    image: string
  }
  
  export interface Order {
    id: string
    items: OrderItem[]
    subtotal: number
    serviceCharge: number
    vat: number
    total: number
  }
  
  