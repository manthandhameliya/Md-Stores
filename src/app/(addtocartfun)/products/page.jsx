'use client'; // Marking the component as a client-side component

import { FaStar } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';

// Define star icons once
const stars = Array(5).fill(<FaStar className="text-yellow-400" />);

function Products() {
  const products = useSelector((state) => state.product) || []; // Ensure products is always an array

  return (
    <div className="mt-28 mb-28"> {/* Added mb-28 for bottom spacing */}
      <div className="max-w-screen-2xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-8">
          Explore Our Collection
        </h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
                <Link href={`/products/${item.slug}`} className="block relative group">
                  {/* Image */}
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={item.image[0]}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="w-full h-[290px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>

                {/* Product Title */}
                <h2 className="font-bold text-lg mt-3">{item.title}</h2>

                {/* Rating */}
                <p className="flex space-x-1">{stars}</p>

                {/* Price & Discount */}
                <div className="flex items-center space-x-3 mt-2">
                  <p className="font-bold text-lg text-gray-900">₹{item.price}</p>
                  {item.discount && (
                    <p className="text-gray-500 line-through text-sm">₹{item.discount}</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
