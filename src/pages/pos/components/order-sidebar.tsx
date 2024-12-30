"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  X,
  CreditCard,
  Banknote,
  WalletCards,
  Plus,
  Minus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useOrder } from "@/pages/pos/context/order-context";

const orderTypes = ["Dine In", "Take Away", "Delivery"];

export default function Sidebar() {
  const {
    orderItems,
    removeFromOrder,
    updateQuantity,
    orderType,
    setOrderType,
  } = useOrder();

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const serviceCharge = 5.0;
  const vat = subtotal * 0.04;
  const total = subtotal + serviceCharge + vat;

  return (
    <div className=" bg-white p-4">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Orders #34562</h2>
        <div className="grid grid-cols-3 gap-4">
          {orderTypes.map((type) => (
            <button
              key={type}
              onClick={() => setOrderType(type)}
              className={`py-2 px-4 rounded-lg ${
                orderType === type ? "bg-blue-600 text-white" : "bg-gray-100"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      <ScrollArea className="flex-grow ">
      <div className="space-y-4 mb-6 max-h-[320px] ">
        {orderItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-gray-50 p-4 rounded-lg mr-2"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-blue-600">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="text-blue-600 hover:bg-gray-200 p-1 rounded"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-[20px] text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="text-blue-600 hover:bg-gray-200 p-1 rounded"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button onClick={() => removeFromOrder(item.id)}>
                <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
      </ScrollArea>

      <div className="space-y-4 mb-6 bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Discount</span>
          <span>N/A</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Service Charge</span>
          <span>£{serviceCharge.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span>£{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">VAT</span>
          <span>£{vat.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mb-6 ">
          <span className="text-xl font-semibold">Total</span>
          <span className="text-xl font-semibold">£{total.toFixed(2)}</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full h-12 rounded-lg">
            Discount
          </Button>
          <Button variant="outline" className="w-full h-12 rounded-lg">
            Staff
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Button variant="outline" className="h-12 rounded-lg">
            <div className="flex flex-col items-center">
              <CreditCard className="h-4 w-4 mb-1" />
              <span className="text-xs">Card</span>
            </div>
          </Button>
          <Button variant="outline" className="h-12 rounded-lg">
            <div className="flex flex-col items-center">
              <Banknote className="h-4 w-4 mb-1" />
              <span className="text-xs">Cash</span>
            </div>
          </Button>
          <Button variant="outline" className="h-12 rounded-lg">
            <div className="flex flex-col items-center">
              <WalletCards className="h-4 w-4 mb-1" />
              <span className="text-xs">Multiple Pay</span>
            </div>
          </Button>
          <Button variant="outline" className="h-12 rounded-lg">
            <div className="flex flex-col items-center">
              <X className="h-4 w-4 mb-1" />
              <span className="text-xs">Cancel</span>
            </div>
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-lg">
          Place Order
        </Button>
      </div>
    </div>
  );
}
