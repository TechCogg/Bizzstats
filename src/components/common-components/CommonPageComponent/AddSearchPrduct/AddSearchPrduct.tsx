"use client"

import { useState, useEffect } from "react"
import { Plus, X, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GetProductsList } from "@/services/hooks/products"
import type { ItemProducts } from "@/services/hooks/products/quries/useGetProducts/interface"
import Link from "next/link"

interface SelectedProduct extends ItemProducts {
  quantity: number
  unitPrice: number
  discount: number
  discountType: "fixed" | "percentage"
  priceIncTax: number
  subtotal: number
}

interface ProductSearchProps {
  onProductsChange?: (products: SelectedProduct[]) => void
}

export function ProductSearch({ onProductsChange }: ProductSearchProps) {
  const { data: productsResponse, isLoading, error } = GetProductsList()

  const products = productsResponse?.data || productsResponse || []

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([])
  const [showResults, setShowResults] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState<ItemProducts[]>([])

  useEffect(() => {
    onProductsChange?.(selectedProducts)
  }, [selectedProducts, onProductsChange])

  useEffect(() => {
    if (products && products.length > 0) {
      let updatedProducts = products

      if (searchQuery) {
        updatedProducts = updatedProducts.filter((product) =>
          Object.values(product).some((value) => String(value).toLowerCase().includes(searchQuery.toLowerCase())),
        )
      }

      setFilteredProducts(updatedProducts)
    }
  }, [products, searchQuery])

  if (error) {
    console.error("Error fetching products:", error)
  }

  const handleAddProduct = (product: ItemProducts) => {
    setSelectedProducts((prev) => {
      const existingProductIndex = prev.findIndex((p) => p.id === product.id)
      if (existingProductIndex !== -1) {
        const updatedProducts = [...prev]
        updatedProducts[existingProductIndex] = {
          ...updatedProducts[existingProductIndex],
          quantity: updatedProducts[existingProductIndex].quantity + 1,
        }
        return updatedProducts.map(calculateProductPrices)
      } else {
        return [
          ...prev,
          calculateProductPrices({
            ...product,
            quantity: 1,
            unitPrice: 0,
            discount: 0,
            discountType: "percentage",
            priceIncTax: 0,
            subtotal: 0,
          }),
        ]
      }
    })
    setSearchQuery("")
    setShowResults(false)
  }

  const handleRemoveProduct = (productId: string) => {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== productId))
  }

  const handleQuantityChange = (productId: string, change: number) => {
    setSelectedProducts((prev) =>
      prev.map((p) => {
        if (p.id === productId) {
          const newQuantity = Math.max(1, p.quantity + change)
          return calculateProductPrices({
            ...p,
            quantity: newQuantity,
          })
        }
        return p
      }),
    )
  }

  const handlePriceChange = (productId: string, field: keyof SelectedProduct, value: string) => {
    setSelectedProducts((prev) =>
      prev.map((p) => {
        if (p.id === productId) {
          const newValue = Number.parseFloat(value) || 0
          return calculateProductPrices({
            ...p,
            [field]: newValue,
          })
        }
        return p
      }),
    )
  }

  const handleDiscountTypeChange = (productId: string, discountType: "fixed" | "percentage") => {
    setSelectedProducts((prev) =>
      prev.map((p) => {
        if (p.id === productId) {
          return calculateProductPrices({
            ...p,
            discountType,
          })
        }
        return p
      }),
    )
  }

  const calculateProductPrices = (product: SelectedProduct): SelectedProduct => {
    let discountAmount = 0
    if (product.discountType === "percentage") {
      discountAmount = (product.unitPrice * product.discount) / 100
    } else {
      discountAmount = product.discount
    }

    const priceIncTax = Math.max(0, product.unitPrice - discountAmount)
    const subtotal = priceIncTax * product.quantity

    return {
      ...product,
      priceIncTax,
      subtotal,
    }
  }

  const totalItems = selectedProducts.reduce((sum, p) => sum + p.quantity, 0)
  const totalAmount = selectedProducts.reduce((sum, p) => sum + p.subtotal, 0)

  return (
    <Card className="border rounded-lg space-y-6 p-6 bg-white border-gray-200 overflow-hidden"
      style={{ borderTop: "4px solid #2563eb" }}>
      <CardContent className="pt-6">
        <div className="relative mb-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter Product name / SKU / Scan bar code"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setShowResults(true)
              }}
              className="flex-1"
            />
            <Link href="/dashboard?tab=add-product">
              <Button size="icon" className="bg-blue-500 hover:bg-blue-600 text-white">
                <Plus className="h-4 w-4" />
              </Button>
            </Link>

          </div>
          {showResults && searchQuery && (
            <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
              {isLoading ? (
                <div className="p-2 text-center">
                  <Loader2 className="h-6 w-6 animate-spin inline-block" />
                  <span className="ml-2">Loading...</span>
                </div>
              ) : error ? (
                <div className="p-2 text-center text-red-500">Error loading products</div>
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleAddProduct(product)}
                  >
                    {product.productName || "Unnamed Product"}
                  </div>
                ))
              ) : (
                <div className="p-2 text-center text-gray-500">No products found</div>
              )}
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Product</th>
                <th className="text-left p-2">Quantity</th>
                <th className="text-left p-2">Unit Price</th>
                <th className="text-left p-2">Discount</th>
                <th className="text-left p-2">Discount Type</th>
                <th className="text-left p-2">Price inc. tax</th>
                <th className="text-left p-2">Subtotal</th>
                <th className="text-left p-2"></th>
              </tr>
            </thead>
            <tbody>
              {selectedProducts.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="p-2">{product.productName}</td>
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" onClick={() => handleQuantityChange(product.id, -1)}>
                        -
                      </Button>
                      <Input
                        type="number"
                        value={product.quantity}
                        onChange={(e) =>
                          handleQuantityChange(product.id, Number.parseInt(e.target.value) - product.quantity)
                        }
                        className="w-20"
                      />
                      <Button size="sm" variant="outline" onClick={() => handleQuantityChange(product.id, 1)}>
                        +
                      </Button>
                    </div>
                  </td>
                  <td className="p-2">
                    <Input
                      type="number"
                      value={product.unitPrice}
                      onChange={(e) => handlePriceChange(product.id, "unitPrice", e.target.value)}
                      className="w-24"
                    />
                  </td>
                  <td className="p-2">
                    <Input
                      type="number"
                      value={product.discount}
                      onChange={(e) => handlePriceChange(product.id, "discount", e.target.value)}
                      className="w-24"
                    />
                  </td>
                  <td className="p-2">
                    <Select
                      value={product.discountType}
                      onValueChange={(value) => handleDiscountTypeChange(product.id, value as "fixed" | "percentage")}
                    >
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="percentage">Percentage</SelectItem>
                        <SelectItem value="fixed">Fixed</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                  <td className="p-2">${product.priceIncTax.toFixed(2)}</td>
                  <td className="p-2">${product.subtotal.toFixed(2)}</td>
                  <td className="p-2">
                    <Button size="sm" variant="ghost" onClick={() => handleRemoveProduct(product.id)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <div>Items: {totalItems}</div>
          <div>Total: ${totalAmount.toFixed(2)}</div>
        </div>
      </CardContent>
    </Card>
  )
}