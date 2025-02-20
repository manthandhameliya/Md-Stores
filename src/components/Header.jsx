"use client";

import Link from "next/link";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { SheetSide } from "./Humburgur"
import { useSelector } from "react-redux";

export default function Header() {
  const cart = useSelector((state) => state.cart);

  return (
    <header className="w-full fixed top-0 bg-white z-10 h-[70px] md:h-[90px] shadow-md">
      <div className="max-w-screen-2xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center justify-center space-x-2">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800">
            Md Store
          </h1>
        </div>

        <ul className="hidden lg:flex items-center space-x-8">
          <li className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-all duration-200">
            <Link href="/">Home</Link>
          </li>
          <li className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-all duration-200">
            <Link href="/products">Products</Link>
          </li>
          <li className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-all duration-200">
            <Link href="/brands">Brands</Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center bg-[#F0F0F0] w-[500px] h-[40px] rounded-full px-4 hover:border-none transition-all duration-300">
            <IoIosSearch className="text-xl text-gray-500 shrink-0" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-[#F0F0F0] outline-none w-full h-full rounded-full pl-2 text-gray-600"
            />
          </div>

          <div className="relative">
            <Link href="/cart">
              <IoCartOutline className="text-3xl md:text-4xl text-gray-700 hover:text-blue-600 transition-all duration-200" />
            </Link>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center">
                {cart.length}
              </span>
            )}
          </div>

          <MdOutlineAccountCircle className="text-3xl md:text-4xl text-gray-700 hover:text-blue-600 transition-all duration-200" />
          <IoIosSearch className="text-2xl lg:hidden text-gray-700" />
        </div>

        <div className="lg:hidden flex items-center ml-4">
          <SheetSide />
        </div>
      </div>
    </header>
  );
}
