"use client";

import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../../Redux/features/cartSlice';
import Toastity from '@/components/addtocarttosity';

let stars = [<FaStar key={0} />, <FaStar key={1} />, <FaStar key={2} />, <FaStar key={3} />, <FaStar key={4} />];

function SlugPage({ params }) {
    const products = useSelector((state) => state.product);
    const items = products.find((item) => item.slug === params.slug);
    const dispatch = useDispatch();

    const [cartItem, setcartItem] = useState({
        id: items.id,
        title: items.title,
        image: items.image,
        slug: items.slug,
        price: items.price,
        size: items.size,
        color: items.color,
        description: items.description,
        qty: items.qty,
        discount: items.discount,
    });

    return (
        <div className='mt-[170px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10'>
            <div className='flex flex-col lg:flex-row gap-8'>
                {/* Image Gallery */}
                <div className='flex flex-row lg:flex-col order-2 lg:order-1 gap-4 lg:w-1/6'>
                    {[items.image[0], items.image[1], items.image[0]].map((img, index) => (
                        <div key={index} className='relative aspect-square overflow-hidden rounded-xl border-2 hover:border-primary transition-all'>
                            <Image
                                src={img}
                                alt={items.title}
                                fill
                                className='object-cover cursor-pointer'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>

                {/* Main Image */}
                <div className='relative aspect-square w-full lg:w-2/5 rounded-2xl overflow-hidden shadow-lg'>
                    <Image
                        src={items.image[0]}
                        alt={items.title}
                        fill
                        className='object-cover'
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                {/* Product Info */}
                <div className='lg:w-2/5 space-y-6'>
                    <div>
                        <h1 className='text-3xl font-bold mb-2'>{items.title}</h1>
                        <div className='flex items-center gap-2 text-yellow-400'>
                            {stars}
                            <span className='text-gray-500 text-sm ml-2'>(128 reviews)</span>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <div className='flex items-center gap-4'>
                            <p className='text-2xl font-bold text-primary'>
                                ${((cartItem.price - (cartItem.price * cartItem.discount) / 100) * cartItem.qty).toFixed(2)}
                            </p>
                            {cartItem.discount > 0 && (
                                <div className='flex items-center gap-2'>
                                    <span className='text-lg text-gray-400 line-through'>
                                        ${(cartItem.price * cartItem.qty).toFixed(2)}
                                    </span>
                                    <span className='bg-red-100 text-red-600 px-2 py-1 rounded-md text-sm'>
                                        {cartItem.discount}% OFF
                                    </span>
                                </div>
                            )}
                        </div>

                        <p className='text-gray-600 leading-relaxed'>{items.description}</p>
                    </div>

                    <div className='space-y-4'>
                        <div>
                            <h3 className='text-sm font-medium text-gray-700 mb-2'>Select Color</h3>
                            <div className='flex gap-3'>
                                {items.color.map((item, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setcartItem({ ...cartItem, color: item })}
                                        className={`w-10 h-10 rounded-full border-2 transition-all ${
                                            cartItem.color === item ? 'border-primary scale-110' : 'border-transparent'
                                        }`}
                                        style={{ backgroundColor: item }}
                                    >
                                        <span className='sr-only'>{item} color</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className='text-sm font-medium text-gray-700 mb-2'>Select Size</h3>
                            <div className='flex flex-wrap gap-3'>
                                {items.size.map((item, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setcartItem({ ...cartItem, size: item })}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                            cartItem.size === item
                                                ? 'bg-primary text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center gap-6 pt-4'>
                        <div className='flex items-center gap-4 bg-gray-100 rounded-full px-4 py-2'>
                            <button
                                onClick={() => setcartItem({ ...cartItem, qty: Math.max(1, cartItem.qty - 1) })}
                                className='text-gray-600 hover:text-primary transition-colors'
                            >
                                <Minus className='w-5 h-5' />
                            </button>
                            <span className='w-8 text-center font-medium'>{cartItem.qty}</span>
                            <button
                                onClick={() => setcartItem({ ...cartItem, qty: cartItem.qty + 1 })}
                                className='text-gray-600 hover:text-primary transition-colors'
                            >
                                <Plus className='w-5 h-5' />
                            </button>
                        </div>
                        <Toastity cartItem={cartItem} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlugPage;