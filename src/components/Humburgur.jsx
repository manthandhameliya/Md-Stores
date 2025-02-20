"use client";

import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

const SHEET_SIDES = ["right"];

export function SheetSide() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side} open={isOpen} onOpenChange={toggleSheet}>
          <SheetTrigger asChild className="lg:hidden">
            <button onClick={toggleSheet}>
              <TiThMenu className="text-2xl" />
            </button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader />
            <ul>
              <li className="grid grid-cols-1 space-y-5 place-items-start">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/brands">Brands</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
