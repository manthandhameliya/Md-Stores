"use client";
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import Cartpage from './cartpage';
import { Button } from '@/components/ui/button';

function Cart() {
  const cartArray = useSelector((state) => state.cart);

  const total = cartArray.reduce((total, arr) => {
    const discountedPrice = arr.discount > 0 ? arr.price - (arr.price * arr.discount) / 100 : arr.price;
    return total + discountedPrice * arr.qty;
  }, 0).toFixed(2);

  return (
    <div className="mt-32 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 mb-10 ">
      {/* Cart Items */}
      <div className="flex-1">
        <Cartpage />
      </div>

      {/* Order Summary */}
      <div className="bg-white shadow-lg p-6 w-full  border rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        
        <div className="space-y-3">
          <div className="flex justify-between text-gray-600">
            <p>Subtotal</p>
            <p className="font-medium">${total}</p>
          </div>

          <div className="flex justify-between text-gray-600">
            <p>Discount (-20%)</p>
            <p className="text-red-500">-${(total * 0).toFixed(2)}</p>
          </div>

          <div className="flex justify-between text-gray-600">
            <p>Delivery Fee</p>
            <p>$0</p>
          </div>

          <div className="border-t pt-3 flex justify-between text-lg font-bold">
            <p>Total</p>
            <p>${total}</p>
          </div>

          {/* Promo Code */}
          <div className="flex items-center gap-3 mt-3">
            <input
              className="h-10 flex-1 bg-gray-100 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              type="text"
              placeholder="Enter promo code"
            />
            <Button className="px-5 py-2 rounded-lg bg-primary text-white">Apply</Button>
          </div>
        </div>

        {/* Checkout Button */}
        <button className="w-full mt-4 py-3 rounded-lg bg-black text-white font-medium text-lg transition hover:bg-gray-900">
          Go to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
