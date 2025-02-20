import { AiFillDelete } from "react-icons/ai";

import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus } from "lucide-react";
import { addition, delItem, subraction } from "../Redux/features/cartSlice";

function Cartpage() {
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      {cartItem.length >= 1 &&
        cartItem.map((items, i) => {
          return (
            <div
              key={i}
              className="flex lg:w-[650px] p-4 rounded-[16px] border justify-between mb-5"
            >
              <div className="flex">
                <Image
                  src={items.image[0]}
                  alt={items.title}
                  width={100}
                  height={100}
                ></Image>
                <div className="flex flex-col ml-3">
                  <span>Size: {items.size[0]}</span>
                  <span>Color: {items.color[0]}</span>
                  <p className="font-bold" key={i}>
                    $
                    {items.discount > 0
                      ? (items.price - (items.price * items.discount) / 100) *
                        items.qty
                      : items.price * items.qty}
                  </p>
                </div>
              </div>

              <div className="relative">
                <button onClick={() => dispatch(delItem(items.uuid))}>
                  <AiFillDelete className="text-red-500 cursor-pointer absolute right-2 top-0" />
                </button>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-4 bg-gray-100 rounded-full px-4 py-2">
                    <button
                    onClick={() => dispatch(subraction({ uuid: items.uuid }))}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="w-8 text-center font-medium">
                      {items.qty}
                    </span>
                    <button
                     onClick={() => dispatch(addition({ uuid: items.uuid }))}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Cartpage;
