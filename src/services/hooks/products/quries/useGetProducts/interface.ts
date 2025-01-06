export interface IProductsListRes {
  data: ItemProducts[]; 
}
export interface ItemProducts {
    id: string
    image: string
    name: string
    location: string
    unitPrice: number
    sellingPrice: number
    stock: number
    type: string
    category: string
  }

  
  export interface IProductsListRes extends Array<ItemProducts> {}
